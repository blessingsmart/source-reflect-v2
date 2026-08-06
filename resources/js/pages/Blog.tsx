import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
    Newspaper,
    Search,
    ChevronDown,
    ChevronUp,
    Clock,
    Eye,
    Heart,
    MessageCircle,
    Plus,
    User,
    Tag,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function Blog() {
    const { posts, tags, sort, auth } = usePage().props;
    const [showAllTags, setShowAllTags] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeout = useRef(null);

    // Handle search with debounce
    const handleSearch = (value) => {
        setSearchQuery(value);
        setIsSearching(true);
        clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
            router.get(
                route('blog'),
                { search: value, sort: sort },
                { preserveState: true, replace: true }
            );
            setIsSearching(false);
        }, 500);
    };

    // Handle sort change
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        router.get(
            route('blog'),
            { sort: newSort, search: searchQuery },
            { preserveState: true, replace: true }
        );
    };

    // Toggle tags visibility
    const toggleTags = () => {
        setShowAllTags(!showAllTags);
    };

    // Format date
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    // Get initials for avatar fallback
    const getInitials = (username) => {
        return username ? username.charAt(0).toUpperCase() : 'U';
    };

    // Get image URL
    const getImageUrl = (post) => {
        if (post.image_path) {
            // Try to construct the URL – adjust based on your storage setup
            return `/storage/uploads/${post.image_path}`;
        }
        return null;
    };

    return (
        <GuestLayout>
            <Head title="Blog – Relocation Insights & Tips | Setudown" />

            {/* Page Header */}
            <section className="bg-brand-cream py-12">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-brand-green/10 px-6 py-3 text-brand-green-deep border border-brand-green/20">
                            <Newspaper size={20} />
                            <span className="font-medium">Relocation Insights &amp; Tips</span>
                        </div>
                        <h1 className="font-serif text-4xl font-bold text-brand-ink md:text-5xl">
                            Setudown Blog
                        </h1>
                        <p className="mx-auto mt-3 max-w-3xl text-lg text-brand-muted">
                            Expert insights on relocating to Nigeria, cultural orientation, housing tips, and everything you need to settle down smoothly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-brand-cream-light py-12">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Action Bar */}
                    <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-brand-cream-light lg:flex-row lg:items-center lg:justify-between">
                        {/* Create Post Button */}
                        <div className="flex items-center gap-4">
                            {auth?.user ? (
                                <>
                                    <Link
                                        href={route('createpage')}
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-5 py-2.5 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                                    >
                                        <Plus size={18} />
                                        <span className="hidden sm:inline">Share Your Experience</span>
                                    </Link>
                                    <Link
                                        href={route('createpage')}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white shadow-lg sm:hidden"
                                        title="Create Post"
                                    >
                                        <Plus size={20} />
                                    </Link>
                                </>
                            ) : (
                                <p className="text-sm text-brand-muted">Join our community to share your relocation experience</p>
                            )}
                        </div>

                        {/* Search and Sort */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search relocation tips..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="w-full rounded-xl border border-brand-cream-light bg-white px-4 py-2.5 pl-10 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green sm:w-72"
                                />
                                <Search size={18} className="absolute left-3 top-3 text-brand-muted/60" />
                            </div>

                            {/* Sort Dropdown */}
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex items-center gap-2"
                            >
                                <label htmlFor="sort" className="whitespace-nowrap text-sm font-medium text-brand-text">
                                    Sort by:
                                </label>
                                <div className="relative">
                                    <select
                                        id="sort"
                                        name="sort"
                                        value={sort || 'latest'}
                                        onChange={handleSortChange}
                                        className="appearance-none rounded-xl border border-brand-cream-light bg-white px-4 py-2.5 pr-10 text-sm text-brand-ink focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                                    >
                                        <option value="latest">Latest Posts</option>
                                        <option value="oldest">Oldest First</option>
                                        <option value="mostliked">Most Liked</option>
                                        <option value="mostviewed">Most Viewed</option>
                                        <option value="featured">Featured</option>
                                    </select>
                                    <ChevronDown size={16} className="pointer-events-none absolute right-3 top-3.5 text-brand-muted/60" />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Tags Section */}
                    <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-brand-cream-light">
                        <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                            <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-brand-ink">
                                <Tag size={20} className="text-brand-green" />
                                Explore Relocation Topics
                            </h2>
                            <button
                                onClick={toggleTags}
                                className="flex items-center gap-2 rounded-lg bg-brand-cream-light px-4 py-2 text-sm font-medium text-brand-green-deep transition hover:bg-brand-cream"
                            >
                                <span>{showAllTags ? 'Show Less' : 'Show All Topics'}</span>
                                {showAllTags ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                        </div>

                        <div
                            className={`flex flex-wrap gap-3 overflow-hidden transition-all duration-500 ${
                                showAllTags ? 'max-h-96' : 'max-h-20'
                            }`}
                        >
                            {tags && tags.length > 0 ? (
                                tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="cursor-pointer rounded-full border border-brand-cream-light bg-gradient-to-r from-brand-cream to-brand-cream-light px-4 py-2 text-sm font-medium text-brand-text transition hover:border-brand-green hover:bg-brand-cream hover:scale-105"
                                    >
                                        #{tag.name} <span className="text-brand-muted">({tag.posts_count})</span>
                                    </span>
                                ))
                            ) : (
                                <p className="text-brand-muted">No topics available yet</p>
                            )}
                        </div>
                    </div>

                    <hr className="my-8 border-brand-cream-light" />

                    {/* Posts Grid */}
                    {posts && posts.data && posts.data.length > 0 ? (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {posts.data.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    variants={fadeIn}
                                    transition={{ delay: index * 0.05 }}
                                    className="group overflow-hidden rounded-2xl border border-brand-cream-light bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {/* Post Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-r from-brand-green to-brand-green-deep">
                                        {getImageUrl(post) ? (
                                            <img
                                                src={getImageUrl(post)}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <Newspaper size={48} className="text-white/50" />
                                            </div>
                                        )}
                                        {post.hashtags && post.hashtags.length > 0 && (
                                            <span className="absolute left-4 top-4 rounded-full bg-brand-ink/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                                                #{post.hashtags[0].name}
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream-light px-3 py-1.5 text-xs text-brand-muted">
                                                <Clock size={14} />
                                                {formatDate(post.created_at)}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream-light px-3 py-1.5 text-xs text-brand-muted">
                                                <Eye size={14} />
                                                {post.views || 0}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 line-clamp-2 font-serif text-xl font-bold text-brand-ink leading-tight">
                                            <Link
                                                href={route('single.post', post.slug)}
                                                className="transition-colors hover:text-brand-green"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="mb-4 line-clamp-3 text-sm text-brand-muted leading-relaxed">
                                            {post.description
                                                ? post.description.replace(/<[^>]*>/g, '').slice(0, 120)
                                                : 'No description available'}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-brand-cream-light pt-4">
                                            <div className="flex items-center">
                                                {post.user?.avatar ? (
                                                    <img
                                                        src={`/storage/avatars/${post.user.avatar}`}
                                                        alt={post.user.username}
                                                        className="mr-3 h-9 w-9 rounded-full border-2 border-brand-cream-light object-cover"
                                                    />
                                                ) : (
                                                    <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-green-deep text-sm font-semibold text-white border-2 border-brand-cream-light">
                                                        {getInitials(post.user?.username)}
                                                    </div>
                                                )}
                                                <span className="text-sm font-medium text-brand-text">
                                                    {post.user?.username || 'Anonymous'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 text-brand-muted">
                                                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-cream-light px-2 py-1 text-sm">
                                                    <Heart size={14} className="text-brand-green" />
                                                    <span className="font-medium text-brand-green-deep">{post.likes_count || 0}</span>
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-cream-light px-2 py-1 text-sm">
                                                    <MessageCircle size={14} className="text-brand-green" />
                                                    <span className="font-medium text-brand-green-deep">{post.totalcomments_count || 0}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        // No Posts State
                        <div className="py-20 text-center">
                            <div className="mx-auto max-w-md">
                                <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-r from-brand-cream to-brand-cream-light border-4 border-white shadow-lg">
                                    <Newspaper size={64} className="text-brand-green" />
                                </div>
                                <h3 className="mb-4 font-serif text-3xl font-bold text-brand-ink">No Posts Yet</h3>
                                <p className="mb-8 text-lg text-brand-muted leading-relaxed">
                                    Be the first to share your relocation experience and help others settle down in Nigeria.
                                </p>
                                {auth?.user ? (
                                    <Link
                                        href={route('createpage')}
                                        className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-4 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                                    >
                                        <Plus size={20} />
                                        Share Your First Story
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center gap-3 rounded-full bg-brand-green px-8 py-4 font-semibold text-white transition hover:bg-brand-green-deep"
                                    >
                                        <User size={20} />
                                        Join Our Community
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    {posts && posts.data && posts.data.length > 0 && posts.links && (
                        <div className="mt-16 flex justify-center">
                            <div className="flex items-center gap-2 rounded-xl border border-brand-cream-light bg-white p-3 shadow-sm">
                                {posts.links.map((link, index) => {
                                    const label = link.label;
                                    const isActive = link.active;
                                    const isPrevious = label.includes('Previous');
                                    const isNext = label.includes('Next');
                                    const isEllipsis = label.includes('...');

                                    if (isEllipsis) {
                                        return (
                                            <span key={index} className="px-3 py-2 text-sm text-brand-muted">
                                                ...
                                            </span>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                                                isActive
                                                    ? 'bg-brand-green text-white hover:bg-brand-green-deep'
                                                    : isPrevious || isNext
                                                    ? 'text-brand-text hover:bg-brand-cream-light'
                                                    : 'text-brand-text hover:bg-brand-cream-light'
                                            } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                                            preserveState
                                            replace
                                        >
                                            {isPrevious ? (
                                                <span className="flex items-center gap-1">
                                                    <ChevronLeft size={16} />
                                                    Previous
                                                </span>
                                            ) : isNext ? (
                                                <span className="flex items-center gap-1">
                                                    Next
                                                    <ChevronRight size={16} />
                                                </span>
                                            ) : (
                                                label
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </GuestLayout>
    );
}