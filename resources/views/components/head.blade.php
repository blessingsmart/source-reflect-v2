<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="shortcut icon" href="{{url('/img/icon.png')}}" type="image/png" />
<link rel="apple-touch-icon" href="{{url('/img/apple-touch-icon.png')}}" />
<meta name="theme-color" content="#000000" />
{{-- SEO --}}
<meta 
    name="description" 
    content="@yield('meta_description',
    config('app.name'). '- welcome to our platform where all users share their posts and connect with each other')" 
  >
<meta 
     name="keywords"
     content="@yield('meta_keywords',
     'laravel, blogpost, post, links, link, cv, portfolio, aggregation, platform, social, media, profile, bio, tree')" 

 >
<meta 
    name="author" 
    content="@yield('author',config('app.name'))"
>
<meta 
     content="BlogPost"
     property="og:site_name"
      />
<meta 
    property="og:url" 
    content="{{ url()->current() }}" 
/>
<meta 
    property="og:type" 
    content="@yield('og_type', 'website')" 
/>
<meta 
    property="og:title" 
    content="@yield('meta_title',
     config('app.name').'- The platform that let users connect with each others and share their ideas .')" 
/>
<meta 
    property="og:description" 
    content="@yield('meta_description',
    config('app.name'). '- welcome to our platform where all users share their posts and connect with each other')" 
/>
<meta 
    property="og:image" 
    content="@yield('og_image', url('/img/logo.png'))" 
/>

<meta 
     property="og:image:width" 
     content="200" 
/>
<meta
     property="og:image:height" 
     content="200" 
 />

<title>@yield('meta_title',config('app.name').'- The platform that let users connect with each others and share their ideas .')</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
{{-- <link rel="stylesheet" href="{{asset('assets/vendor/@fortawesome/fontawesome-free/css/all.min.css')}}" /> --}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
{{-- <link rel="stylesheet" href="{{url('style.css')}}"> --}}
{{-- <link rel="stylesheet" href="{{url('tinymce.css')}}"> --}}
@vite(['resources/css/app.css', 'resources/js/app.tsx'])
@stack('styles')

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .card-hover {
            transition: all 0.3s ease;

        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .tag-transition {
            transition: all 0.5s ease-in-out;
        }
        
        .btn-primary {
            background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background: linear-gradient(90deg, #4338ca 0%, #6d28d9 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }
        
        .post-card {
            border-left: 4px solid #4f46e5;
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-out {
    animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
}
    
    

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
    </style>
    