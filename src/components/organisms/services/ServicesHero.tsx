import React from 'react';
import './ServicesStyles.css';

const ServicesHero: React.FC = () => {
    return (
        <section className="services-hero">
            <div className="services-container">
                <span className="services-label">What We Offer</span>
                <h1 className="services-headline">Everything you need to move from idea to impact</h1>
                <p className="services-intro">
                    Methodology. Technical capability. Space to experiment. Platforms to share what you learn. Everything here is free and open to anyone at MSM who's ready to build.
                </p>
            </div>
        </section>
    );
};

export default ServicesHero;
