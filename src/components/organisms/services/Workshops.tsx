import React from 'react';
import './ServicesStyles.css';

const Workshops: React.FC = () => {
    return (
        <section id="workshops" className="service-detail">
            <div className="services-container">
                <span className="services-label">Build the Muscle</span>
                <h2 className="detail-headline">Workshops & Hackathons</h2>
                <p className="services-intro">
                    Innovation is a skill. These intensive experiences teach the methodology and give you practice applying it. You'll keep building long after you leave.
                </p>

                <div className="offer-grid">
                    <div className="offer-card">
                        <h3 className="offer-card-title">Moonshot Workshops</h3>
                        <p className="offer-card-desc">
                            Two days learning the methodology behind breakthrough innovation. Frame problems that matter. Prototype solutions worth testing. Learn to read signals and adapt before you've invested years.
                        </p>
                        <span className="offer-meta">
                            2x per year • Next: Spring 2026
                        </span>
                    </div>
                    <div className="offer-card">
                        <h3 className="offer-card-title">Hackathons</h3>
                        <p className="offer-card-desc">
                            48 hours. Cross-functional teams. Real problems. Working prototypes. Clinicians, students, developers, and designers in the same room building solutions to challenges that matter to MSM and the communities we serve. Winners get funding to continue.
                        </p>
                        <span className="offer-meta">
                            2x per year • Open to all MSM
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workshops;
