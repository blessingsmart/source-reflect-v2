import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import {
    ArrowLeft,
    Bold,
    Italic,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Link as LinkIcon,
    Code,
    Eye,
    Edit3,
    Image as ImageIcon,
    Trash2,
    Send,
    X,
} from 'lucide-react';

interface EditPostProps {
    post: {
        id: number;
        title: string;
        slug: string;
        description: string;
        image_path?: string;
        allow_comments?: boolean;
    };
    hashtags: string[];
    allhashtags: string[];
}

export default function EditPost({ post: existingPost, hashtags: initialTags, allhashtags }: EditPostProps) {
    const { data, setData, processing, errors } = useForm<{
        title: string;
        description: string;
        hashtag: string;
        image: File | null;
        allow_comments: boolean;
        _method: string;
    }>({
        title: existingPost.title || '',
        description: existingPost.description || '',
        hashtag: initialTags ? initialTags.join(',') : '',
        image: null,
        allow_comments: existingPost.allow_comments ?? true,
        _method: 'PUT',
    });

    const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
    const [formatMode, setFormatMode] = useState<'html' | 'markdown'>('html');
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags || []);
    const [tagInput, setTagInput] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string | null>(
        existingPost.image_path ? `/storage/uploads/${existingPost.image_path}` : null
    );
    const [imageSizeMB, setImageSizeMB] = useState<string | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Sync selectedTags to form data.hashtag
    const updateTags = (tags: string[]) => {
        setSelectedTags(tags);
        setData('hashtag', tags.join(','));
    };

    // Add Tag
    const handleAddTag = (tagToAdd: string) => {
        const cleaned = tagToAdd.trim().replace(/^#/, '').replace(/[^A-Za-z0-9_-]/g, '');
        if (!cleaned) return;
        if (selectedTags.length >= 5) {
            alert('You can select up to 5 topics.');
            return;
        }
        if (!selectedTags.includes(cleaned)) {
            updateTags([...selectedTags, cleaned]);
        }
        setTagInput('');
    };

    // Remove Tag
    const handleRemoveTag = (index: number) => {
        const newTags = selectedTags.filter((_, i) => i !== index);
        updateTags(newTags);
    };

    // Handle Image Selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image must be less than 5MB.');
                return;
            }
            setData('image', file);
            setImageSizeMB((file.size / (1024 * 1024)).toFixed(2));
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setData('image', null);
        setImagePreview(null);
        setImageSizeMB(null);
    };

    // Insert formatting helper
    const insertFormat = (before: string, after: string = '') => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const previousText = textarea.value;
        const selectedText = previousText.substring(start, end) || (formatMode === 'html' ? 'Your content' : 'text');

        const replacement = before + selectedText + after;
        const newText = previousText.substring(0, start) + replacement + previousText.substring(end);

        setData('description', newText);

        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
        }, 10);
    };

    // Formatting button action based on current mode (HTML or Markdown)
    const handleFormat = (type: 'bold' | 'italic' | 'h2' | 'h3' | 'ul' | 'ol' | 'quote' | 'link' | 'code' | 'p' | 'hr') => {
        if (formatMode === 'html') {
            switch (type) {
                case 'bold':
                    insertFormat('<strong>', '</strong>');
                    break;
                case 'italic':
                    insertFormat('<em>', '</em>');
                    break;
                case 'h2':
                    insertFormat('<h2>', '</h2>');
                    break;
                case 'h3':
                    insertFormat('<h3>', '</h3>');
                    break;
                case 'ul':
                    insertFormat('<ul>\n  <li>', '</li>\n</ul>');
                    break;
                case 'ol':
                    insertFormat('<ol>\n  <li>', '</li>\n</ol>');
                    break;
                case 'quote':
                    insertFormat('<blockquote>', '</blockquote>');
                    break;
                case 'link':
                    insertFormat('<a href="https://example.com" target="_blank">', '</a>');
                    break;
                case 'code':
                    insertFormat('<code>', '</code>');
                    break;
                case 'p':
                    insertFormat('<p>', '</p>');
                    break;
                case 'hr':
                    insertFormat('<hr />\n');
                    break;
            }
        } else {
            switch (type) {
                case 'bold':
                    insertFormat('**', '**');
                    break;
                case 'italic':
                    insertFormat('*', '*');
                    break;
                case 'h2':
                    insertFormat('## ');
                    break;
                case 'h3':
                    insertFormat('### ');
                    break;
                case 'ul':
                    insertFormat('- ');
                    break;
                case 'ol':
                    insertFormat('1. ');
                    break;
                case 'quote':
                    insertFormat('> ');
                    break;
                case 'link':
                    insertFormat('[Link Title](', ')');
                    break;
                case 'code':
                    insertFormat('`', '`');
                    break;
                case 'p':
                    insertFormat('\n\n');
                    break;
                case 'hr':
                    insertFormat('\n---\n');
                    break;
            }
        }
    };

    // Live preview generator
    const renderPreview = (content: string) => {
        if (!content || !content.trim()) return '<p class="text-brand-muted italic">Nothing to preview yet.</p>';

        let html = content;

        // Parse markdown shortcuts if present
        html = html
            .replace(/^### (.*$)/gim, '<h3 class="font-serif text-2xl font-bold text-brand-ink mt-6 mb-3">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="font-serif text-3xl font-bold text-brand-ink mt-8 mb-4">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="font-serif text-4xl font-bold text-brand-ink mt-8 mb-4">$1</h1>')
            .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-brand-green pl-4 italic text-brand-muted my-4">$1</blockquote>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code class="rounded bg-brand-cream px-1.5 py-0.5 text-brand-green-deep font-mono text-sm">$1</code>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-green underline hover:text-brand-green-deep">$1</a>');

        // If the content is plain text without HTML block tags, wrap newlines into paragraphs
        if (!/<(p|div|h[1-6]|ul|ol|table|blockquote|section|header|article|pre)/i.test(html)) {
            html = html
                .split(/\n\n+/)
                .map((p) => `<p class="my-4 text-brand-text leading-relaxed">${p.replace(/\n/g, '<br/>')}</p>`)
                .join('');
        }

        return `<div class="prose prose-lg max-w-none text-brand-text leading-relaxed prose-headings:font-serif prose-headings:text-brand-ink prose-a:text-brand-green prose-img:rounded-2xl">${html}</div>`;
    };

    // Calculate reading time & word count (strips HTML for accurate metric)
    const strippedText = data.description.replace(/<[^>]*>/g, '').trim();
    const wordsCount = strippedText ? strippedText.split(/\s+/).filter(Boolean).length : 0;
    const readTimeMinutes = Math.max(1, Math.ceil(wordsCount / 200));

    // Submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(route('update.post', existingPost.slug), {
            _method: 'put',
            title: data.title,
            description: data.description,
            hashtag: data.hashtag,
            image: data.image,
            allow_comments: data.allow_comments,
        });
    };

    return (
        <GuestLayout>
            <Head title={`Edit "${existingPost.title}" – Setudown Blog`} />

            <div className="bg-brand-cream/60 py-4 border-b border-brand-cream-light">
                <div className="mx-auto max-w-4xl px-6 flex items-center justify-between">
                    <Link
                        href={route('single.post', existingPost.slug)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-green-deep hover:text-brand-green transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>View Article</span>
                    </Link>
                </div>
            </div>

            <main className="bg-brand-cream-light/30 py-10 min-h-screen">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ink">
                            Edit Article
                        </h1>
                        <p className="mt-2 text-brand-muted">
                            Update your article content (HTML or formatted text), cover image, and topics.
                        </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Title Input */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-brand-cream-light shadow-sm">
                            <label className="block text-sm font-bold text-brand-ink mb-2">
                                Post Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                maxLength={150}
                                className={`w-full rounded-2xl border bg-brand-cream-light/20 p-4 text-base sm:text-lg font-serif font-bold text-brand-ink focus:bg-white focus:outline-none focus:ring-2 ${
                                    errors.title
                                        ? 'border-red-400 focus:ring-red-400'
                                        : 'border-brand-cream-light focus:border-brand-green focus:ring-brand-green/20'
                                }`}
                            />
                            <div className="mt-2 flex items-center justify-between text-xs text-brand-muted">
                                <span>{errors.title ? <span className="text-red-500 font-medium">{errors.title}</span> : 'Between 6 and 150 characters.'}</span>
                                <span>{data.title.length} / 150</span>
                            </div>
                        </div>

                        {/* Optional Featured Image Box */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-brand-cream-light shadow-sm">
                            <label className="block text-sm font-bold text-brand-ink mb-1">
                                Featured Cover Image <span className="text-xs font-normal text-brand-muted">(Optional)</span>
                            </label>
                            <p className="text-xs text-brand-muted mb-4">
                                Recommended 1200x600px. JPG, PNG or WebP under 5MB.
                            </p>

                            {imagePreview ? (
                                <div className="relative overflow-hidden rounded-2xl border border-brand-cream-light bg-brand-cream">
                                    <img
                                        src={imagePreview}
                                        alt="Cover preview"
                                        className="h-64 w-full object-cover"
                                    />
                                    <div className="absolute top-3 right-3 flex items-center gap-2">
                                        {imageSizeMB && (
                                            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                                {imageSizeMB} MB
                                            </span>
                                        )}
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-red-700 transition"
                                        >
                                            <Trash2 size={13} />
                                            Change Image
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <label className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-cream-light bg-brand-cream-light/20 p-8 cursor-pointer hover:border-brand-green hover:bg-brand-cream/30 transition text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-deep mb-3">
                                        <ImageIcon size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-brand-ink">
                                        Click to upload new cover photo
                                    </span>
                                    <span className="text-xs text-brand-muted mt-1">or drag and drop your image file</span>
                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png,image/jpg,image/webp"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                            {errors.image && <p className="mt-2 text-xs text-red-500">{errors.image}</p>}
                        </div>

                        {/* Article Content & Rich Editor */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-brand-cream-light shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-cream-light pb-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <label className="text-sm font-bold text-brand-ink">
                                        Article Content (HTML / Text) <span className="text-red-500">*</span>
                                    </label>
                                    <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green-deep">
                                        HTML Supported
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    {/* Format syntax mode toggle */}
                                    <div className="flex rounded-lg bg-brand-cream p-0.5 text-[11px] font-semibold text-brand-muted">
                                        <button
                                            type="button"
                                            onClick={() => setFormatMode('html')}
                                            className={`px-2.5 py-1 rounded-md transition ${
                                                formatMode === 'html'
                                                    ? 'bg-white text-brand-green-deep shadow-xs'
                                                    : 'hover:text-brand-ink'
                                            }`}
                                        >
                                            HTML Tags
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormatMode('markdown')}
                                            className={`px-2.5 py-1 rounded-md transition ${
                                                formatMode === 'markdown'
                                                    ? 'bg-white text-brand-green-deep shadow-xs'
                                                    : 'hover:text-brand-ink'
                                            }`}
                                        >
                                            Markdown
                                        </button>
                                    </div>

                                    {/* Tab Toggle */}
                                    <div className="flex rounded-xl bg-brand-cream-light p-1 text-xs font-semibold">
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('write')}
                                            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 transition ${
                                                activeTab === 'write'
                                                    ? 'bg-white text-brand-green-deep shadow-sm'
                                                    : 'text-brand-muted hover:text-brand-ink'
                                            }`}
                                        >
                                            <Edit3 size={14} />
                                            <span>Write</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('preview')}
                                            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 transition ${
                                                activeTab === 'preview'
                                                    ? 'bg-white text-brand-green-deep shadow-sm'
                                                    : 'text-brand-muted hover:text-brand-ink'
                                            }`}
                                        >
                                            <Eye size={14} />
                                            <span>Live Preview</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {activeTab === 'write' ? (
                                <div>
                                    {/* Formatting Toolbar */}
                                    <div className="mb-3 flex flex-wrap items-center gap-1.5 rounded-2xl bg-brand-cream-light/60 p-2 border border-brand-cream-light text-xs">
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('bold')}
                                            title="Bold"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition flex items-center gap-1"
                                        >
                                            <Bold size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('italic')}
                                            title="Italic"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition flex items-center gap-1"
                                        >
                                            <Italic size={15} />
                                        </button>
                                        <div className="h-4 w-px bg-brand-cream mx-1" />
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('h2')}
                                            title="Heading 2"
                                            className="rounded-lg px-2 py-1.5 text-brand-ink hover:bg-white transition font-bold"
                                        >
                                            H2
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('h3')}
                                            title="Heading 3"
                                            className="rounded-lg px-2 py-1.5 text-brand-ink hover:bg-white transition font-bold"
                                        >
                                            H3
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('p')}
                                            title="Paragraph"
                                            className="rounded-lg px-2 py-1.5 text-brand-ink hover:bg-white transition font-semibold"
                                        >
                                            &lt;p&gt;
                                        </button>
                                        <div className="h-4 w-px bg-brand-cream mx-1" />
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('ul')}
                                            title="Bullet List"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition"
                                        >
                                            <List size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('ol')}
                                            title="Numbered List"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition"
                                        >
                                            <ListOrdered size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('quote')}
                                            title="Blockquote"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition"
                                        >
                                            <Quote size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('link')}
                                            title="Link"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition"
                                        >
                                            <LinkIcon size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('code')}
                                            title="Code"
                                            className="rounded-lg p-2 text-brand-ink hover:bg-white transition"
                                        >
                                            <Code size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleFormat('hr')}
                                            title="Divider Line"
                                            className="rounded-lg px-2 py-1 text-brand-muted hover:bg-white transition text-[11px]"
                                        >
                                            &lt;hr/&gt;
                                        </button>
                                    </div>

                                    <textarea
                                        ref={textareaRef}
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={14}
                                        className={`w-full rounded-2xl border bg-brand-cream-light/10 p-4 text-sm sm:text-base font-mono leading-relaxed text-brand-text focus:bg-white focus:outline-none focus:ring-2 ${
                                            errors.description
                                                ? 'border-red-400 focus:ring-red-400'
                                                : 'border-brand-cream-light focus:border-brand-green focus:ring-brand-green/20'
                                        }`}
                                    />
                                </div>
                            ) : (
                                <div
                                    className="min-h-[350px] rounded-2xl border border-brand-cream-light bg-brand-cream-light/10 p-6"
                                    dangerouslySetInnerHTML={{ __html: renderPreview(data.description) }}
                                />
                            )}
                            <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-brand-muted">
                                <div>
                                    {errors.description && (
                                        <span className="text-red-500 font-medium">{errors.description}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>{wordsCount} words</span>
                                    <span>•</span>
                                    <span>~{readTimeMinutes} min read</span>
                                </div>
                            </div>
                        </div>

                        {/* Topics & Hashtags */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-brand-cream-light shadow-sm">
                            <label className="block text-sm font-bold text-brand-ink mb-1">
                                Topics &amp; Hashtags <span className="text-xs font-normal text-brand-muted">(Up to 5)</span>
                            </label>

                            {/* Tag Input */}
                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddTag(tagInput);
                                        }
                                    }}
                                    placeholder="Type a topic and press Enter"
                                    className="flex-grow rounded-2xl border border-brand-cream-light bg-brand-cream-light/20 p-3 text-sm text-brand-ink focus:bg-white focus:border-brand-green focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddTag(tagInput)}
                                    className="rounded-2xl bg-brand-green/10 px-5 text-sm font-semibold text-brand-green-deep border border-brand-green/20 hover:bg-brand-green hover:text-white transition"
                                >
                                    Add
                                </button>
                            </div>

                            {/* Selected Tags Display */}
                            {selectedTags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4 p-3 rounded-2xl bg-brand-cream-light/40 border border-brand-cream-light">
                                    {selectedTags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3.5 py-1 text-xs font-semibold text-white shadow-sm"
                                        >
                                            #{tag}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(idx)}
                                                className="hover:text-red-200"
                                            >
                                                <X size={13} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Existing Tags Chips */}
                            {allhashtags && allhashtags.length > 0 && (
                                <div>
                                    <span className="text-xs font-medium text-brand-muted block mb-2">
                                        Popular topics:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {allhashtags.slice(0, 12).map((tag, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => handleAddTag(tag)}
                                                disabled={selectedTags.includes(tag)}
                                                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                                                    selectedTags.includes(tag)
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-brand-cream text-brand-ink hover:bg-brand-green/10 hover:text-brand-green-deep border border-brand-cream-light'
                                                }`}
                                            >
                                                #{tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {errors.hashtag && <p className="mt-2 text-xs text-red-500">{errors.hashtag}</p>}
                        </div>

                        {/* Settings & Comments Toggle */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-brand-cream-light shadow-sm">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.allow_comments}
                                    onChange={(e) => setData('allow_comments', e.target.checked)}
                                    className="h-5 w-5 rounded-md border-brand-cream-light text-brand-green focus:ring-brand-green"
                                />
                                <div>
                                    <span className="text-sm font-bold text-brand-ink block">
                                        Enable Reader Discussion
                                    </span>
                                    <span className="text-xs text-brand-muted">
                                        Allow other members to comment and ask questions on this post.
                                    </span>
                                </div>
                            </label>
                        </div>

                        {/* Submit Button Bar */}
                        <div className="flex items-center justify-between pt-4">
                            <Link
                                href={route('single.post', existingPost.slug)}
                                className="rounded-xl border border-brand-cream-light bg-white px-6 py-3 text-sm font-semibold text-brand-muted hover:text-brand-ink hover:bg-brand-cream transition"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-8 py-3.5 text-base font-bold text-brand-ink shadow-lg shadow-brand-gold/20 hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                                <span>{processing ? 'Saving Changes...' : 'Save Changes'}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </GuestLayout>
    );
}
