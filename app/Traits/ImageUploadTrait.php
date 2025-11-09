<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

trait ImageUploadTrait
{
    private function getImageManager()
    {
        return new ImageManager(Driver::class);
    }

    public function uploadImage(UploadedFile $imageFile, string $slug): string
    {
        $newimage = uniqid() . '-' . $slug . '.' . $imageFile->extension();
        $manager = $this->getImageManager();
        $image = $manager->read($imageFile->getRealPath())
              ->scaleDown(1300, 600)
              ->encode();
        Storage::disk('public')->put("uploads/{$newimage}", $image);
        return $newimage;
    }

    public function uploadAvatarImage(UploadedFile $imageFile, string $username): string
    {
        $newavatar = uniqid() . '-avatar-' . $username . '.' . $imageFile->extension();
        $manager = $this->getImageManager();
        $image = $manager->read($imageFile->getRealPath())
              ->scaleDown(150, 150)
              ->encode();
        Storage::disk('public')->put("avatars/{$newavatar}", $image);
        return $newavatar;
    }

    public function uploadCoverImage(UploadedFile $imageFile, string $username): string
    {
        $newcover = uniqid() . '-cover-' . $username . '.' . $imageFile->extension();
        $manager = $this->getImageManager();
        $image = $manager->read($imageFile->getRealPath())
              ->scaleDown(1500, 500)
              ->encode();
        Storage::disk('public')->put("covers/{$newcover}", $image);
        return $newcover;
    }
}