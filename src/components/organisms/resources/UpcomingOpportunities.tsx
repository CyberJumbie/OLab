import React from 'react';
import './ResourcesStyles.css';

const UpcomingOpportunities: React.FC = () => {
    return (
        <section className="resources-section" style={{ borderBottom: 'none' }}>
            <div className="resources-container">
                <span className="resources-label">Mark Your Calendar</span>
                <h2 className="resources-headline">Upcoming opportunities</h2>

                <table className="event-table">
                    <tbody>
                        <tr className="event-row">
                            <td className="event-cell name">Office Hours</td>
                            <td className="event-cell details">Tues / Wed / Thurs • 2–4pm • Hugh Gloster Building</td>
                            <td className="event-cell timing">Ongoing</td>
                        </tr>
                        <tr className="event-row">
                            <td className="event-cell name">Spring Hackathon 2026</td>
                            <td className="event-cell details">48-hour sprint on maternal health challenges</td>
                            <td className="event-cell timing">March 2026</td>
                        </tr>
                        <tr className="event-row">
                            <td className="event-cell name">Moonshot Workshop</td>
                            <td className="event-cell details">Intensive innovation methodology training</td>
                            <td className="event-cell timing">April 2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UpcomingOpportunities;
