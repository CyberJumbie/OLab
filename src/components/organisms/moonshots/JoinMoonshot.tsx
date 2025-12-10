import React from 'react';
import { ArrowRight } from 'lucide-react';
import './MoonshotsStyles.css';

const JoinMoonshot: React.FC = () => {
    return (
        <section className="moonshots-section" style={{ borderTop: '1px solid var(--border-default)' }}>
            <div className="moonshots-container">
                <span className="moonshots-label">Join a Moonshot</span>
                <h2 className="moonshots-title">Every project needs different kinds of expertise</h2>

                <div className="roles-grid">
                    <div className="role-card">
                        <h3 className="role-title">Faculty Advisors</h3>
                        <p className="role-desc">Your clinical and research expertise shapes what we build and how we validate it. Guide projects toward solutions that work in practice.</p>
                        <a href="mailto:ipd@msm.edu" className="role-cta">Get involved <ArrowRight size={14} /></a>
                    </div>
                    <div className="role-card">
                        <h3 className="role-title">Student Builders</h3>
                        <p className="role-desc">Learn innovation by doing it. Contribute to projects with real stakes. Build portfolio pieces that matter.</p>
                        <a href="mailto:ipd@msm.edu" className="role-cta">Apply <ArrowRight size={14} /></a>
                    </div>
                    <div className="role-card">
                        <h3 className="role-title">User Testers</h3>
                        <p className="role-desc">Try solutions before anyone else. Your feedback shapes what ships and what evolves.</p>
                        <a href="mailto:ipd@msm.edu" className="role-cta">Sign up <ArrowRight size={14} /></a>
                    </div>
                    <div className="role-card">
                        <h3 className="role-title">Moonshot Proposers</h3>
                        <p className="role-desc">Have a vision that won't let you go? A problem you're positioned to understand better than anyone? Bring it.</p>
                        <a href="mailto:ipd@msm.edu" className="role-cta">Pitch it <ArrowRight size={14} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinMoonshot;
