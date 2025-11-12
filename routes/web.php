<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    AdminController,
    NotificationsController,
    TagsController,
    PermissionsController,
    RolesController,
    SettingController
};
use App\Http\Controllers\{
    CommentController,
    EditProfileController,
    Hashtagcontroller,
    HomeController,
    NotificationController,
    PostController,
    PostReportController,
    ProfileController,
    PublicController,
    TinyMCEController,
    UserSettingController
};
use Inertia\Inertia;

// Public Routes
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('About-Us');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('Contact-Us');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('Services');

// Public Blog Routes
Route::get('/blog', [PostController::class, 'blogpost'])->name('blog');
Route::get('/post/{post:slug}', [PublicController::class, 'viewpost'])->name('single.post');
Route::get('/hashtag/{hashtag:name}', [Hashtagcontroller::class, 'viewhashtag'])->name('viewhashtag');
Route::get('/search', [PublicController::class, 'search'])->name('blog.search');

// Health Check
Route::get('/health-check', function () {
    return response()->json(['status' => 'ok', 'timestamp' => now()]);
});

// Auth Routes
require __DIR__.'/auth.php';

// Settings Routes
require __DIR__.'/settings.php';

// Authenticated User Routes
Route::middleware(['auth'])->group(function () {
    
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Post Management
    Route::get('/createpage', [PostController::class, 'createpage'])->name('createpage');
    Route::post('/create', [PostController::class, 'create'])->name('create');
    Route::get('/post/edit/{slug}', [PostController::class, 'editpost'])->name('edit.post');
    Route::delete('/post/{slug}', [PostController::class, 'delete'])->name('delete.post');
    Route::put('/post/update/{slug}', [PostController::class, 'update'])->name('update.post');

    // TinyMCE Image Handling
    Route::post('/upload-image', [TinyMCEController::class, 'uploadImage'])->name('tinymce.upload');
    Route::post('/image-delete', [TinyMCEController::class, 'deleteImage'])->name('tinymce.delete');

    // User Profile
    Route::controller(ProfileController::class)
        ->middleware('can:view,user')
        ->group(function(){
            Route::get('/user/{user:slug}', 'Home')->name('profile');
            Route::get('/user/{user:slug}/activity', 'activity')->name('profile.activity');
            Route::get('/user/{user:slug}/about', 'aboutme')->name('profile.aboutme');
        });

    // User Settings
    Route::controller(UserSettingController::class)->group(function(){
        Route::get('/edit-profile/{user:slug}', 'editprofilepage')
            ->middleware('password.confirm')
            ->name('editprofile');
        Route::put('/addbio/{user}', 'useraddbio')->name('add.bio');
        Route::put('/addaboutme/{user}', 'useraboutme')->name('add.about');
        Route::put('/add/socail-links/{user}', 'social_links')->name('add.sociallinks');
        Route::put('/add/custom-links/{user}', 'custom_links')->name('add.customlinks');
        Route::delete('/delete/custom-link/{id}', 'destroy_link')->name('destroy.customlink');
        Route::put('/edit-email/{user}', 'editemail')->name('edit.email');
        Route::put('/change-name/{user}', 'editname')->name('edit.name');
        Route::put('/change-phone/{user}', 'editphone')->name('edit.phone');
        Route::put('/change-pass/{user}', 'editpassword')->name('edit.pass');
        Route::delete('/account-delete/{user}', 'deleteaccount')->name('account.delete');
    });

    // Profile Media
    Route::controller(EditProfileController::class)->group(function(){
        Route::get('/edit-avatar/{user}', 'editavatarpage')->name('edit.avatarpage');
        Route::put('/edit-avatar/{user}/edit', 'editavatar')->name('edit.avatar');
        Route::delete('/delete-avatar/{user}', 'destroyavatar')->name('delete.avatar');
        Route::get('/edit-cover/{user}', 'editcoverpage')->name('edit.coverpage');
        Route::put('/edit-cover/{user}/edit', 'editcover')->name('edit.cover');
        Route::delete('/delete-cover/{user}', 'destroycover')->name('delete.cover');
    });

    // Interactions
    Route::post('/post/{post}/like', [PostController::class, 'like']);
    Route::post('/user/{user}/togglefollow', [PublicController::class, 'togglefollow'])->name('toggle.follow');
    Route::post('/comment/{post}', [CommentController::class, 'comment']);
    Route::post('/reply/{comment}', [CommentController::class, 'reply']);
    Route::put('/comment/edit/{comment}', [CommentController::class, 'editcomment'])->name('edit.comment');
    Route::delete('/comment/{comment}', [CommentController::class, 'deletecomment'])->name('delete.comment');
    Route::post('/report-post/{post}', [PostReportController::class, 'report_post'])->name('post.report');
    Route::post('/saved-post', [PostController::class, 'save']);
    Route::get('/getsavedposts', [PostController::class, 'getsavedposts'])->name('bookmarks');

    // Notifications
    Route::get('/notifications/{id}/read', [NotificationController::class, 'markasread'])->name('notifications.read');
    Route::delete('/notifications/{id}/delete', [NotificationController::class, 'delete'])->name('notifications.delete');
    Route::delete('/notifications/deleteAll', [NotificationController::class, 'deleteAll'])->name('notifications.deleteAll');
});

// Admin Panel Routes
Route::prefix('admin')
    ->middleware(['auth', 'can:makeAdminActions'])
    ->group(function () {
        Route::controller(AdminController::class)->group(function(){
            Route::get('/panel', 'admin')->name("admin-page");
            Route::get('/users', 'users')->name('admin.users');
            Route::get('/posts', 'posts')->name('admin.posts');
            Route::get('/post-reports', 'post_reports')->name('admin.postreports');
            Route::delete('/report/delete/{report}', 'report_delete')->name('delete.report');
            Route::post('/create/user', 'createuser')->name('create.user');
            Route::put('/edit/{user}', 'updateuser')->name('update.user');
            Route::get('/featured', 'featuredpage')->name('featuredpage');
            Route::post('/featured', 'create_feature')->name('admin.featured');
            Route::put('/toggle/feature/{post}', 'toggle_feature')->name('toggle.feature');
            Route::put('/role-update/{user}', 'role')->name('role.update');
            Route::put('/toggle/block/{user}', 'toggle_block')->name('toggle.block');
        });
        
        Route::controller(TagsController::class)->group(function(){
            Route::get('/hashtags', 'hashtagpage')->name('hashtagpage');
            Route::post('/create/tag', 'create_tag')->name('create.hashtag');
            Route::put('/edit/{hashtag}', 'edit_tag')->name('edit.hashtag');
            Route::delete('/delete/{hashtag}', 'delete_tag')->name('delete.hashtag');
        });
        
        Route::resource('roles', RolesController::class);
        Route::resource('permissions', PermissionsController::class);
        Route::delete('/admin/delete/{user}', [AdminController::class, 'destroy'])->name('delete.user');
        Route::get('/notifications', [NotificationsController::class, 'notifications'])->name('admin.notify');
        
        Route::controller(SettingController::class)->group(function(){
            Route::get('/settings', 'settings')->name('admin.settings');
            Route::put('/settings/{user}', 'update_settings')->name('admin.update');
            Route::put('/settings-pass/{user}', 'update_pass')->name('admin.pass');
            Route::put('/settings-aboutme/{user}', 'update_aboutme')->name('admin.aboutme');
        });
    });