<?php

namespace Database\Seeders;

use App\Models\CatPost;
use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CatPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $catPosts = CatPost::factory(10)->create();
        $catPosts->each(function ($post) {
            $post->images()->saveMany(Image::factory()->count(5)->make());
        });
    }
}
