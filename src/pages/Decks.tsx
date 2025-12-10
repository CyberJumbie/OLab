import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InsightsStyles.css';

const Decks: React.FC = () => {
    React.useEffect(() => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.log('Fullscreen exit error:', err));
        }
    }, []);

    return (
        <div className="insights-section">
            <div className="insights-container">
                <div className="hub-header">
                    <span className="hub-label">Presentations</span>
                    <h1 className="hub-headline">Decks</h1>
                </div>

                <div className="insight-list">
                    {/* Women's Health Hackathon Deck Item */}
                    <Link to="/decks/womens-health-hackathon" className="insight-item group">
                        <div className="item-meta">
                            <span className="item-cat">Event Deck</span>
                            <span className="item-date">New Arrival</span>
                        </div>
                        <h2 className="item-title">Women's Health Innovation Hackathon</h2>
                        <p className="item-excerpt">
                            Translating global R&D priorities into local solutions. 48 hours to build what Black mothers need.
                        </p>
                        <span className="read-link">
                            View Presentation <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Opportunity Workshops Deck Item */}
                    <Link to="/decks/opportunity-workshops" className="insight-item group">
                        <div className="item-meta">
                            <span className="item-cat">Program Deck</span>
                            <span className="item-date">New Arrival</span>
                        </div>
                        <h2 className="item-title">Opportunity Workshops: Innovation Capacity Building</h2>
                        <p className="item-excerpt">
                            Innovation capacity building for healthcare's most neglected challenges. Two tracks, one methodology, five-workshop arc.
                        </p>
                        <span className="read-link">
                            View Presentation <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Opportunity Lab Deck Item */}
                    <Link to="/decks/opportunity-lab" className="insight-item group">
                        <div className="item-meta">
                            <span className="item-cat">Strategic Deck</span>
                            <span className="item-date">New Arrival</span>
                        </div>
                        <h2 className="item-title">The Case for MSM's Moonshot Factory</h2>
                        <p className="item-excerpt">
                            A presentation to Dr. [Name], Chief Innovation Officer. How the IPD-O Lab creates measurable impact across MSM's mission pillars.
                        </p>
                        <span className="read-link">
                            View Presentation <ArrowRight size={16} />
                        </span>
                    </Link>





                    {/* Placeholder Item */}
                    <div className="insight-item opacity-50 cursor-default">
                        <div className="item-meta">
                            <span className="item-cat text-gray-500">Coming Soon</span>
                        </div>
                        <h2 className="item-title text-gray-600">Future Presentations</h2>
                        <p className="item-excerpt text-gray-600">
                            More decks will be added to this library as they are developed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decks;
