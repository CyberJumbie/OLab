import type { ComponentType } from 'react';

export interface Insight {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    author: string;
    readTime: string;
    Content: ComponentType; // The MDX component
}

// Check if import.meta.glob exists (it does in Vite), otherwise fallback for tests/types
const modules = import.meta.glob('../content/insights/*.mdx', { eager: true });

export const insights: Insight[] = Object.entries(modules).map(([path, mod]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.mdx', '') || '';
    const { meta, default: Content } = mod;

    return {
        id: slug,
        slug,
        title: meta.title,
        date: meta.date,
        category: meta.category,
        excerpt: meta.excerpt,
        author: meta.author,
        readTime: meta.readTime,
        Content
    };
});

export const getAllInsights = () => insights;

export const getInsightBySlug = (slug: string) => insights.find(i => i.slug === slug);
