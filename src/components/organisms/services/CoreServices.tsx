import React from 'react';
import './ServicesStyles.css';

const CoreServices: React.FC = () => {
    return (
        <section className="service-detail" id="core-services">
            <div className="services-container">
                <span className="services-label">Our Expertise</span>
                <h2 className="detail-headline">Core Capabilities</h2>
                <div className="services-intro">
                    <p>
                        We bridge the gap between academic theory and real-world application.
                        Our team brings rigor to the chaos of creation.
                    </p>
                </div>

                <div className="detail-steps">
                    {/* Card 1: Product Development */}
                    <div className="step-card">
                        <span className="step-num">01</span>
                        <h3 className="step-header">Product Development</h3>
                        <p className="offer-card-desc">
                            From napkin sketch to deployed prototype. We build tangible solutions—apps, devices, and platforms—that you can touch, test, and scale. We don't just spec it; we ship it.
                        </p>
                    </div>

                    {/* Card 2: Service Development */}
                    <div className="step-card">
                        <span className="step-num">02</span>
                        <h3 className="step-header">Service Development</h3>
                        <p className="offer-card-desc">
                            Optimizing the invisible architecture of care. We design workflows, patient journeys, and support systems that treat the human experience as the primary metric of success.
                        </p>
                    </div>

                    {/* Card 3: Innovation Consulting */}
                    <div className="step-card">
                        <span className="step-num">03</span>
                        <h3 className="step-header">Innovation Consulting</h3>
                        <p className="offer-card-desc">
                            Equipping your team to solve their own problems. We provide the frameworks, strategy, and capacity building needed to turn your institution into an engine of continuous improvement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
