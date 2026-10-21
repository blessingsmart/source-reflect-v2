import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Clock,
    Eye,
    Heart,
    MessageCircle,
    Bookmark,
    Share2,
    Check,
    Send,
    User,
    Tag,
    Edit3,
    Trash2,
    CornerDownRight,
    AlertCircle,
    BookOpen,
} from 'lucide-react';

interface Author {
    id: number;
    name?: string;
    username: string;
    avatar?: string;
    bio?: string;
}

interface HashtagItem {
    id: number;
    name: string;
}

interface CommentItem {
    id: number;
    post_id: number;
    user_id: number;
    parent_id?: number | null;
    content: string;
    created_at: string;
    user: Author;
    replies?: CommentItem[];
}

interface RelatedPost {
    id: number;
    title: string;
    slug: string;
    description: string;
    image_path?: string;
    created_at: string;
    likes_count?: number;
    totalcomments_count?: number;
    user: Author;
    hashtags?: HashtagItem[];
}

interface PostProps {
    post: {
        id: number;
        title: string;
        slug: string;
        description: string;
        image_path?: string;
        created_at: string;
        updated_at: string;
        user_id: number;
        allow_comments?: boolean;
        likes_count?: number;
        views_count?: number;
        views?: number;
        is_liked?: boolean;
        is_saved?: boolean;
        is_following_author?: boolean;
        user: Author;
        hashtags?: HashtagItem[];
    };
    comments: CommentItem[];
    totalcomments: number;
    morearticles: RelatedPost[];
}

