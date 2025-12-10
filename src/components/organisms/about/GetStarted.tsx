import React from 'react';
import { ArrowRight } from 'lucide-react';
import './AboutStyles.css';

const GetStarted: React.FC = () => {
    return (
        <section className="about-section" style={{ borderBottom: 'none' }}>
            <div className="about-container">
                <span className="about-label">Get Started</span>
                <h2 className="about-headline">Three ways to begin</h2>
                <p className="about-intro">
                    However you want to start, there's a path. Bring a clear vision or just a nagging question. Come once or come every week. The door is open.
                </p>

                <div className="entry-grid-3">
                    <div className="entry-item">
                        <h3 className="entry-title">Office Hours</h3>
                        <p className="entry-desc">
                            Just show up. Think out loud. Discover what's buildable. Many of our best projects started as "I keep noticing this thing..." conversations.
                        </p>
                    </div>
                    <div className="entry-item">
                        <h3 className="entry-title">Hackathons</h3>
                        <p className="entry-desc">
                            48 hours to build something with a cross-functional team. Clinicians, developers, designers, students: all in the same room, all building.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=Hackathon Waitlist" className="entry-cta">
                            Join Waitlist <ArrowRight size={16} />
                        </a>
                    </div>
                    <div className="entry-item">
                        <h3 className="entry-title">Propose Project</h3>
                        <p className="entry-desc">
                            Have a bigger vision? Something that could reshape how MSM teaches, heals, or serves? Tell us. We review proposals monthly and move fast on the right ones.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=Project Proposal" className="entry-cta">
                            Reach Out <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

                {/* <div className="flex justify-center md:justify-start">
                    <a href="mailto:ipd@msm.edu?subject=I Want In" className="btn-large">
                        Reach Out
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default GetStarted;
