import React from 'react';
import './AboutStyles.css';

const ProcessSteps: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <span className="about-label">Our Method</span>
                <h2 className="about-headline">Rigor at speed</h2>
                <p className="about-intro">
                    We move ideas to testing fast. Every initiative follows the same disciplined path, designed to separate signal from noise before we scale.
                </p>

                <div className="process-grid">
                    <div className="process-step">
                        <span className="step-label">1. Frame</span>
                        <h3 className="step-title">What's the real problem?</h3>
                        <p className="step-desc">
                            For whom? What would have to be true for this to matter? We synthesize clinical insight, user research, and technical landscape to define what's worth building.
                        </p>
                    </div>
                    <div className="process-step">
                        <span className="step-label">2. Build</span>
                        <h3 className="step-title">Prototype it</h3>
                        <p className="step-desc">
                            We don't debate hypotheticals. We prototype working solutions. We pair subject matter depth with development speed to move from concept to testable artifact in weeks, not years.
                        </p>
                    </div>
                    <div className="process-step">
                        <span className="step-label">3. Graduate</span>
                        <h3 className="step-title">Scale Impact</h3>
                        <p className="step-desc">
                            When something works, it leaves the lab. Integration into MSM operations. Spin-out as independent venture. Partnership with health systems. Open-source release for safety-net institutions. Every pathway returns value to the mission.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
