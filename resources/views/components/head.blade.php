    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{url('/img/icon.png')}}" type="image/png" />
    <link rel="apple-touch-icon" href="{{url('/img/apple-touch-icon.png')}}" />
    <meta name="theme-color" content="#059669" />
    
    {{-- SEO --}}
    <meta 
        name="description" 
        content="@yield('meta_description',
        'Setu Down Blog - Expert insights on relocating to Nigeria, cultural orientation, housing tips, and settlement advice for diaspora returnees and expats.')" 
    >
    <meta 
        name="keywords"
        content="@yield('meta_keywords',
        'Nigeria relocation, diaspora returnee, expat Nigeria, Lagos housing, Abuja schools, cultural orientation, Setu Down, relocation services')" 
    >
    <meta 
        name="author" 
        content="@yield('author','Setu Down')"
    >
    <meta 
        content="Setu Down Blog"
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
        'Setu Down Blog - Relocation Insights & Nigeria Settlement Tips')" 
    />
    <meta 
        property="og:description" 
        content="@yield('meta_description',
        'Expert insights on relocating to Nigeria, cultural orientation, housing tips, and settlement advice for diaspora returnees and expats.')" 
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

    <title>@yield('meta_title','Setu Down Blog - Relocation Insights & Nigeria Settlement Tips')</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
    <script src="https://cdn.ckeditor.com/4.22.1/full-all/ckeditor.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
	<script> window.initialTags = @json($initialTags ?? []); </script>    
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @stack('styles')

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
        }
        
        .card-hover {
            transition: all 0.3s ease;
            border: 1px solid #dcfce7;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(5, 150, 105, 0.1);
            border-color: #86efac;
        }
        
        .tag-transition {
            transition: all 0.5s ease-in-out;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            transition: all 0.3s ease;
            border: none;
        }
        
        .btn-primary:hover {
            background: linear-gradient(135deg, #047857 0%, #059669 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(5, 150, 105, 0.3);
        }
        
        .post-card {
            border-left: 4px solid #059669;
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

        /* Setu Down Brand Colors */
        .bg-setu-green {
            background-color: #059669;
        }
        
        .text-setu-green {
            color: #059669;
        }
        
        .border-setu-green {
            border-color: #059669;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%);
        }
        
        .hashtag-badge {
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
        }
        
        .stats-badge {
            background: #f0fdf4;
            color: #059669;
            border: 1px solid #dcfce7;
        }

    </style>