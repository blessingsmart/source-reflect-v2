<!DOCTYPE html>
<html lang="en">
<head>
@include('components.head')
</head>
<body class="min-h-screen flex flex-col m-0">
  <nav class="w-screen px-6 py-4 {{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'bg-opacity-0 absolute z-50' : 'bg-white border-b border-green-100 shadow-sm'}} transition-all duration-300">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <a href="/" class="flex items-center gap-2 group">
          <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-2 rounded-xl font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
            Setu<span class="text-green-200">Down</span>
          </div>
          <span class="text-gray-600 text-sm font-medium hidden sm:block">Relocation Services</span>
        </a>
      </div>
  
      <!-- Desktop Menu -->
      <div class="md:flex md:items-center space-x-8 hidden">
        <ul class="flex items-center space-x-8">
        
          {{-- User Dropdown --}}
          @auth
          <li class="relative group" id="dropdown">
            <div class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-all duration-200">
              @if(auth()->user()->avatar)
                <img src="{{ asset('storage/avatars/' . auth()->user()->avatar) }}" 
                     alt="{{ auth()->user()->name }}" 
                     class="h-8 w-8 rounded-full object-cover border-2 border-green-200">
              @else
                <div class="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold text-sm border-2 border-green-200">
                  {{ substr(auth()->user()->name, 0, 1) }}
                </div>
              @endif
              <span class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white' : 'text-gray-700'}} font-medium text-sm">
                {{ auth()->user()->name }}
              </span>
              <i class="fas fa-chevron-down text-green-500 text-xs transition-transform group-hover:rotate-180"></i>
            </div>
            {{-- @include('partials.hover-menu') --}}
          </li>
          @endauth

          {{-- Auth Links --}}
          @if(!auth()->user())
          <li>
            <a href="{{route('login')}}" 
               class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-700 hover:text-green-600'}} font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 {{Route::is('login') ? 'bg-green-50 text-green-600 font-semibold' : ''}}">
              Login
            </a>
          </li>
          <li>
            <a href="{{route('register')}}" 
               class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 {{Route::is('register') ? 'shadow-lg' : ''}}">
              Get Started
            </a>
          </li>
          @else  
          {{-- Blog Link --}}
          <li>
            <a href="/blog" 
               class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-700 hover:text-green-600'}} font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 {{Route::is('blog') ? 'bg-green-50 text-green-600 font-semibold' : ''}}">
              Blog
            </a>
          </li>

          {{-- Notifications --}}
          @unless(request()->is('admin*'))
          <li id="hover-notification" class="relative group cursor-pointer">
            <div class="p-2 rounded-lg hover:bg-green-50 transition-all duration-200">
              <i class="fas fa-bell {{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white group-hover:text-green-200' : 'text-gray-600 group-hover:text-green-600'}} transition-colors duration-200"></i>
              @if(auth()->user()->unreadNotifications->count() > 0)
                <span class="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white flex justify-center items-center rounded-full text-xs font-bold shadow-lg animate-pulse">
                  {{ auth()->user()->unreadNotifications->count() }}
                </span>
              @endif
            </div>
            @include('partials.notifications-menu')
          </li>
          @endunless

          {{-- Saved --}}
          <li>
            <a href="{{route('bookmarks')}}" 
               class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-700 hover:text-green-600'}} font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 {{Route::is('bookmarks') ? 'bg-green-50 text-green-600 font-semibold' : ''}}">
              <i class="far fa-bookmark mr-1"></i>
              Saved
            </a>
          </li>

          {{-- Admin Panel --}}
          @if(auth()->user()->hasAnyRole(['Admin','Moderator']) || auth()->user()->hasPermission('Access'))
          <li>
            <a href="{{route('admin-page')}}" 
               class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-700 hover:text-green-600'}} font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 {{Route::is('admin-page') ? 'bg-green-50 text-green-600 font-semibold' : ''}}">
              <i class="fas fa-cog mr-1"></i>
              Admin
            </a>
          </li>
          @endif
          @endif

          {{-- Home Link --}}
          @if(!Route::is('home'))
          <li>
            <a href="/" 
               class="{{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-700 hover:text-green-600'}} font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 {{Route::is('home') ? 'bg-green-50 text-green-600 font-semibold' : ''}}">
              Home
            </a>
          </li>
          @endif
        </ul>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-btn" class="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors duration-200 {{Route::is(['profile','home','profile.aboutme','profile.activity']) ? 'text-white hover:text-green-200' : 'text-gray-600 hover:text-green-600'}}">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>

    {{-- Mobile Menu --}}
    <div class="md:hidden">
      {{-- @include('partials.burger-menu') --}}
    </div>
  </nav>

  <style>
    /* Custom animations for the nav */
    .nav-shadow {
      box-shadow: 0 4px 20px rgba(5, 150, 105, 0.1);
    }
    
    /* Gradient text effect */
    .gradient-text {
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Smooth transitions */
    nav {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Hover effects */
    .nav-item {
      position: relative;
      transition: all 0.3s ease;
    }
    
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #059669, #10b981);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    .nav-item:hover::after {
      width: 80%;
    }
    
    /* Pulse animation for notifications */
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
      }
      50% {
        box-shadow: 0 0 15px rgba(239, 68, 68, 0.8);
      }
    }
    
    .animate-pulse {
      animation: pulse-glow 2s infinite;
    }
    
    /* Mobile menu improvements */
    @media (max-width: 768px) {
      nav {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  </style>

  <script>
    // Add scroll effect to navigation
    document.addEventListener('DOMContentLoaded', function() {
      const nav = document.querySelector('nav');
      
      if (nav.classList.contains('bg-opacity-0')) {
        window.addEventListener('scroll', function() {
          if (window.scrollY > 100) {
            nav.classList.remove('bg-opacity-0');
            nav.classList.add('bg-white', 'nav-shadow', 'border-b', 'border-green-100');
            // Update text colors for better contrast
            const whiteTexts = nav.querySelectorAll('.text-white');
            whiteTexts.forEach(text => {
              text.classList.remove('text-white');
              text.classList.add('text-gray-700');
            });
          } else {
            nav.classList.add('bg-opacity-0');
            nav.classList.remove('bg-white', 'nav-shadow', 'border-b', 'border-green-100');
            // Revert text colors
            const grayTexts = nav.querySelectorAll('.text-gray-700');
            grayTexts.forEach(text => {
              if (text.closest('nav').classList.contains('bg-opacity-0')) {
                text.classList.remove('text-gray-700');
                text.classList.add('text-white');
              }
            });
          }
        });
      }
    });

    // Mobile menu functionality
    document.getElementById('mobile-btn')?.addEventListener('click', function() {
      // Toggle mobile menu visibility
      const mobileMenu = document.querySelector('#mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  </script>
  <script>
    const imageSelected = document.getElementById('imageSelected');
    const imagePreview = document.getElementById('imagePreview');
    const imageContainer = document.getElementById('imageContainer');
    const cancelPreview = document.getElementById('cancelPreview');
    const fileSize = document.getElementById('fileSize');
  
    imageSelected.addEventListener('change',event=>{
        const file = event.target.files[0];
        if(file){
          const reader = new FileReader();
  
          reader.onload = eo =>{
            imagePreview.src = eo.target.result;
            imagePreview.classList.remove('hidden');
            cancelPreview.classList.remove('hidden');
            imageContainer.classList.remove('hidden');
            fileSize.classList.remove('hidden');
            fileSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB / 5MB`; 
          }
          reader.readAsDataURL(file);
        }else{
          imagePreview.src = '#';
          imagePreview.classList.add('hidden');
        }
  
    })
    cancelPreview.addEventListener('click', function () {
      imageSelected.value = ''; 
      imagePreview.src = '#';
      cancelPreview.classList.add('hidden');
      fileSize.classList.add('hidden');
      imageContainer.classList.add('hidden');
    });
	</script>
  
</body>
</html>