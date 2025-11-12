<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\User;

return new class extends Migration
{
    public function up()
    {
        // Step 1: Add nullable slug column without unique
        Schema::table('users', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('username');
        });

        // Step 2: Populate unique slugs
        $users = User::all();
        foreach ($users as $user) {
            $slug = Str::slug($user->username);
            $originalSlug = $slug;
            $count = 1;

            // Ensure uniqueness
            while (User::where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $count;
                $count++;
            }

            $user->slug = $slug;
            $user->save();
        }

        // Step 3: Add UNIQUE index separately
        Schema::table('users', function (Blueprint $table) {
            $table->unique('slug');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['slug']);
            $table->dropColumn('slug');
        });
    }
};
