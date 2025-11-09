<x-layout>
<body class="min-h-screen flex flex-col bg-gray-50">
    
    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
        <!-- Page Header -->
        <div class="mb-8 text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-3">Latest Posts</h1>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">Discover inspiring stories, insights, and perspectives from our community of writers</p>
        </div>

        <!-- Action Bar -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <!-- Create Post Button -->
            <div class="flex items-center gap-4">
                @auth
                <a href="{{ route('createpage') }}" class="btn-primary text-white px-5 py-3 rounded-lg font-medium flex items-center gap-2">
                    <i class="fas fa-plus"></i>
                    <span class="hidden sm:inline">Create Post</span>
                </a>
                
                <!-- Mobile Create Button -->
                <a href="{{ route('createpage') }}" class="sm:hidden bg-indigo-600 text-white p-3 rounded-lg" title="Create Post">
                    <i class="fas fa-plus"></i>
                </a>
                @endauth
            </div>

            <!-- Search and Sort Section -->
            <div class="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
                <!-- Search Bar -->
                <div class="relative w-full md:w-64">
                    <input type="text" placeholder="Search posts..." 
                           class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white">
                    <i class="fas fa-search absolute left-3 top-3.5 text-gray-400"></i>
                </div>

                <!-- Sort Dropdown -->
                <form method="GET" action="{{ route('blog') }}" class="flex items-center gap-3 w-full md:w-auto">
                    <label for="sort" class="text-gray-700 font-medium whitespace-nowrap">Sort by:</label>
                    <div class="relative flex-1 md:w-48">
                        <select id="sort" name="sort" 
                                class="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
                                onchange="this.form.submit()">
                            <option value="latest" {{ $sorts == 'latest' ? 'selected' : '' }}>Latest</option>
                            <option value="oldest" {{ $sorts == 'oldest' ? 'selected' : '' }}>Oldest</option>
                            <option value="mostliked" {{ $sorts == 'mostliked' ? 'selected' : '' }}>Most Liked</option>
                            <option value="mostviewed" {{ $sorts == 'mostviewed' ? 'selected' : '' }}>Most Viewed</option>
                            <option value="followings" {{ $sorts == 'followings' ? 'selected' : '' }}>Following</option>
                            <option value="featured" {{ $sorts == 'featured' ? 'selected' : '' }}>Featured</option>
                            <option value="hashtagtrend" {{ $sorts == 'hashtagtrend' ? 'selected' : '' }}>Hashtag Trend</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Tags Section -->
        <div class="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Explore Topics</h2>
                <button id="toggleTags" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition-colors">
                    <span>Show All Tags</span>
                    <i class="fas fa-chevron-down text-xs transition-transform"></i>
                </button>
            </div>
            
            <div id="tagsContainer" class="flex flex-wrap gap-3 transition-all duration-500 overflow-hidden max-h-20">
                @forelse($tags as $tag)
                    <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors cursor-pointer">
                        {{ $tag->name }} ({{ $tag->posts_count }})
                    </span>
                @empty
                    <p class="text-gray-500">No tags available</p>
                @endforelse
            </div>
        </div>

        <hr class="my-8 border-gray-200">

        <!-- Posts Grid -->
        @if($posts->count() > 0)
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($posts as $post)
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover fade-in">
                        <!-- Post Image -->
                        <div class="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                            @if($post->image)
                                <img src="{{ asset('storage/uploads/' . $post->image) }}" 
                                     alt="{{ $post->title }}" 
                                     class="w-full h-full object-cover">
                            @endif
                            <!-- Hashtags -->
                            @if($post->hashtags->count() > 0)
                                <span class="absolute top-4 left-4 bg-white/90 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {{ $post->hashtags->first()->name }}
                                </span>
                            @endif
                        </div>
                        
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-xs text-gray-500 flex items-center gap-1">
                                    <i class="far fa-clock"></i>
                                    {{ $post->created_at->format('M j, Y') }}
                                </span>
                                <span class="text-xs text-gray-500 flex items-center gap-1">
                                    <i class="far fa-eye"></i>
                                    {{ $post->views_count ?? 0 }}
                                </span>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                <a href="{{ route('single.post', $post->slug) }}" class="hover:text-indigo-600 transition-colors">
                                    {{ $post->title }}
                                </a>
                            </h3>
                            
                            <p class="text-gray-600 mb-4 line-clamp-3">
                                {{ Str::limit(strip_tags($post->content), 120) }}
                            </p>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    @if($post->user->avatar)
                                        <img src="{{ asset('storage/avatars/' . $post->user->avatar) }}" 
                                             alt="{{ $post->user->username }}" 
                                             class="h-8 w-8 rounded-full object-cover mr-3">
                                    @else
                                        <div class="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm mr-3">
                                            {{ substr($post->user->username, 0, 1) }}
                                        </div>
                                    @endif
                                    <span class="text-sm text-gray-700 font-medium">{{ $post->user->username }}</span>
                                </div>
                                <div class="flex items-center space-x-4 text-gray-500">
                                    <span class="flex items-center text-sm gap-1">
                                        <i class="far fa-heart"></i>
                                        <span>{{ $post->likes_count }}</span>
                                    </span>
                                    <span class="flex items-center text-sm gap-1">
                                        <i class="far fa-comment"></i>
                                        <span>{{ $post->totalcomments_count }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <!-- No Posts State -->
            <div class="text-center py-16">
                <div class="max-w-md mx-auto">
                    <div class="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="far fa-file-alt text-gray-400 text-4xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-700 mb-3">No Posts Yet</h3>
                    <p class="text-gray-500 mb-6">Be the first to share your thoughts and start a conversation.</p>
                    @auth
                        <a href="{{ route('createpage') }}" class="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-block">
                            Create First Post
                        </a>
                    @else
                        <a href="{{ route('login') }}" class="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-block">
                            Login to Create Post
                        </a>
                    @endauth
                </div>
            </div>
        @endif

        <!-- Pagination -->
        @if($posts->count() > 0)
            <div class="flex justify-center mt-12">
                <div class="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                    {{ $posts->links() }}
                </div>
            </div>
        @endif
    </main>

    <!-- Flash Message -->
    @if(session('success'))
        <div class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 fade-in-out">
            <div class="flex items-center gap-2">
                <i class="fas fa-check-circle"></i>
                <span>{{ session('success') }}</span>
            </div>
        </div>
    @endif

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
                buttonText.textContent = 'Show All Tags';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        // Auto-hide flash message
        @if(session('success'))
            setTimeout(() => {
                const flashMessage = document.querySelector('.fade-in-out');
                if (flashMessage) {
                    flashMessage.style.opacity = '0';
                    flashMessage.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => flashMessage.remove(), 500);
                }
            }, 3000);
        @endif
    </script>
</body>
</x-layout>