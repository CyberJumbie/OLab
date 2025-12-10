import React from 'react';
import { Clock, Video, FlaskConical, Zap, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceGrid.css';

const ServiceGrid: React.FC = () => {
    return (
        <section className="service-section">
            <div className="service-container">
                <span className="section-label">Where Expertise Meets Capability</span>
                <h2 className="section-title">Your insight. Our engine.</h2>
                <p className="section-intro">
                    MSM has always produced bold ideas. The lab exists to accelerate them. Bring clinical knowledge, research questions, operational insights, or community perspective. We bring methodology, technical fluency, and the speed to move from concept to working prototype. Together, we build what neither could alone.
                </p>

                <div className="service-grid">
                    {/* 1. Office Hours (Featured) - 60% */}
                    <Link to="/services#office-hours" className="service-card card-office">
                        <Clock className="card-icon" size={32} />
                        <h3 className="card-title">Office Hours</h3>
                        <p className="card-desc">
                            The starting point for everything. Bring a half-formed idea, a stubborn problem, or a question you can't stop thinking about. We'll help you see what's buildable and map the fastest path to testing it.
                        </p>
                        <ul className="featured-bullets">
                            <li>Pressure-test your thinking with people who build</li>
                            <li>Discover technical approaches you didn't know existed</li>
                            <li>Find collaborators across disciplines</li>
                            <li>Leave with a clearer sense of what's possible</li>
                        </ul>
                        <div className="card-meta">
                            <span>Tues / Wed / Thurs • 2–4pm • Hugh Gloster Building</span>
                            <ArrowRight size={16} className="arrow-icon arrow-fade" />
                        </div>
                    </Link>

                    {/* 2. Story Vault - 40% */}
                    <Link to="/services#story-vault" className="service-card card-story">
                        <Video className="card-icon" size={28} />
                        <h3 className="card-title">Story Vault</h3>
                        <p className="card-desc">
                            Groundbreaking work is happening across MSM. It deserves a wider audience. We produce the content that helps your research, your practice, your impact travel beyond campus and into the hands of people who need to see it.
                        </p>
                        <div className="card-meta">
                            <span>Get featured</span>
                            <ArrowRight size={16} className="arrow-icon" />
                        </div>
                    </Link>

                    {/* 3. Moonshot Workshops - 33% */}
                    <Link to="/services#workshops" className="service-card card-workshops">
                        <FlaskConical className="card-icon" size={28} />
                        <h3 className="card-title">Moonshot Workshops</h3>
                        <p className="card-desc">
                            Two intensive days learning the methodology behind breakthrough innovation. Frame problems worth solving. Prototype solutions worth testing. Learn when to pivot and when to push forward.
                        </p>
                        <div className="card-meta">
                            <span>2x per year • Next: Spring 2026</span>
                        </div>
                    </Link>

                    {/* 4. Hackathons - 33% */}
                    <Link to="/services#hackathons" className="service-card card-hackathons">
                        <Zap className="card-icon" size={28} />
                        <h3 className="card-title">Hackathons</h3>
                        <p className="card-desc">
                            48 hours. Real stakes. Working prototypes. Clinicians, students, developers, and designers in the same room building solutions to problems that matter. Winners get funding to keep going.
                        </p>
                        <div className="card-meta">
                            <span>2x per year</span>
                        </div>
                    </Link>

                    {/* 5. Tech Radar - 33% */}
                    <Link to="/resources#tech-radar" className="service-card card-radar">
                        <FileText className="card-icon" size={28} />
                        <h3 className="card-title">Tech Radar</h3>
                        <p className="card-desc">
                            A weekly briefing on emerging tools reshaping healthcare: AI, genomics, simulation, wearables. What's real. What's hype. What MSM should be watching. Five minutes every Monday.
                        </p>
                        <div className="card-meta">
                            <span>Subscribe free</span>
                            <ArrowRight size={16} className="arrow-icon" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
