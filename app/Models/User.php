<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;
use App\Traits\HasPermissionsTrait;
use Illuminate\Support\Str;

class User extends Authenticatable 
{
    use HasApiTokens, HasFactory, Notifiable, HasPermissionsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'name',
      'username',
      'slug',
      'email',
      'password',
      'phone',
      'age',
      'avatar',
      'cover_photo',
      'github',
      'linkedin',
      'twitter',
      'is_blocked',
      'aboutme'
  ];


  public function post(){
    return $this->hasMany(Post::class);
  }

  public function likes(){
    return $this->hasMany(Like::class);
  }

  public function comments(){
    return $this->hasMany(Comment::class);
  }
  public function replies(){
    return $this->comments()->whereNotNull('parent_id');
  }
  public function followings(){
    return $this->belongsToMany(User::class,'followers','follower_id','user_id');
  }
  public function followers(){
    return $this->belongsToMany(User::class,'followers','user_id','follower_id');
  }
  public function isFollowing(User $user)
  {
      return $this->followings()->where('user_id', $user->id)->exists();
  }
  public function socialLinks()
  {
    return $this->hasMany(SocialLink::class);
  }
public function scopeSearch($query,$search)
{
  if(isset($search['search'])){
    $query->where('name','like','%'.$search['search'].'%')
          ->orWhere('email','like','%'.$search['search'].'%');
  }
}
public function getAvatarUrlAttribute()
{
    return $this->avatar !== "default.jpg" 
        ? Storage::url('avatars/'.$this->avatar) 
        : asset('storage/avatars/'.$this->avatar);
}
public function getCoverAttribute()
{
  return $this->cover_photo === 'sunset.jpg'
        ? asset('storage/covers/'.$this->cover_photo) 
        : Storage::url('covers/' . $this->cover_photo);
}
    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        // Generate slug automatically when creating user
        static::creating(function ($user) {
            if (empty($user->slug)) {
                $user->slug = $user->generateUniqueSlug();
            }
        });

        // Update slug when username changes
        static::updating(function ($user) {
            if ($user->isDirty('username')) {
                $user->slug = $user->generateUniqueSlug();
            }
        });
    }

    /**
     * Generate a unique slug for the user
     */
    public function generateUniqueSlug()
    {
        $slug = Str::slug($this->username);
        $originalSlug = $slug;
        $count = 1;

        // Check if slug already exists
        while (static::where('slug', $slug)->where('id', '!=', $this->id)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    /**
     * Get the route key for the model (for pretty URLs)
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
