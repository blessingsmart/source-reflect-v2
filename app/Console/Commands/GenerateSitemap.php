<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Post;

class GenerateSitemap extends Command
{
    protected $signature = 'generate:sitemap';

    protected $description = 'Generate website sitemap';

    public function handle()
    {
        $sitemap = Sitemap::create()

            // Static Pages
            ->add(Url::create('/'))
            ->add(Url::create('/about'))
            ->add(Url::create('/contact'))
            ->add(Url::create('/services'))
            ->add(Url::create('/blog'));


        // Dynamic Blog Posts
        $posts = Post::where('status', 'published')->get();

        foreach ($posts as $post) {
            $sitemap->add(
                Url::create("/post/{$post->slug}")
                    ->setLastModificationDate($post->updated_at)
            );
        }


        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully.');
    }
}
