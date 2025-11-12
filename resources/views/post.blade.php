<x-layout>
<div class="container mx-auto max-w-6xl">

  <div class="relative w-full mx-auto mt-2">
      {{-- delete|edit model  --}}
    @can('view',$post)
      @include('partials.delete-edit-post-model')
      @endcan

  {{-- Hero Image --}}
  <div class="relative mx-auto w-full mt-2 h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="/storage/uploads/{{$post->image_path}}"  alt="{{$post->title}}">
      {{-- Gradient Overlay --}}
      <div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
      
      {{-- hashtags on post --}}
      <div class="absolute z-10 bottom-4 left-6 flex flex-wrap gap-2">
        @foreach($post->hashtags->pluck('name') as $tag)
          <span class="px-3 py-1.5 text-white text-sm rounded-full bg-green-600/90 backdrop-blur-sm font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
            <a href="{{route('viewhashtag',$tag)}}">#{{ $tag }}</a>
          </span>
        @endforeach
      </div>
  </div>

{{-- Post Title & user information --}}
<div class="flex flex-col items-center justify-center container mx-auto pb-6 mt-8">
  <h1 class="block w-full font-bold md:text-5xl text-3xl text-center text-gray-900 leading-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
    {{$post->title}}
  </h1>

   
    <div class="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600">
      <div class="flex items-center gap-3">
        {{-- <a href='{{route('profile',$post->user)}}' class="flex items-center gap-3 group">
          @if($post->user->avatar)
            <img src="{{$post->user->avatar_url}}" class="w-12 h-12 rounded-full border-2 border-green-200 group-hover:border-green-400 transition-colors duration-300">
          @else
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold text-lg border-2 border-green-200">
              {{ substr($post->user->username, 0, 1) }}
            </div>
          @endif
          <span class="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {{$post->user->username}}
          </span>
        </a> --}}
      </div>
      
      <div class="flex items-center gap-4 text-sm">
        <span class="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full text-green-700">
          <i class="far fa-clock"></i>
          {{$post->updated_at->diffForHumans()}}
        </span>
        
        {{-- <span class="follow-status {{ !in_array($post->user->id, $authFollowings) ? 'hidden' : '' }} flex items-center gap-1 bg-emerald-100 px-3 py-1.5 rounded-full text-emerald-700">
          <i class="fas fa-user-check"></i>
          Following
        </span> --}}
      </div>
    </div>
</div>

{{-- Content --}}
<div class="published-content w-full py-8 px-4 bg-white rounded-2xl shadow-sm border border-green-100">
  {!! $post->description !!}
</div>
</div>

{{-- Floating Action Bar --}}
<div id="action-bar-trigger" class="h-[1px] w-full"></div>