const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Post() {
    const { post, comments: initialComments, totalcomments: initialTotalComments, morearticles, auth } = usePage<any>().props as unknown as PostProps & { auth: any };

    // Reaction & follow states
    const [isLiked, setIsLiked] = useState<boolean>(Boolean(post.is_liked));
    const [likesCount, setLikesCount] = useState<number>(post.likes_count ?? 0);
    const [isSaved, setIsSaved] = useState<boolean>(Boolean(post.is_saved));
    const [isFollowing, setIsFollowing] = useState<boolean>(Boolean(post.is_following_author));
    const [isFollowLoading, setIsFollowLoading] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Reading progress
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    // Comments state
    const [commentsList, setCommentsList] = useState<CommentItem[]>(initialComments || []);
    const [commentsCount, setCommentsCount] = useState<number>(initialTotalComments || 0);
    const [newCommentContent, setNewCommentContent] = useState<string>('');
    const [isSubmittingComment, setIsSubmittingComment] = useState<boolean>(false);

    // Reply states: map of commentId -> reply text
    const [activeReplyId, setActiveReplyId] = useState<number | null>(null);
    const [replyContent, setReplyContent] = useState<string>('');
    const [isSubmittingReply, setIsSubmittingReply] = useState<boolean>(false);

    // Edit states: map of commentId -> edit text
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
    const [editContent, setEditContent] = useState<string>('');

    const isAuthor = auth?.user && auth.user.id === post.user?.id;

    // Reading progress listener
    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    // Trigger toast
    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Calculate reading time
    const rawText = post.description ? post.description.replace(/<[^>]*>/g, '').trim() : '';
    const wordCount = rawText.split(/\s+/).filter(Boolean).length;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

    // Format date
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    // Initials fallback
    const getInitials = (username?: string) => {
        return username ? username.charAt(0).toUpperCase() : 'U';
    };

    // Clean and isolate user HTML content to prevent styles/fixed elements from leaking into page navigation
    const cleanHtmlContent = (htmlString?: string) => {
        if (!htmlString) return '';
        let cleaned = htmlString
            // Strip out <style> tags that might target body, header, nav, or global tags
            .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, '')
            // Convert fixed positioning to absolute so it stays inside the isolated article card
            .replace(/position\s*:\s*fixed/gi, 'position: absolute');
        return cleaned;
    };

    // CSRF token helper
    const getCsrfToken = () => {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    };

    // Handle Like
    const handleLike = async () => {
        if (!auth?.user) {
            router.get(route('login'));
            return;
        }

        try {
            const res = await fetch(`/post/${post.id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
            });
            const data = await res.json();
            setIsLiked(data.liked);
            setLikesCount((prev) => (data.liked ? prev + 1 : Math.max(0, prev - 1)));
            if (data.liked) {
                showToast('Post added to your liked articles');
            }
        } catch (err) {
            console.error('Error liking post:', err);
        }
    };

    // Handle Save / Bookmark
    const handleSave = async () => {
        if (!auth?.user) {
            router.get(route('login'));
            return;
        }

        try {
            const res = await fetch('/saved-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
                body: JSON.stringify({ post_id: post.id }),
            });
            const data = await res.json();
            const saved = data.status === 'added';
            setIsSaved(saved);
            showToast(saved ? 'Saved to your bookmarks' : 'Removed from bookmarks');
        } catch (err) {
            console.error('Error saving post:', err);
        }
    };

    // Handle Follow
    const handleToggleFollow = async () => {
        if (!auth?.user) {
            router.get(route('login'));
            return;
        }
        if (!post.user?.id || isFollowLoading) return;

        setIsFollowLoading(true);
        try {
            const res = await fetch(`/user/${post.user.id}/togglefollow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
            });
            const data = await res.json();
            if (data.attached !== undefined) {
                setIsFollowing(data.attached);
                showToast(data.attached ? `Following @${post.user.username}` : `Unfollowed @${post.user.username}`);
            }
        } catch (err) {
            console.error('Error following author:', err);
        } finally {
            setIsFollowLoading(false);
        }
    };

    // Handle Share
    const handleShare = () => {
        const shareData = {
            title: post.title,
            text: `Read "${post.title}" on Setudown`,
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
            showToast('Link copied to clipboard!');
        }
    };

    // Handle Post Delete
    const handleDeletePost = () => {
        if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
            router.delete(route('delete.post', post.slug));
        }
    };

    // Submit Top-Level Comment
    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCommentContent.trim() || isSubmittingComment) return;

        setIsSubmittingComment(true);
        try {
            const res = await fetch(`/comment/${post.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
                body: JSON.stringify({ content: newCommentContent.trim() }),
            });
            const data = await res.json();

            if (data.commented && data.comment) {
                const createdComment: CommentItem = {
                    ...data.comment,
                    replies: [],
                };
                setCommentsList([createdComment, ...commentsList]);
                setCommentsCount((prev) => prev + 1);
                setNewCommentContent('');
                showToast('Comment posted!');
            } else if (data.error) {
                alert(data.error);
            }
        } catch (err) {
            console.error('Error submitting comment:', err);
        } finally {
            setIsSubmittingComment(false);
        }
    };

    // Submit Reply to Comment
    const handleAddReply = async (commentId: number) => {
        if (!replyContent.trim() || isSubmittingReply) return;

        setIsSubmittingReply(true);
        try {
            const res = await fetch(`/reply/${commentId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    content: replyContent.trim(),
                    parent_id: commentId,
                }),
            });
            const data = await res.json();

            if (data.replied && data.comment) {
                const newReply: CommentItem = data.comment;
                setCommentsList((prev) =>
                    prev.map((c) => {
                        if (c.id === commentId) {
                            return {
                                ...c,
                                replies: [...(c.replies || []), newReply],
                            };
                        }
                        return c;
                    })
                );
                setCommentsCount((prev) => prev + 1);
                setReplyContent('');
                setActiveReplyId(null);
                showToast('Reply posted!');
            } else if (data.error) {
                alert(data.error);
            }
        } catch (err) {
            console.error('Error submitting reply:', err);
        } finally {
            setIsSubmittingReply(false);
        }
    };

    // Edit Comment
    const handleSaveCommentEdit = async (commentId: number) => {
        if (!editContent.trim()) return;

        try {
            const res = await fetch(`/comment/edit/${commentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
                body: JSON.stringify({ content: editContent.trim() }),
            });
            const data = await res.json();

            if (data.Edited) {
                setCommentsList((prev) =>
                    prev.map((c) => {
                        if (c.id === commentId) {
                            return { ...c, content: editContent.trim() };
                        }
                        if (c.replies) {
                            return {
                                ...c,
                                replies: c.replies.map((r) =>
                                    r.id === commentId ? { ...r, content: editContent.trim() } : r
                                ),
                            };
                        }
                        return c;
                    })
                );
                setEditingCommentId(null);
                setEditContent('');
                showToast('Comment updated');
            }
        } catch (err) {
            console.error('Error editing comment:', err);
        }
    };

    // Delete Comment
    const handleDeleteComment = async (commentId: number, isReply: boolean = false) => {
        if (!confirm('Are you sure you want to delete this comment?')) return;

        try {
            const res = await fetch(`/comment/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    Accept: 'application/json',
                },
            });
            const data = await res.json();

            if (data.deleted) {
                if (isReply) {
                    setCommentsList((prev) =>
                        prev.map((c) => ({
                            ...c,
                            replies: (c.replies || []).filter((r) => r.id !== commentId),
                        }))
                    );
                } else {
                    setCommentsList((prev) => prev.filter((c) => c.id !== commentId));
                }
                setCommentsCount((prev) => Math.max(0, prev - 1));
                showToast('Comment deleted');
            }
        } catch (err) {
            console.error('Error deleting comment:', err);
        }
    };

    return (
        <GuestLayout>
            <Head title={`${post.title} – Setudown Blog`} />

            {/* Reading Scroll Progress Bar (UX 5) */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-green to-brand-gold-bright z-[101] transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Toast Feedback Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-brand-ink px-5 py-3 text-sm font-semibold text-white shadow-2xl border border-white/10 backdrop-blur-md"
                    >
                        <Check size={16} className="text-brand-gold" />
                        <span>{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Navigation & Breadcrumb */}
            <div className="bg-brand-cream/60 py-4 border-b border-brand-cream-light">
                <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
                    <Link
                        href={route('blog')}
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-green-deep hover:text-brand-green transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to All Articles</span>
                    </Link>

                    {/* Hashtags */}
                    {post.hashtags && post.hashtags.length > 0 && (
                        <div className="hidden sm:flex items-center gap-2">
                            {post.hashtags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green-deep border border-brand-green/20"
                                >
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Article Container */}
            <main className="bg-brand-cream-light/30 py-10 min-h-screen pb-24 sm:pb-10">
                <article className="mx-auto max-w-5xl px-6">
                    {/* Header */}
                    <motion.header
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="mb-8"
                    >
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-6">
                            {post.title}
                        </h1>

                        {/* Author & Metadata Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-brand-cream-light">
                            <div className="flex items-center gap-3">
                                {post.user?.avatar ? (
                                    <img
                                        src={`/storage/avatars/${post.user.avatar}`}
                                        alt={post.user.username}
                                        className="h-12 w-12 rounded-full border-2 border-brand-green/20 object-cover"
                                    />
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-green-deep text-base font-bold text-white shadow-sm">
                                        {getInitials(post.user?.username)}
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-brand-ink text-base">
                                            {post.user?.name || post.user?.username}
                                        </span>
                                        <span className="text-xs text-brand-muted">@{post.user?.username}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-brand-muted mt-0.5">
                                        <span className="inline-flex items-center gap-1">
                                            <Clock size={13} />
                                            {formatDate(post.created_at)}
                                        </span>
                                        <span>•</span>
                                        <span className="inline-flex items-center gap-1">
                                            <BookOpen size={13} />
                                            {readTimeMinutes} min read
                                        </span>
                                        <span>•</span>
                                        <span className="inline-flex items-center gap-1">
                                            <Eye size={13} />
                                            {post.views_count ?? post.views ?? 0} views
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Author Actions / Follow Toggle */}
                            <div className="flex items-center gap-3">
                                {isAuthor ? (
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={route('edit.post', post.slug)}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-cream-light bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink transition hover:bg-brand-cream"
                                        >
                                            <Edit3 size={14} />
                                            Edit Post
                                        </Link>
                                        <button
                                            onClick={handleDeletePost}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                                        >
                                            <Trash2 size={14} />
                                            Delete
                                        </button>
                                    </div>
                                ) : (
                                    auth?.user && (
                                        <button
                                            onClick={handleToggleFollow}
                                            disabled={isFollowLoading}
                                            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                                                isFollowing
                                                    ? 'bg-brand-green/10 text-brand-green-deep border border-brand-green/30 hover:bg-brand-green/20'
                                                    : 'bg-brand-green text-white hover:bg-brand-green-deep'
                                            }`}
                                        >
                                            {isFollowing ? (
                                                <>
                                                    <Check size={14} />
                                                    Following
                                                </>
                                            ) : (
                                                <>
                                                    <User size={14} />
                                                    Follow Author
                                                </>
                                            )}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.header>

                    {/* Featured Image / Default Cover */}
                    <div className="mb-10 overflow-hidden rounded-3xl border border-brand-cream-light shadow-sm max-h-[500px] bg-brand-cream">
                        {post.image_path ? (
                            <img
                                src={`/storage/uploads/${post.image_path}`}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // If the image fails to load, show default cover
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                        parent.classList.remove('bg-brand-cream');
                                        parent.classList.add('bg-gradient-to-br', 'from-brand-green', 'to-brand-green-deep');
                                        const fallback = document.createElement('div');
                                        fallback.className = 'flex flex-col items-center justify-center gap-4 p-12 min-h-[240px]';
                                        fallback.innerHTML = `<span class="text-6xl font-bold font-serif text-white/70">${post.title.charAt(0).toUpperCase()}</span><span class="text-sm font-medium text-white/60 text-center max-w-sm">${post.title}</span>`;
                                        parent.appendChild(fallback);
                                    }
                                }}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand-green to-brand-green-deep p-12 min-h-[240px]">
                                <span className="text-6xl font-bold font-serif text-white/70">
                                    {post.title.charAt(0).toUpperCase()}
                                </span>
                                <span className="text-sm font-medium text-white/60 text-center max-w-sm">
                                    {post.title}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Post Content (Isolated to prevent rogue HTML/styles from escaping) */}
                    <div className="relative isolate overflow-hidden rounded-3xl bg-white p-6 sm:p-10 border border-brand-cream-light shadow-sm mb-8">
                        <div
                            className="prose prose-lg max-w-none text-brand-text leading-relaxed prose-headings:font-serif prose-headings:text-brand-ink prose-a:text-brand-green prose-a:underline hover:prose-a:text-brand-green-deep prose-img:rounded-2xl relative overflow-hidden"
                            dangerouslySetInnerHTML={{ __html: cleanHtmlContent(post.description) }}
                        />
                    </div>

                    {/* Desktop Action Bar */}
                    <div className="hidden sm:flex mb-12 flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:px-8 border border-brand-cream-light shadow-sm">
                        <div className="flex items-center gap-6">
                            {/* Like Button */}
                            <button
                                onClick={handleLike}
                                className="flex items-center gap-2 group transition"
                                title={isLiked ? 'Unlike' : 'Like'}
                            >
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                                        isLiked
                                            ? 'bg-red-50 text-red-500'
                                            : 'bg-brand-cream-light text-brand-muted group-hover:bg-red-50 group-hover:text-red-500'
                                    }`}
                                >
                                    <Heart size={20} className={isLiked ? 'fill-red-500' : ''} />
                                </div>
                                <span className="text-sm font-semibold text-brand-ink">{likesCount}</span>
                            </button>

                            {/* Bookmark / Save */}
                            <button
                                onClick={handleSave}
                                className="flex items-center gap-2 group transition"
                                title={isSaved ? 'Remove Bookmark' : 'Save Bookmark'}
                            >
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                                        isSaved
                                            ? 'bg-brand-green/10 text-brand-green-deep'
                                            : 'bg-brand-cream-light text-brand-muted group-hover:bg-brand-green/10 group-hover:text-brand-green-deep'
                                    }`}
                                >
                                    <Bookmark size={20} className={isSaved ? 'fill-brand-green' : ''} />
                                </div>
                                <span className="text-sm font-medium text-brand-muted">
                                    {isSaved ? 'Saved' : 'Save'}
                                </span>
                            </button>

                            {/* Comments Counter Indicator */}
                            <a
                                href="#discussion-section"
                                className="flex items-center gap-2 text-brand-muted hover:text-brand-green transition"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream-light text-brand-muted">
                                    <MessageCircle size={20} />
                                </div>
                                <span className="text-sm font-semibold text-brand-ink">{commentsCount}</span>
                            </a>
                        </div>

                        {/* Share Button */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 rounded-xl bg-brand-cream-light px-4 py-2 text-sm font-medium text-brand-green-deep hover:bg-brand-cream transition"
                            >
                                <Share2 size={16} />
                                <span>Share Article</span>
                            </button>
                        </div>
                    </div>

                    {/* Author Bio Card */}
                    {post.user && (
                        <div className="mb-12 rounded-3xl bg-gradient-to-br from-brand-cream/80 to-brand-cream-light p-6 sm:p-8 border border-brand-cream-light shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
                            {post.user.avatar ? (
                                <img
                                    src={`/storage/avatars/${post.user.avatar}`}
                                    alt={post.user.username}
                                    className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-sm flex-shrink-0"
                                />
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white shadow-sm flex-shrink-0">
                                    {getInitials(post.user.username)}
                                </div>
                            )}
                            <div className="flex-grow text-center sm:text-left">
                                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                                    <div>
                                        <h3 className="font-serif text-lg font-bold text-brand-ink">
                                            {post.user.name || post.user.username}
                                        </h3>
                                        <p className="text-xs text-brand-muted">@{post.user.username} • Community Contributor</p>
                                    </div>
                                    {!isAuthor && auth?.user && (
                                        <button
                                            onClick={handleToggleFollow}
                                            disabled={isFollowLoading}
                                            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                                                isFollowing
                                                    ? 'bg-brand-green/10 text-brand-green-deep border border-brand-green/30'
                                                    : 'bg-brand-green text-white hover:bg-brand-green-deep'
                                            }`}
                                        >
                                            {isFollowing ? 'Following' : 'Follow'}
                                        </button>
                                    )}
                                </div>
                                <p className="mt-2 text-sm text-brand-text leading-relaxed">
                                    {post.user.bio || 'Sharing practical guides, insights, and experiences on relocating and settling in Nigeria.'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Inline Discussion & Comments Section (NO MODALS) */}
                    <section id="discussion-section" className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-brand-cream-light shadow-sm">
                        <div className="mb-6 flex items-center justify-between border-b border-brand-cream-light pb-4">
                            <h2 className="font-serif text-2xl font-bold text-brand-ink flex items-center gap-2">
                                <MessageCircle size={24} className="text-brand-green" />
                                Discussion ({commentsCount})
                            </h2>
                        </div>

                        {/* Comment Input Box */}
                        {post.allow_comments !== false ? (
                            auth?.user ? (
                                <form onSubmit={handleAddComment} className="mb-10">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            {auth.user.avatar ? (
                                                <img
                                                    src={`/storage/avatars/${auth.user.avatar}`}
                                                    alt={auth.user.username}
                                                    className="h-10 w-10 rounded-full border border-brand-cream-light object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                                                    {getInitials(auth.user.username)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-grow">
                                            <textarea
                                                value={newCommentContent}
                                                onChange={(e) => setNewCommentContent(e.target.value)}
                                                placeholder="Share your thoughts, ask a question, or add your experience..."
                                                rows={3}
                                                maxLength={255}
                                                className="w-full rounded-2xl border border-brand-cream-light bg-brand-cream-light/30 p-4 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-green focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                                            />
                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-xs text-brand-muted">
                                                    {255 - newCommentContent.length} characters remaining
                                                </span>
                                                <button
                                                    type="submit"
                                                    disabled={!newCommentContent.trim() || isSubmittingComment}
                                                    className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-deep disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <Send size={15} />
                                                    <span>{isSubmittingComment ? 'Posting...' : 'Post Comment'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="mb-8 rounded-2xl bg-brand-cream/60 p-6 text-center border border-brand-cream-light">
                                    <p className="text-brand-ink font-medium mb-3">Join the conversation</p>
                                    <div className="flex justify-center gap-3">
                                        <Link
                                            href={route('login')}
                                            className="rounded-xl bg-brand-green px-5 py-2 text-sm font-semibold text-white hover:bg-brand-green-deep transition"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-xl border border-brand-green px-5 py-2 text-sm font-semibold text-brand-green-deep hover:bg-brand-cream transition"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="mb-6 flex items-center gap-2 rounded-xl bg-brand-cream p-4 text-sm text-brand-muted">
                                <AlertCircle size={18} className="text-brand-muted" />
                                <span>Comments are disabled on this article.</span>
                            </div>
                        )}

                        {/* Comments List (Inline) */}
                        <div className="space-y-6">
                            {commentsList && commentsList.length > 0 ? (
                                commentsList.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="rounded-2xl border border-brand-cream-light bg-brand-cream-light/20 p-5 transition"
                                    >
                                        {/* Comment Header */}
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                {comment.user?.avatar ? (
                                                    <img
                                                        src={`/storage/avatars/${comment.user.avatar}`}
                                                        alt={comment.user.username}
                                                        className="h-9 w-9 rounded-full object-cover border border-brand-cream-light"
                                                    />
                                                ) : (
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/80 text-xs font-bold text-white">
                                                        {getInitials(comment.user?.username)}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold text-brand-ink">
                                                            {comment.user?.name || comment.user?.username}
                                                        </span>
                                                        <span className="text-xs text-brand-muted">
                                                            @{comment.user?.username}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-brand-muted">
                                                        {formatDate(comment.created_at)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Comment Actions (Edit/Delete) */}
                                            {auth?.user && auth.user.id === comment.user_id && (
                                                <div className="flex items-center gap-1.5 text-xs">
                                                    <button
                                                        onClick={() => {
                                                            setEditingCommentId(comment.id);
                                                            setEditContent(comment.content);
                                                        }}
                                                        className="p-1 text-brand-muted hover:text-brand-ink transition"
                                                        title="Edit Comment"
                                                    >
                                                        <Edit3 size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteComment(comment.id)}
                                                        className="p-1 text-brand-muted hover:text-red-500 transition"
                                                        title="Delete Comment"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Comment Body */}
                                        {editingCommentId === comment.id ? (
                                            <div className="mt-2 space-y-2">
                                                <textarea
                                                    value={editContent}
                                                    onChange={(e) => setEditContent(e.target.value)}
                                                    rows={2}
                                                    maxLength={255}
                                                    className="w-full rounded-xl border border-brand-cream-light p-3 text-sm text-brand-ink focus:border-brand-green focus:outline-none"
                                                />
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => setEditingCommentId(null)}
                                                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleSaveCommentEdit(comment.id)}
                                                        className="rounded-lg bg-brand-green px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-green-deep"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-brand-text leading-relaxed whitespace-pre-line mb-3">
                                                {comment.content}
                                            </p>
                                        )}

                                        {/* Reply Trigger */}
                                        {auth?.user && post.allow_comments !== false && (
                                            <div className="flex items-center gap-2 pt-1 border-t border-brand-cream-light/60">
                                                <button
                                                    onClick={() => {
                                                        setActiveReplyId(
                                                            activeReplyId === comment.id ? null : comment.id
                                                        );
                                                        setReplyContent('');
                                                    }}
                                                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green-deep hover:text-brand-green transition"
                                                >
                                                    <CornerDownRight size={13} />
                                                    <span>{activeReplyId === comment.id ? 'Cancel Reply' : 'Reply'}</span>
                                                </button>
                                            </div>
                                        )}

                                        {/* Inline Reply Input */}
                                        {activeReplyId === comment.id && (
                                            <div className="mt-3 pl-4 border-l-2 border-brand-green/30">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={replyContent}
                                                        onChange={(e) => setReplyContent(e.target.value)}
                                                        placeholder={`Reply to @${comment.user?.username}...`}
                                                        maxLength={255}
                                                        className="flex-grow rounded-xl border border-brand-cream-light bg-white px-3 py-2 text-xs text-brand-ink focus:border-brand-green focus:outline-none"
                                                    />
                                                    <button
                                                        onClick={() => handleAddReply(comment.id)}
                                                        disabled={!replyContent.trim() || isSubmittingReply}
                                                        className="rounded-xl bg-brand-green px-4 py-2 text-xs font-semibold text-white hover:bg-brand-green-deep transition disabled:opacity-50"
                                                    >
                                                        {isSubmittingReply ? 'Sending...' : 'Send'}
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Nested Replies List */}
                                        {comment.replies && comment.replies.length > 0 && (
                                            <div className="mt-4 pl-4 space-y-3 border-l-2 border-brand-green/20">
                                                {comment.replies.map((reply) => (
                                                    <div
                                                        key={reply.id}
                                                        className="rounded-xl bg-white p-3.5 border border-brand-cream-light"
                                                    >
                                                        <div className="flex items-start justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                {reply.user?.avatar ? (
                                                                    <img
                                                                        src={`/storage/avatars/${reply.user.avatar}`}
                                                                        alt={reply.user.username}
                                                                        className="h-7 w-7 rounded-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green/60 text-[10px] font-bold text-white">
                                                                        {getInitials(reply.user?.username)}
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <span className="text-xs font-semibold text-brand-ink">
                                                                        {reply.user?.name || reply.user?.username}
                                                                    </span>
                                                                    <span className="text-[10px] text-brand-muted ml-2">
                                                                        {formatDate(reply.created_at)}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {auth?.user && auth.user.id === reply.user_id && (
                                                                <button
                                                                    onClick={() => handleDeleteComment(reply.id, true)}
                                                                    className="text-brand-muted hover:text-red-500 transition p-1"
                                                                    title="Delete Reply"
                                                                >
                                                                    <Trash2 size={12} />
                                                                </button>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-brand-text leading-relaxed whitespace-pre-line pl-9">
                                                            {reply.content}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-center py-6 text-sm text-brand-muted">
                                    No comments yet. Be the first to start the discussion!
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Related Articles Section */}
                    {morearticles && morearticles.length > 0 && (
                        <section className="mb-16">
                            <div className="mb-8 text-center sm:text-left">
                                <h2 className="font-serif text-3xl font-bold text-brand-ink">
                                    More Relocation Insights
                                </h2>
                                <p className="text-brand-muted mt-1">
                                    Continue reading articles on settling down in Nigeria
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {morearticles.map((article) => (
                                    <article
                                        key={article.id}
                                        className="group overflow-hidden rounded-2xl border border-brand-cream-light bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="h-40 overflow-hidden">
                                                {article.image_path ? (
                                                    <img
                                                        src={`/storage/uploads/${article.image_path}`}
                                                        alt={article.title}
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            const parent = e.currentTarget.parentElement;
                                                            if (parent) {
                                                                parent.classList.add('bg-gradient-to-br', 'from-brand-green', 'to-brand-green-deep');
                                                                const fallback = document.createElement('div');
                                                                fallback.className = 'flex h-full w-full flex-col items-center justify-center gap-1';
                                                                fallback.innerHTML = `<span class="text-3xl font-bold text-white/70">${article.title.charAt(0).toUpperCase()}</span>`;
                                                                parent.appendChild(fallback);
                                                            }
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-green to-brand-green-deep gap-1">
                                                        <span className="text-3xl font-bold text-white/70">
                                                            {article.title.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-2 text-xs text-brand-muted mb-2">
                                                    <Clock size={12} />
                                                    <span>{formatDate(article.created_at)}</span>
                                                </div>
                                                <h3 className="font-serif text-lg font-bold text-brand-ink group-hover:text-brand-green transition-colors line-clamp-2 mb-2">
                                                    <Link href={route('single.post', article.slug)}>
                                                        {article.title}
                                                    </Link>
                                                </h3>
                                                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                                                    {article.description
                                                        ? article.description.replace(/<[^>]*>/g, '').slice(0, 100)
                                                        : ''}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="px-5 pb-5 pt-2 border-t border-brand-cream-light/60 flex items-center justify-between text-xs text-brand-muted">
                                            <span>By @{article.user?.username}</span>
                                            <Link
                                                href={route('single.post', article.slug)}
                                                className="font-semibold text-brand-green-deep hover:underline"
                                            >
                                                Read article &rarr;
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}
                </article>

                {/* Sticky Mobile Action Dock (UX 5) */}
                <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-brand-cream-light px-6 py-3 flex items-center justify-around">
                    {/* Like */}
                    <button
                        onClick={handleLike}
                        className="flex flex-col items-center gap-1 text-xs font-semibold"
                    >
                        <Heart
                            size={20}
                            className={isLiked ? 'text-red-500 fill-red-500' : 'text-brand-muted'}
                        />
                        <span className={isLiked ? 'text-red-500' : 'text-brand-muted'}>
                            {likesCount}
                        </span>
                    </button>

                    {/* Bookmark */}
                    <button
                        onClick={handleSave}
                        className="flex flex-col items-center gap-1 text-xs font-semibold"
                    >
                        <Bookmark
                            size={20}
                            className={isSaved ? 'text-brand-green fill-brand-green' : 'text-brand-muted'}
                        />
                        <span className={isSaved ? 'text-brand-green' : 'text-brand-muted'}>
                            {isSaved ? 'Saved' : 'Save'}
                        </span>
                    </button>

                    {/* Comments Jump */}
                    <a
                        href="#discussion-section"
                        className="flex flex-col items-center gap-1 text-xs font-semibold text-brand-muted"
                    >
                        <MessageCircle size={20} />
                        <span>{commentsCount}</span>
                    </a>

                    {/* Share */}
                    <button
                        onClick={handleShare}
                        className="flex flex-col items-center gap-1 text-xs font-semibold text-brand-muted"
                    >
                        <Share2 size={20} />
                        <span>Share</span>
                    </button>
                </div>
            </main>
        </GuestLayout>
    );
}
