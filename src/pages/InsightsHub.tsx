import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllInsights } from '../data/insights';
import './InsightsStyles.css';
import { motion } from 'framer-motion';

const InsightsHub: React.FC = () => {
    const insights = getAllInsights();
    return (
        <div className="insights-section">
            <div className="insights-container">
                <div className="hub-header">
                    <span className="hub-label">Writing & Insights</span>
                    <h1 className="hub-headline">Signals from the edge</h1>
                </div>

                <div className="insight-list">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={insight.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/insights/${insight.slug}`} className="insight-item group">
                                <div className="item-meta">
                                    <span className="item-cat">{insight.category}</span>
                                    <span className="item-date">{insight.date}</span>
                                </div>
                                <h2 className="item-title">{insight.title}</h2>
                                <p className="item-excerpt">{insight.excerpt}</p>
                                <span className="read-link">
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsightsHub;
