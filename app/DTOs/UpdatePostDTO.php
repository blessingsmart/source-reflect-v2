<?php

namespace App\DTOs;

use App\Http\Requests\App\UpdatePostRequest as AppUpdateRequest;
use Illuminate\Http\UploadedFile;

class UpdatePostDTO
{
      public function __construct(
       public readonly string $title,
       public readonly string $description,
       public readonly ?bool $allowComments,
       public readonly ?string $hashtags,
       public readonly ?bool $isFeatured = false,
       public readonly ?UploadedFile $image = null,
    ){}

     public static function fromAppRequest(AppUpdateRequest $request): self
    {
        $title = htmlspecialchars(strip_tags($request->validated('title')));
        $allowComments = $request->has('allow_comments') ? $request->boolean('allow_comments') : $request->boolean('enabled');
        $featured = $request->boolean('featured');

        return new self(
            title: $title,
            description: $request->validated('description'),
            allowComments: $allowComments,
            hashtags: $request->filled('hashtag') ? $request->validated('hashtag') : null,
            isFeatured: $featured,
            image: $request->file('image')
          );
    }
}