<div id="action-bar" class="container mx-auto mb-8 w-fit h-16 space-x-2 flex justify-center items-center gap-4 border border-green-200 rounded-full px-8 py-4 text-xl bg-white shadow-lg backdrop-blur-sm bg-white/95 transition-all duration-300 z-50">
  
  {{-- Like --}}
  <div class="flex items-center justify-center group">
    <span onclick="fetchLike(this)" class="cursor-pointer w-10 h-10 rounded-full flex justify-center items-center hover:bg-green-50 transition-all duration-200 group-hover:scale-110">
      <i class="fa-heart like-icon {{ $post->is_liked() ? 'fas text-red-500' : 'far text-gray-600' }} group-hover:text-red-400" data-id="{{ $post->id }}"></i>
    </span>
    <span title="view who liked" id="likes-count" class="open-view-model text-sm font-semibold text-gray-700 cursor-pointer ml-2 hover:text-green-600 transition-colors">
      {{ $post->likes_count}}
    </span>
  </div>

  @if($post->allow_comments)
  <div class="h-6 w-px bg-green-200"></div>
  
  {{-- Comments --}}
  <div class="flex items-center justify-center group">
    <span title="write a comment" id="openModel" class="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-200 group-hover:scale-110">
      <i class="far fa-comment text-gray-600 group-hover:text-green-500"></i>
    </span>
    <span class="text-sm font-semibold text-gray-700 ml-2">{{ $totalcomments }}</span>
  </div>
  @endif

  @if(auth()->user()->is($post->user))
  <div class="h-6 w-px bg-green-200"></div>
  
  {{-- Views --}}
  <span id="openviewsmodel" class="cursor-pointer flex items-center group">
    <span class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-green-50 transition-all duration-200 group-hover:scale-110">
      <i class="far fa-eye text-gray-600 group-hover:text-blue-500"></i>
    </span>
    <span class="text-sm font-semibold text-gray-700 ml-2">{{$post->views}}</span>
  </span>
  @endif

  <div id="divider" class="h-6 w-px bg-green-200 hidden"></div>
  
  {{-- Table of Contents --}}
  <span title="table of contents" class="open-tocmodel cursor-pointer hidden group">
    <i class="fas fa-list text-gray-600 group-hover:text-purple-500"></i>
  </span>

  <div class="h-6 w-px bg-green-200"></div>
  
  {{-- Save --}}
  <span title="save" onclick="savedTo(this,{{$post->id}})" class="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-200 group-hover:scale-110">
    <i class="fa-bookmark bookmark-icon {{in_array($post->id,session('saved-to',[])) ? 'fas text-green-500' : 'far text-gray-600'}} group-hover:text-green-500"></i>
  </span>

  <div class="h-6 w-px bg-green-200"></div>
  
  {{-- Share --}}
  <span class="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-200 group-hover:scale-110 group">
    <i class="far fa-share-square text-gray-600 group-hover:text-blue-500"></i>
  </span>

  {{-- More Options --}}
  <div @class([
    'relative flex items-center',
    'hidden' => auth()->user()->cannot('report', $post) && auth()->user()->is($post->user)
  ])>
    <div class="h-6 w-px bg-green-200"></div>
    <span id="openmoremodel" title="more options" class="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-200 group-hover:scale-110 group">
      <i class="fas fa-ellipsis-v text-gray-600 group-hover:text-gray-700"></i>
    </span>
    {{-- more menu --}}
    @include('partials.more-menu')
  </div>
</div>

{{-- Bottom Hashtags --}}
<div class="flex justify-center items-center gap-2 mt-6 mb-8">
  @foreach($post->hashtags->pluck('name') as $tag)
  <span class="px-4 py-2 text-white text-sm rounded-full bg-gradient-to-r from-green-500 to-emerald-500 font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg">
    <a href="{{route('viewhashtag',$tag)}}" class="flex items-center gap-1">
      <i class="fas fa-hashtag"></i>
      {{ $tag }}
    </a>
  </span>
  @endforeach
</div>

{{-- More Articles Section --}}
<div class="mt-12 mb-8">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
      More Relocation Insights
    </h2>
    <p class="text-gray-600 text-lg">Discover more helpful articles about settling in Nigeria</p>
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    @foreach($morearticles as $article)
    <div class="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div class="flex gap-3 items-center mb-4">
        {{-- <a href='{{route('profile',$article->user->username)}}' class="flex items-center gap-3 group">
          @if($article->user->avatar)
            <img loading="lazy" src="{{$article->user->avatar_url}}" class="w-10 h-10 rounded-full border-2 border-green-200 group-hover:border-green-400 transition-colors">
          @else
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold text-sm border-2 border-green-200">
              {{ substr($article->user->username, 0, 1) }}
            </div>
          @endif
          <span class="font-medium text-gray-700 group-hover:text-green-600 transition-colors">
            {{$article->user->username}}
          </span>
        </a> --}}
      </div>
      
      <a href="{{route('single.post',$article->slug)}}" class="block">
        <div class="rounded-xl overflow-hidden mb-4">
          <img src="/storage/uploads/{{$article->image_path}}" alt="{{$article->title}}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
        </div>
        <div class="flex flex-col">
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {{$article->title}}
          </h3>
          <p class="text-gray-600 leading-relaxed line-clamp-3">
            {!! Str::words(strip_tags($article->description), 25) !!}
          </p>
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-green-50">
            <span class="text-sm text-green-600 font-medium flex items-center gap-1">
              <i class="far fa-clock"></i>
              {{$article->updated_at->diffForHumans()}}
            </span>
            <span class="text-sm text-gray-500 flex items-center gap-2">
              <span class="flex items-center gap-1">
                <i class="far fa-heart"></i>
                {{$article->likes_count}}
              </span>
              <span class="flex items-center gap-1">
                <i class="far fa-comment"></i>
                {{$article->totalcomments_count}}
              </span>
            </span>
          </div>
        </div>
      </a>
    </div>
    @endforeach
  </div>
