import React from 'react';
import './AboutStyles.css';

const WhoWeServe: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <span className="about-label">Who We Serve</span>
                <h2 className="about-headline">If you're solving problems that matter, you belong here</h2>

                <div className="phil-grid">
                    <div className="phil-card">
                        <h3 className="phil-title">Faculty & Researchers</h3>
                        <p className="phil-text">
                            You have questions that could reshape practice. We have the methodology and build capacity to help you move from discovery to working tool. We teach the methodology so you can keep building.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Students</h3>
                        <p className="phil-text">
                            Get experience building solutions with real stakes. Contribute to projects that ship. Learn innovation methodology you'll carry into residency, practice, and leadership.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Staff & Operators</h3>
                        <p className="phil-text">
                            You understand how things work on the ground. Bring us the operational opportunities that better tools or processes could unlock. We'll build and test alongside you.
                        </p>
                    </div>
                    <div className="phil-card">
                        <h3 className="phil-title">Clinicians & Practitioners</h3>
                        <p className="phil-text">
                            Your pattern recognition is irreplaceable. Pair it with technical capability and rigorous testing. We can build interventions that work in practice, not just in theory.
                        </p>
                    </div>
                    {/* Community Partners card can be added if design allows, grid is 2 cols usually? */}
                    <div className="phil-card">
                        <h3 className="phil-title">Community Partners</h3>
                        <p className="phil-text">
                            The communities most affected should shape what gets built. We co-design with lived experience at the center, not as an afterthought.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
