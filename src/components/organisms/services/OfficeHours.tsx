import React from 'react';
import './ServicesStyles.css';

const OfficeHours: React.FC = () => {
    return (
        <section id="office-hours" className="service-detail">
            <div className="services-container">
                <span className="services-label">The Front Door</span>
                <h2 className="detail-headline">Office Hours</h2>
                <p className="services-intro">
                    No pitch deck. No approval chain. Just a conversation about what you've noticed, what you're imagining, and what might be possible. Some of our best moonshots started here.
                </p>

                <div className="detail-steps">
                    <div className="step-card">
                        <span className="step-num">Step 1</span>
                        <h3 className="step-header">Show Up</h3>
                        <p className="offer-card-desc">
                            Tuesday, Wednesday, or Thursday from 2–4pm at the Hugh Gloster Building. Walk in.
                        </p>
                    </div>
                    <div className="step-card">
                        <span className="step-num">Step 2</span>
                        <h3 className="step-header">Share What's On Your Mind</h3>
                        <p className="offer-card-desc">
                            A workflow you want to improve. A research question that needs new tools. A curriculum idea. An operational opportunity. Or just something you can't stop thinking about.
                        </p>
                    </div>
                    <div className="step-card">
                        <span className="step-num">Step 3</span>
                        <h3 className="step-header">See What Develops</h3>
                        <p className="offer-card-desc">
                            We'll help you see what's buildable, what's been tried, and what technical approaches might apply. Some conversations spark collaborations. Some become moonshots. All of them are welcome.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeHours;
