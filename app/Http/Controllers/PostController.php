<?php

namespace App\Http\Controllers;

use App\DTOs\CreatePostDTO;
use App\DTOs\UpdatePostDTO;
use App\Http\Middleware\CheckIfBlocked;
use App\Http\Requests\App\CreatePostRequest;
use App\Http\Requests\App\UpdatePostRequest;
use App\Models\Hashtag;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function __construct()
    {
        // Apply auth middleware only to methods that need it
        $this->middleware(['auth', CheckIfBlocked::class])->except(['blogpost']);
        $this->middleware('password.confirm')->only('editpost');
    }

    /**
     * Public blog page - accessible to everyone
     */
    public function blogpost(Request $request)
    {
        $query = $request->get('search');
        $sortoption = $request->get('sort', 'latest');

        // Base query for published posts only
        $postsQuery = Post::query()
            ->with(['user:id,username,avatar', 'hashtags:id,name'])
            ->withCount(['likes', 'comments as totalcomments_count']);

        // Apply search if provided
        if ($query) {
            $postsQuery->where(function($q) use ($query) {
                $q->where('title', 'like', "%{$query}%")
                  ->orWhere('description', 'like', "%{$query}%")
                  ->orWhereHas('hashtags', function($q) use ($query) {
                      $q->where('name', 'like', "%{$query}%");
                  });
            });
        }

        // Apply sorting
        switch ($sortoption) {
            case 'oldest':
                $postsQuery->oldest();
                break;
            case 'mostliked':
                $postsQuery->orderBy('likes_count', 'desc');
                break;
            case 'mostviewed':
                $postsQuery->orderBy('views', 'desc');
                break;
            case 'featured':
                $postsQuery->where('is_featured', true)->latest();
                break;
            case 'followings':
                // Only show following posts for authenticated users
                if (Auth::check()) {
                    $followings = Auth::user()->followings()->pluck('users.id');
                    $postsQuery->whereIn('user_id', $followings);
                }
                $postsQuery->latest();
                break;
            case 'hashtagtrend':
                // Sort by posts with most hashtags (trending topics)
                $postsQuery->withCount('hashtags')
                    ->orderBy('hashtags_count', 'desc')
                    ->latest();
                break;
            case 'latest':
            default:
                $postsQuery->latest();
                break;
        }

        $posts = $postsQuery->paginate(12);

        // Get popular tags for public display
        $hashtags = Hashtag::withCount(['posts' => function($query) {
            $query->where('status', 'published'); // Only count published posts
        }])
        ->orderBy('posts_count', 'desc')
        ->limit(20)
        ->get();

        // For authenticated users, include additional data
        $authFollowings = [];
        if (Auth::check()) {
            $authFollowings = Auth::user()->followings()->pluck('users.id')->toArray();
        }

        return view('blog', [
            'tags' => $hashtags,
            'posts' => $posts,
            'sort' => $sortoption,
            'authFollowings' => $authFollowings,
            'search' => $query
        ]);
    }

    /**
     * Create post page - authenticated users only
     */
    public function createpage()
    {
        $allhashtags = Hashtag::pluck('name');

        return view('create', [
            'allhashtags' => $allhashtags
        ]);
    }

    /**
     * Create new post - authenticated users only
     */
    public function create(CreatePostRequest $request, PostService $service)
    {
        $dto = CreatePostDTO::fromAppRequest($request);
        $service->create($dto);
        
        session()->flash('success', 'Posted successfully');
        
        return redirect('/blog');
    }

    /**
     * Delete post - authenticated users only (with authorization)
     */
    public function delete($slug)
    {
        $post = Post::whereSlug($slug)->firstOrFail();
        $this->authorize('delete', $post);
        $post->delete();
        session()->flash('success', 'Post deleted successfully');
        return redirect('/blog');
    }

    /**
     * Edit post page - authenticated users only (with authorization)
     */
    public function editpost($slug)
    {
        $post = Post::whereSlug($slug)->firstOrFail();
        $this->authorize('view', $post);

        $hashtags = $post->hashtags()->pluck('name')->implode(', ');
        $allhashtags = Hashtag::pluck('name');
        
        return view('updatepost', [
            'post' => $post,
            'hashtags' => $hashtags,
            'allhashtags' => $allhashtags,
        ]);
    }

    /**
     * Update post - authenticated users only (with authorization)
     */
    public function update($slug, UpdatePostRequest $request, PostService $service)
    {
        $post = Post::whereSlug($slug)->firstOrFail();
        $this->authorize('update', $post);
        $dto = UpdatePostDTO::fromAppRequest($request);
        $service->update($post, $dto);

        session()->flash('success', 'Post updated successfully');
        return redirect('/blog');
    }

    /**
     * Like/unlike post - authenticated users only
     */
    public function like(Post $post)
    {

        if ($post->is_liked()) {
            $like = $post->likes()->where('user_id', auth()->user()->id)->first();
            if ($like) {
                $like->delete();
                $post->decrement('likes_count');
            }
        
            return response()->json(['liked' => false]);
        }
        
        $post->likes()->create(['user_id' => auth()->user()->id]);
        $post->increment('likes_count');

        return response()->json([
            'liked' => true,
            'likes_count' => $post->likes_count
        ]);
    }

    /**
     * Save/unsave post - authenticated users only
     */
    public function save(Request $request)
    {
        $fields = $request->validate([
            'post_id' => 'required|int'
        ]);
        
        $postId = $fields['post_id'];
        
        // Verify post exists and is published
        $post = Post::where('id', $postId)->first();
        if (!$post) {
            return response()->json(['error' => 'Post not available'], 404);
        }

        $savedposts = session('saved-to', []);
        if (in_array($postId, $savedposts)) {
            $savedposts = array_diff($savedposts, [$postId]);
            session(['saved-to' => $savedposts]);
            return response()->json(['status' => 'removed']);
        } else {
            $savedposts[] = $postId;
            session(['saved-to' => $savedposts]);
            return response()->json(['status' => 'added']);
        }
    }

    /**
     * Get saved posts - authenticated users only
     */
    public function getsavedposts()
    {
        $getposts = session('saved-to', []);
        
        $posts = Post::whereIn('id', $getposts)
            ->withCount(['likes', 'comments'])
            ->with(['user', 'hashtags'])
            ->paginate(12);

        return view('getsavedposts', [
            'posts' => $posts,
        ]);
    }

    /**
     * Get posts by hashtag - public access
     */
    public function postsByHashtag($hashtagName)
    {
        $hashtag = Hashtag::where('name', $hashtagName)->firstOrFail();
        
        $posts = $hashtag->posts()
            ->with(['user:id,username,avatar', 'hashtags:id,name'])
            ->withCount(['likes', 'comments as totalcomments_count'])
            ->latest()
            ->paginate(12);

        $popularHashtags = Hashtag::withCount(['posts' => function($query) {
            $query->where('status', 'published');
        }])
        ->orderBy('posts_count', 'desc')
        ->limit(15)
        ->get();

        return view('hashtag-posts', [
            'hashtag' => $hashtag,
            'posts' => $posts,
            'popularHashtags' => $popularHashtags,
        ]);
    }
}