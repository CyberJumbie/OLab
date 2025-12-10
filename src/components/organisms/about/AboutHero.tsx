import React from 'react';
import { ArrowRight } from 'lucide-react';
import './AboutStyles.css';

const AboutHero: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <span className="about-label">About the Lab</span>
                <h1 className="about-headline">Where instincts become inventions</h1>
                <p className="about-intro">
                    MSM has always pioneered what others said couldn't be done. The IPD-O Lab extends that legacy with new capability: methodology, technical fluency, and protected space to move from insight to prototype to impact. We pair what you know with what's now possible. We build fast enough to matter.
                </p>
                <a href="mailto:ipd@msm.edu" className="entry-cta" style={{ marginTop: '0' }}>
                    Reach Out <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};

export default AboutHero;
