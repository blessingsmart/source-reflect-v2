<?php

namespace App\Services;

use App\DTOs\CreatePostDTO;
use App\Models\Post;
use App\Traits\ImageUploadTrait;
use Illuminate\Support\Str;

class PostService
{
    use ImageUploadTrait;

    public function create(CreatePostDTO $dto): Post
    {
        // Generate slug from title
        $slug = Str::slug($dto->title);
        
        // Upload image if provided
        $imagePath = null;
        if ($dto->image) {
            $imagePath = $this->uploadImage($dto->image, $slug);
        }

        // Create the post
        $post = Post::create([
            'title' => $dto->title,
            'description' => $dto->description,
            'slug' => $slug,
            'image_path' => $imagePath,
            'user_id' => auth()->id(),
            'allow_comments' => $dto->allow_comments ?? true,
        ]);

        // Sync hashtags if provided
        if ($dto->hashtags) {
            $post->syncHashtags($dto->hashtags);
        }

        return $post;
    }

    public function update(Post $post, UpdatePostDTO $dto): Post
    {
        // Generate new slug if title changed
        $slug = $post->slug;
        if ($dto->title !== $post->title) {
            $slug = Str::slug($dto->title);
        }

        // Upload new image if provided
        $imagePath = $post->image_path;
        if ($dto->image) {
            // Delete old image
            if ($post->image_path) {
                Storage::disk('public')->delete("uploads/{$post->image_path}");
            }
            $imagePath = $this->uploadImage($dto->image, $slug);
        }

        // Update the post
        $post->update([
            'title' => $dto->title,
            'description' => $dto->description,
            'slug' => $slug,
            'image_path' => $imagePath,
            'allow_comments' => $dto->allow_comments ?? $post->allow_comments,
        ]);

        // Sync hashtags if provided
        if ($dto->hashtags) {
            $post->syncHashtags($dto->hashtags);
        }

        return $post->fresh();
    }
}