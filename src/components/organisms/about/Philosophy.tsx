import React from 'react';
import './AboutStyles.css';

const Philosophy: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <span className="about-label">What We Believe</span>
                <h2 className="about-headline">The principles behind the work</h2>

                <div className="phil-grid">
                    <div className="phil-card">
                        <h3 className="phil-title">Proximity beats pedigree</h3>
                        <p className="phil-text">
                            The people closest to a problem understand it best. Clinical experience, community insight, operational knowledge: these aren't inputs to be gathered. They're the foundation everything else builds on.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Fluency creates options</h3>
                        <p className="phil-text">
                            Knowing what's possible changes what you can imagine. We stay current on emerging tools: AI, simulation, genomics, wearables. When you bring a problem, we can see solutions you might not.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Prototypes beat proposals</h3>
                        <p className="phil-text">
                            A working demo teaches more than a hundred slide decks. We build early, test often, and let real-world feedback guide what comes next.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Momentum compounds</h3>
                        <p className="phil-text">
                            Every project we ship, every skill we teach, every lesson we learn creates capacity that compounds over time. We're building an institution that can keep building.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
