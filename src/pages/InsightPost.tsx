import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getInsightBySlug } from '../data/insights';
import './InsightsStyles.css';
import { motion } from 'framer-motion';

const InsightPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const insight = getInsightBySlug(slug || '');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!insight) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--bg-deep)]">
                <div className="text-center">
                    <h2 className="text-2xl text-[var(--text-primary)] mb-4">Insight not found</h2>
                    <button onClick={() => navigate('/insights')} className="btn-secondary">
                        Back to Hub
                    </button>
                </div>
            </div>
        );
    }

    const { Content } = insight;

    return (
        <div className="insights-section">
            {/* Sticky/Fixed Back Nav */}
            <div className="back-nav">
                <Link to="/insights" className="btn-back">
                    <ArrowLeft size={16} /> Back to Hub
                </Link>
            </div>

            <div className="insights-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header className="post-header">
                        <div className="post-meta">
                            <span>{insight.category}</span>
                            <span>•</span>
                            <span>{insight.date}</span>
                            <span>•</span>
                            <span>{insight.readTime}</span>
                        </div>
                        <h1 className="post-title">{insight.title}</h1>
                    </header>

                    <article className="post-content">
                        <Content />
                    </article>
                </motion.div>

                <div className="mt-20 text-center">
                    <p className="text-[var(--text-muted)] italic">Written by {insight.author}</p>
                </div>
            </div>
        </div>
    );
};

export default InsightPost;