</div>

{{-- Floating Elements --}}
<div id="containerheart"></div>

{{-- Models --}}
@include('partials.comments-model')
@include('partials.table-of-contents-model')
@include('partials.view-who-liked-model')
@include('partials.who-viewedpost-model')
@include('partials.reports-model')

{{-- Enhanced Styles --}}
<style>
  .published-content {
    line-height: 1.8;
    font-size: 1.125rem;
    color: #374151;
  }
  
  .published-content h1, 
  .published-content h2, 
  .published-content h3 {
    color: #059669;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .published-content p {
    margin-bottom: 1.5rem;
  }
  
  .published-content a {
    color: #059669;
    text-decoration: underline;
  }
  
  .published-content a:hover {
    color: #047857;
  }
  
  /* Floating action bar styles */
  #action-bar.fixed {
    animation: slideUp 0.3s ease-out;
  }
  
  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
  
  /* Smooth transitions */
  .transition-bg {
    transition: background-color 0.2s ease;
  }
  
  /* Line clamp utilities */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Custom scrollbar for models */
  .no-scroll {
    overflow: hidden;
  }
</style>

{{-- All scripts ---}}
@push('scripts')
{{-- Post menu edit and delete option --}}
@can('view',$post)
<script>
  const OpenModel = document.getElementById('openmodel');
  const Model = document.getElementById('model');
  OpenModel.addEventListener('click',()=>{
    Model.classList.toggle('hidden');
  })
</script>
@endcan

{{-- Observer for floating action bar --}}
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const actionBar = document.getElementById('action-bar');
    const trigger = document.getElementById('action-bar-trigger');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          actionBar.classList.remove('fixed', 'bottom-6', 'left-1/2', '-translate-x-1/2', 'shadow-xl', 'backdrop-blur-md');
          actionBar.classList.add('relative', 'mx-auto');
        } else {
          actionBar.classList.remove('relative', 'mx-auto');
          actionBar.classList.add('fixed', 'bottom-6', 'left-1/2', '-translate-x-1/2', 'shadow-xl', 'backdrop-blur-md');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-100px 0px 0px 0px'
    });

    if (trigger) observer.observe(trigger);
  });
</script>

{{-- Open comments model if allowed --}}
@if($post->allow_comments)
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const opencommentModel = document.getElementById('openModel');
    const closeModel = document.getElementById('closeModel');
    const commentModel = document.getElementById('commentModel');
    const bgmodel = document.getElementById('bgmodel');
  
    opencommentModel?.addEventListener('click', () => {
      document.body.classList.add('no-scroll');
      bgmodel.classList.remove('hidden');
      
      setTimeout(() => {
        bgmodel.classList.add('opacity-100');
        bgmodel.classList.remove('opacity-0');
        commentModel.classList.remove('translate-x-[-110vw]');
        commentModel.classList.add('translate-x-[0]');
      }, 10);
    });
  
    closeModel?.addEventListener('click', () => {
      document.body.classList.remove('no-scroll');
      bgmodel.classList.remove('opacity-100');
      bgmodel.classList.add('opacity-0');
      commentModel.classList.remove('translate-x-[0]');
      commentModel.classList.add('translate-x-[-110vw]');
      
      setTimeout(() => {
        bgmodel.classList.add('hidden');
      }, 300);
    });
  });
</script>
@endif

{{-- Other existing scripts remain the same --}}
{{-- ... existing JavaScript code ... --}}

@endpush
</x-layout>