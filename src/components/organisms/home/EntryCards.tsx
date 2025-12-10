import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './EntryCards.css';

const EntryCards: React.FC = () => {
    return (
        <section className="entry-section">
            <div className="entry-container">
                <span className="entry-label">Your Entry Point</span>
                <h2 className="entry-title">Every breakthrough started with someone who showed up</h2>

                <div className="entry-grid">
                    {/* Card 1 */}
                    <Link to="/services#office-hours" className="entry-card group">
                        <div>
                            <h3 className="entry-card-title">Got a clinical hunch?</h3>
                            <p className="entry-card-text">Office Hours. Tuesday, Wednesday, or Thursday. No pitch deck required.</p>
                        </div>
                        <span className="entry-card-cta">
                            Show up <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/services#story-vault" className="entry-card group">
                        <div>
                            <h3 className="entry-card-title">Doing work that matters?</h3>
                            <p className="entry-card-text">Story Vault helps your research find its audience.</p>
                        </div>
                        <span className="entry-card-cta">
                            Get featured <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/resources#tech-radar" className="entry-card group">
                        <div>
                            <h3 className="entry-card-title">Want to see what's emerging?</h3>
                            <p className="entry-card-text">Tech Radar. Five minutes every Monday. Written for clinicians, not just technologists.</p>
                        </div>
                        <span className="entry-card-cta">
                            Subscribe <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Card 4 */}
                    <Link to="/moonshots" className="entry-card group">
                        <div>
                            <h3 className="entry-card-title">Ready to build something?</h3>
                            <p className="entry-card-text">Join an active moonshot or propose your own.</p>
                        </div>
                        <span className="entry-card-cta">
                            Let's go <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EntryCards;
