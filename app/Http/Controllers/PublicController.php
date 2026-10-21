<?php

namespace App\Http\Controllers;


use App\DTOs\PostFilterDTO;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Middleware\CheckIfBlocked;
use App\Models\Comment;
use App\Models\Hashtag;
use App\Services\FollowService;
use App\Services\PostViewsService;
use App\Services\ViewPostService;

use Inertia\Inertia;

class PublicController extends Controller
{
  public function __construct(
    protected ViewPostService $singlepost,
    protected PostViewsService $views)
  {
    // $this->middleware(['auth','verified',CheckIfBlocked::class]);
  }


  public function search(Request $request)
  {
    $dto = PostFilterDTO::fromRequest($request);
    $postsid = Post::search($dto->search)->get()->pluck('id');
     
    $posts = Post::whereIn('id',$postsid)
    ->withCount(['likes', 'comments'])
    ->with(['user','hashtags'])
    ->sortby($dto->sort)
    ->paginate(5)
    ->withQueryString();

    $hashtags = Hashtag::withCount('posts')->get();
    
    return view('blog', [
      'posts' => $posts,
      'sorts' => $dto->sort,
      'searchquery'=>$dto->search,
      'tags' => $hashtags,
      'authFollowings' => auth()->user() ? auth()->user()->load('followings')->followings->pluck('id')->toArray() : []
    ]);
  }

public function togglefollow(User $user,FollowService $service){
  $follower = auth()->user();
  if (!$follower) {
    return response()->json(['error' => 'Unauthenticated.'], 401);
  }
  if ($follower->id === $user->id) {
    return response()->json(['error' => 'You cannot follow yourself.'], 400);
  }

  $attached = $service->toggle($follower,$user);

  return response()->json(['attached'=>$attached]);
}

  public function viewpost(Post $post)
  {
    $post = $this->singlepost->getPost($post);
    $this->views->getViews($post);

    // Eager load nested comments with author info
    $comments = $post->comments()
      ->whereNull('parent_id')
      ->with([
          'user:id,name,username,avatar',
          'replies.user:id,name,username,avatar',
          'replies.replies.user:id,name,username,avatar',
      ])
      ->latest()
      ->get();

    $isLiked = $post->is_liked();
    $isSaved = in_array($post->id, session('saved-to', []));
    $isFollowingAuthor = (auth()->check() && $post->user) ? auth()->user()->isFollowing($post->user) : false;

    // Load related articles
    $morearticles = Post::query()
      ->with(['user:id,name,username,avatar', 'hashtags:id,name'])
      ->withCount(['likes', 'comments as totalcomments_count'])
      ->where('status', 'published')
      ->where('id', '!=', $post->id)
      ->latest()
      ->take(3)
      ->get();

    return Inertia::render('Post', [
       'post' => array_merge($post->toArray(), [
           'is_liked' => $isLiked,
           'is_saved' => $isSaved,
           'is_following_author' => $isFollowingAuthor,
           'likes_count' => $post->likes_count ?? $post->likes()->count(),
           'views_count' => $post->views ?? 0,
       ]),
       'comments' => $comments,
       'totalcomments' => Comment::where('post_id', $post->id)->count(),
       'morearticles' => $morearticles,
    ]);
  }
}
