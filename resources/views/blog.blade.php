<x-layout>
<body class="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-50">
    
    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
        <!-- Page Header -->
        <div class="mb-12 text-center">
            <div class="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6 border border-green-200">
                <i class="fas fa-newspaper text-green-600"></i>
                <span class="font-medium">Relocation Insights & Tips</span>
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Setu Down Blog
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert insights on relocating to Nigeria, cultural orientation, housing tips, and everything you need to settle down smoothly.
            </p>
        </div>

        <!-- Action Bar -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 p-6 bg-white rounded-2xl shadow-sm border border-green-100">
            <!-- Create Post Button - Only for authenticated users -->
            @auth
            <div class="flex items-center gap-4">
                <a href="{{ route('createpage') }}" class="btn-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300">
                    <i class="fas fa-plus-circle"></i>
                    <span class="hidden sm:inline">Share Your Experience</span>
                </a>
                
                <!-- Mobile Create Button -->
                <a href="{{ route('createpage') }}" class="sm:hidden bg-green-600 text-white p-4 rounded-xl shadow-lg" title="Create Post">
                    <i class="fas fa-plus"></i>
                </a>
            </div>
            @else
            <div class="flex items-center gap-4">
                <p class="text-gray-600 text-sm">Join our community to share your relocation experience</p>
            </div>
            @endauth

            <!-- Search and Sort Section -->
            <div class="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
                <!-- Search Bar -->
                <div class="relative w-full md:w-72">
                    <input type="text" placeholder="Search relocation tips..." 
                           class="w-full pl-12 pr-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm">
                    <i class="fas fa-search absolute left-4 top-3.5 text-green-400"></i>
                </div>

                <!-- Sort Dropdown -->
                <form method="GET" action="{{ route('blog') }}" class="flex items-center gap-3 w-full md:w-auto">
                    <label for="sort" class="text-gray-700 font-medium whitespace-nowrap">Sort by:</label>
                    <div class="relative flex-1 md:w-52">
                        <select id="sort" name="sort" 
                                class="w-full appearance-none bg-white border border-green-200 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer shadow-sm"
                                onchange="this.form.submit()">
                            <option value="latest" {{ $sort == 'latest' ? 'selected' : '' }}>Latest Posts</option>
                            <option value="oldest" {{ $sort == 'oldest' ? 'selected' : '' }}>Oldest First</option>
                            <option value="mostliked" {{ $sort == 'mostliked' ? 'selected' : '' }}>Most Liked</option>
                            <option value="mostviewed" {{ $sort == 'mostviewed' ? 'selected' : '' }}>Most Viewed</option>
                            <option value="featured" {{ $sort == 'featured' ? 'selected' : '' }}>Featured</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-green-600">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Tags Section -->
        <div class="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-green-100">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 class="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <i class="fas fa-tags text-green-600"></i>
                    Explore Relocation Topics
                </h2>
                <button id="toggleTags" class="text-green-600 hover:text-green-800 font-medium flex items-center gap-2 transition-colors bg-green-50 px-4 py-2 rounded-lg">
                    <span>Show All Topics</span>
                    <i class="fas fa-chevron-down text-xs transition-transform"></i>
                </button>
            </div>
            
            <div id="tagsContainer" class="flex flex-wrap gap-3 transition-all duration-500 overflow-hidden max-h-20">
                @forelse($tags as $tag)
                    <span class="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-all duration-300 cursor-pointer border border-green-200 hover:border-green-300 hover:scale-105">
                        #{{ $tag->name }} <span class="text-green-600">({{ $tag->posts_count }})</span>
                    </span>
                @empty
                    <p class="text-gray-500">No topics available yet</p>
                @endforelse
            </div>
        </div>

        <div class="my-8 border-t border-green-200"></div>

        <!-- Posts Grid -->
        @if($posts->count() > 0)
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($posts as $post)
                    <div class="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden card-hover fade-in">
                        <!-- Post Image -->
                        <div class="h-48 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
                            @if($post->image_path)
                                    @php
                                        $imageUrl = null;
                                        
                                        $possiblePaths = [
                                            '/var/www/html/storage/uploads/' . $post->image_path,
                                            public_path('storage/uploads/' . $post->image_path)
                                        ];
                                        
                                        foreach ($possiblePaths as $path) {
                                            if (file_exists($path)) {
                                                $imageUrl = asset('storage/uploads/' . $post->image_path);
                                                break;
                                            }
                                        }
                                    @endphp

                                    @if($imageUrl)
                                        <img class="absolute top-0 left-0 w-full h-full object-cover" src="{{ $imageUrl }}" alt="{{ $post->title }}">
                                    @endif                                    
                                     alt="{{ $post->title }}" 
                                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                            @else
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600">
                                    <i class="fas fa-newspaper text-white text-4xl opacity-80"></i>
                                </div>
                            @endif
                            <!-- Hashtags -->
                            @if($post->hashtags->count() > 0)
                                <span class="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                                    #{{ $post->hashtags->first()->name }}
                                </span>
                            @endif
                        </div>
                        
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full flex items-center gap-1">
                                    <i class="far fa-clock"></i>
                                    {{ $post->created_at->format('M j, Y') }}
                                </span>
                                <span class="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full flex items-center gap-1">
                                    <i class="far fa-eye"></i>
                                    {{ $post->views ?? 0 }}
                                </span>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                                <a href="{{ route('single.post', $post->slug) }}" class="hover:text-green-600 transition-colors duration-300">
                                    {{ $post->title }}
                                </a>
                            </h3>
                            
                            <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                {{ Str::limit(strip_tags($post->description), 120) }}
                            </p>
                            
                            <div class="flex items-center justify-between pt-4 border-t border-green-50">
                                <div class="flex items-center">
                                    @if($post->user->avatar)
                                        <img src="{{ asset('storage/avatars/' . $post->user->avatar) }}" 
                                             alt="{{ $post->user->username }}" 
                                             class="h-9 w-9 rounded-full object-cover mr-3 border-2 border-green-200">
                                    @else
                                        <div class="h-9 w-9 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold text-sm mr-3 border-2 border-green-200">
                                            {{ substr($post->user->username, 0, 1) }}
                                        </div>
                                    @endif
                                    <span class="text-sm text-gray-700 font-medium">{{ $post->user->username }}</span>
                                </div>
                                <div class="flex items-center space-x-4 text-gray-500">
                                    <span class="flex items-center text-sm gap-1 bg-green-50 px-2 py-1 rounded-lg">
                                        <i class="far fa-heart text-green-600"></i>
                                        <span class="text-green-700 font-medium">{{ $post->likes_count }}</span>
                                    </span>
                                    <span class="flex items-center text-sm gap-1 bg-green-50 px-2 py-1 rounded-lg">
                                        <i class="far fa-comment text-green-600"></i>
                                        <span class="text-green-700 font-medium">{{ $post->totalcomments_count }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <!-- No Posts State -->
            <div class="text-center py-20">
                <div class="max-w-md mx-auto">
                    <div class="h-40 w-40 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
                        <i class="fas fa-pen-nib text-green-500 text-5xl"></i>
                    </div>
                    <h3 class="text-3xl font-bold text-gray-800 mb-4">No Posts Yet</h3>
                    <p class="text-gray-600 mb-8 text-lg leading-relaxed">
                        Be the first to share your relocation experience and help others settle down in Nigeria.
                    </p>
                    @auth
                        <a href="{{ route('createpage') }}" class="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3">
                            <i class="fas fa-plus-circle"></i>
                            Share Your First Story
                        </a>
                    @else
                        <a href="{{ route('register') }}" class="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3">
                            <i class="fas fa-user-plus"></i>
                            Join Our Community
                        </a>
                    @endauth
                </div>
            </div>
        @endif

        <!-- Pagination -->
        @if($posts->count() > 0)
            <div class="flex justify-center mt-16">
                <div class="flex items-center gap-2 bg-white rounded-xl shadow-sm border border-green-100 p-3">
                    {{ $posts->links() }}
                </div>
            </div>
        @endif
    </main>

    <script>
        // Toggle tags visibility
        document.getElementById('toggleTags')?.addEventListener('click', function() {
            const tagsContainer = document.getElementById('tagsContainer');
            const buttonText = this.querySelector('span');
            const icon = this.querySelector('i');
            
            if (tagsContainer.classList.contains('max-h-20')) {
                tagsContainer.classList.remove('max-h-20');
                tagsContainer.classList.add('max-h-96');
                buttonText.textContent = 'Show Less';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                tagsContainer.classList.remove('max-h-96');
                tagsContainer.classList.add('max-h-20');
                buttonText.textContent = 'Show All Topics';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        // Add subtle animations to cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card-hover');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
    </script>
</body>
</x-layout>