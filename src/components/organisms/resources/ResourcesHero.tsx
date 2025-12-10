import React from 'react';
import './ResourcesStyles.css';

const ResourcesHero: React.FC = () => {
    return (
        <section className="resources-section">
            <div className="resources-container">
                <span className="resources-label">Stay Connected</span>
                <h1 className="resources-headline">The future arrives faster when you're paying attention</h1>
                <p className="resources-intro">
                    Subscribe to our newsletter, follow our feeds, or mark your calendar. We'll keep you current on what's emerging and what MSM is building in response.
                </p>
            </div>
        </section>
    );
};

export default ResourcesHero;
