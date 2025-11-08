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
                <div class="flex items-center gap-3 w-full md:w-auto">
                    <label for="sort" class="text-gray-700 font-medium whitespace-nowrap">Sort by:</label>
                    <div class="relative flex-1 md:w-48">
                        <select id="sort" name="sort" 
                                class="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="mostliked">Most Liked</option>
                            <option value="mostviewed">Most Viewed</option>
                            <option value="followings">Following</option>
                            <option value="featured">Featured</option>
                            <option value="hashtagtrend">Hashtag Trend</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
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
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors cursor-pointer">Technology (42)</span>
                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">Design (28)</span>
                <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">Productivity (35)</span>
                <span class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors cursor-pointer">Business (22)</span>
                <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition-colors cursor-pointer">Health (19)</span>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">Travel (15)</span>
                <span class="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors cursor-pointer">Lifestyle (31)</span>
                <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">Programming (47)</span>
            </div>
        </div>

        <hr class="my-8 border-gray-200">

        <!-- Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Post Card 1 -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover fade-in">
                <div class="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                    <span class="absolute top-4 left-4 bg-white/90 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">TECHNOLOGY</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            May 15, 2023
                        </span>
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-eye"></i>
                            1.2k
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">The Future of Artificial Intelligence in Everyday Life</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">Exploring how AI is transforming our daily routines and what to expect in the coming years with advanced machine learning algorithms.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm mr-3">
                                S
                            </div>
                            <span class="text-sm text-gray-700 font-medium">Sarah Johnson</span>
                        </div>
                        <div class="flex items-center space-x-4 text-gray-500">
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-heart"></i>
                                <span>42</span>
                            </span>
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-comment"></i>
                                <span>12</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Post Card 2 -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover fade-in">
                <div class="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                    <span class="absolute top-4 left-4 bg-white/90 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">PRODUCTIVITY</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            May 12, 2023
                        </span>
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-eye"></i>
                            894
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">10 Habits That Will Transform Your Workday</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">Simple yet effective strategies to boost your productivity and achieve more in less time with proven techniques.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm mr-3">
                                M
                            </div>
                            <span class="text-sm text-gray-700 font-medium">Michael Chen</span>
                        </div>
                        <div class="flex items-center space-x-4 text-gray-500">
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-heart"></i>
                                <span>28</span>
                            </span>
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-comment"></i>
                                <span>7</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Post Card 3 -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover fade-in">
                <div class="h-48 bg-gradient-to-r from-purple-400 to-pink-500 relative">
                    <span class="absolute top-4 left-4 bg-white/90 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">DESIGN</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-clock"></i>
                            May 10, 2023
                        </span>
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <i class="far fa-eye"></i>
                            1.5k
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Minimalism in Web Design: Less is More</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">How embracing simplicity can lead to more effective and beautiful digital experiences that users love.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm mr-3">
                                A
                            </div>
                            <span class="text-sm text-gray-700 font-medium">Alex Rivera</span>
                        </div>
                        <div class="flex items-center space-x-4 text-gray-500">
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-heart"></i>
                                <span>35</span>
                            </span>
                            <span class="flex items-center text-sm gap-1">
                                <i class="far fa-comment"></i>
                                <span>9</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- No Posts State -->
        <div class="text-center py-16 hidden">
            <div class="max-w-md mx-auto">
                <div class="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="far fa-file-alt text-gray-400 text-4xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-gray-700 mb-3">No Posts Yet</h3>
                <p class="text-gray-500 mb-6">Be the first to share your thoughts and start a conversation.</p>
                <button class="btn-primary text-white px-6 py-3 rounded-lg font-medium">
                    Create First Post
                </button>
            </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
            <div class="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                <button class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium">1</button>
                <button class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">2</button>
                <button class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">3</button>
                <span class="px-2 text-gray-500">...</span>
                <button class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">8</button>
                <button class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </main>

    <script>
        // Toggle tags visibility
        document.getElementById('toggleTags').addEventListener('click', function() {
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

        // Sort functionality
        document.getElementById('sort').addEventListener('change', function() {
            // In a real application, this would submit the form or make an API call
            console.log('Sort by:', this.value);
        });
    </script>
</body>

</x-layout>