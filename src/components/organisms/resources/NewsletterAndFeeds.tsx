import React from 'react';
import './ResourcesStyles.css';
// Reuse existing newsletter styles from Services
import '../services/ServicesStyles.css';

const NewsletterAndFeeds: React.FC = () => {
    return (
        <>
            {/* Newsletter Section */}
            <section className="resources-section">
                <div className="resources-container">
                    <span className="resources-label">Your Weekly Briefing</span>
                    <h2 className="resources-headline">Tech Radar</h2>
                    <p className="resources-intro">
                        What's emerging in AI, genomics, simulation, wearables, and immersive computing. Filtered for what matters to clinicians, researchers, and educators. No hype. No jargon. Just signal.
                    </p>

                    <div className="newsletter-box">
                        <h3 className="newsletter-title">Five minutes. Every Monday.</h3>
                        <p className="newsletter-text">
                            The breakthroughs reshaping what's possible in healthcare, research, and medical education. Written for builders.
                        </p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your.email@msm.edu"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="btn-subscribe">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>


        </>
    );
};

export default NewsletterAndFeeds;
