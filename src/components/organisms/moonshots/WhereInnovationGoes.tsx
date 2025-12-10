import React from 'react';
import './MoonshotsStyles.css';

const WhereInnovationGoes: React.FC = () => {
    return (
        <section className="moonshots-section">
            <div className="moonshots-container">
                <span className="moonshots-label">Where Innovation Goes</span>
                <h2 className="moonshots-title">Success means leaving the lab</h2>
                <p className="moonshots-intro">
                    We build to ship. When something works, it moves into the world through whatever pathway creates the most impact.
                </p>

                <div className="moonshots-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="moonshot-card" style={{ border: '1px solid var(--border-default)', background: 'transparent' }}>
                        <h3 className="moonshot-name" style={{ marginTop: 0 }}>Integrated into MSM</h3>
                        <p className="moonshot-desc">
                            Becoming standard practice in curriculum, clinical operations, or institutional systems.
                        </p>
                    </div>
                    <div className="moonshot-card" style={{ border: '1px solid var(--border-default)', background: 'transparent' }}>
                        <h3 className="moonshot-name" style={{ marginTop: 0 }}>Independent Ventures</h3>
                        <p className="moonshot-desc">
                            Spinning out as mission-driven companies, with MSM maintaining equity.
                        </p>
                    </div>
                    <div className="moonshot-card" style={{ border: '1px solid var(--border-default)', background: 'transparent' }}>
                        <h3 className="moonshot-name" style={{ marginTop: 0 }}>Licensed to Partners</h3>
                        <p className="moonshot-desc">
                            Health systems, research institutions, or industry scaling solutions across the country.
                        </p>
                    </div>
                    <div className="moonshot-card" style={{ border: '1px solid var(--border-default)', background: 'transparent' }}>
                        <h3 className="moonshot-name" style={{ marginTop: 0 }}>Open-Source Release</h3>
                        <p className="moonshot-desc">
                            Free toolkits for community health centers, HBCUs, and safety-net institutions who need them most.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhereInnovationGoes;
