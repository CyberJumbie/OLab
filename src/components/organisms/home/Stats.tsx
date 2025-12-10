import React from 'react';
import './Stats.css';

const Stats: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <span className="stats-label">Building Momentum</span>
                <h2 className="stats-title">What's happening at the lab</h2>

                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-value">4</span>
                        <span className="stat-label">Active Moonshots</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">3×</span>
                        <span className="stat-label">Weekly Office Hours</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">1</span>
                        <span className="stat-label">University Partner</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">∞</span>
                        <span className="stat-label">Ideas Welcome</span>
                    </div>
                </div>

                <p className="stats-tagline">
                    We're just getting started. Bring us what you've got.
                </p>
            </div>
        </section>
    );
};

export default Stats;
