import React from 'react';
import { ArrowRight } from 'lucide-react';
import './MoonshotsStyles.css';

const MoonshotsList: React.FC = () => {
    return (
        <section className="moonshots-section">
            <div className="moonshots-container">
                <span className="moonshots-label">Active Moonshots</span>
                <h1 className="moonshots-title">What we're building right now</h1>
                <p className="moonshots-intro">
                    Each of these started as a question someone at MSM couldn't stop asking. Now they're working solutions taking shape. Clinical insight paired with technical capability, tested against real-world needs. Every one is open for collaboration.
                </p>

                <div className="moonshots-grid">
                    {/* Moonshot 1 */}
                    <div className="moonshot-card">
                        <span className="moonshot-category">Medical Education</span>
                        <h3 className="moonshot-name">An operating system for how doctors learn</h3>
                        <p className="moonshot-desc">
                            What if medical education tracked mastery instead of time served? We're building a knowledge architecture mapping 366,000 medical concepts. It connects curriculum to competency to clinical readiness. AI-powered assessment that meets students where they are and shows faculty the whole picture.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=Med Ed OS Collaboration" className="moonshot-cta">
                            Collaborate <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Moonshot 2 */}
                    <div className="moonshot-card">
                        <span className="moonshot-category">Interprofessional Learning</span>
                        <h3 className="moonshot-name">AI teammates for clinical training</h3>
                        <p className="moonshot-desc">
                            Healthcare is a team sport. Connected Learning Experience uses AI avatars to give every student practice working across disciplines: complex clinical reasoning, team communication, high-stakes scenarios. At scale. Accessible to every learner.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=CLE Collaboration" className="moonshot-cta">
                            Collaborate <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Moonshot 3 */}
                    <div className="moonshot-card">
                        <span className="moonshot-category">Maternal Health</span>
                        <h3 className="moonshot-name">Technology for the mothers who need it most</h3>
                        <p className="moonshot-desc">
                            Black mothers in America die at 3x the rate of white mothers. With Columbia University, we're building tools that pair clinical evidence with community insight. Designed with and for the women and families most affected. Starting in the communities MSM has served for fifty years.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=WHI Collaboration" className="moonshot-cta">
                            Collaborate <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Moonshot 4 */}
                    <div className="moonshot-card">
                        <span className="moonshot-category">Institutional Platform</span>
                        <h3 className="moonshot-name">One coherent experience for all of MSM</h3>
                        <p className="moonshot-desc">
                            MSM One brings everything students, faculty, and staff need into a single, unified digital experience. Designed around how people actually work. One login. One place. Everything connected.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=MSM One App Collaboration" className="moonshot-cta">
                            Collaborate <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoonshotsList;
