import React from 'react';
import './ServicesStyles.css';

const TechRadar: React.FC = () => {
    return (
        <section id="tech-radar" className="service-detail" style={{ borderBottom: 'none' }}>
            <div className="services-container">
                <span className="services-label">Stay Connected</span>
                <h2 className="detail-headline">Tech Radar</h2>
                <p className="services-intro">
                    What's emerging in AI, genomics, simulation, wearables? What does it mean for healthcare, research, and medical education? Tech Radar filters the noise into signal. Written for curious clinicians and researchers, not just technologists.
                </p>

                <div className="newsletter-box">
                    <h3 className="newsletter-title">Five minutes. Every Monday.</h3>
                    <p className="newsletter-text">
                        The tools and breakthroughs reshaping what's possible. Curated for people who build.
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
    );
};

export default TechRadar;
