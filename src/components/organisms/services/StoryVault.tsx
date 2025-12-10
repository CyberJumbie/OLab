import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServicesStyles.css';

const StoryVault: React.FC = () => {
    return (
        <section id="story-vault" className="service-detail">
            <div className="services-container">
                <span className="services-label">Amplify Your Impact</span>
                <h2 className="detail-headline">Story Vault</h2>
                <p className="services-intro">
                    Breakthrough work is happening across MSM every day. It deserves to be seen. Story Vault produces content that helps your research, your practice, your impact reach the audiences that need it.
                </p>

                <div className="offer-grid">
                    <div className="offer-card">
                        <h3 className="offer-card-title">For Faculty & Researchers</h3>
                        <p className="offer-card-desc">
                            You focus on the work. We handle the storytelling: video, written features, social content designed to travel beyond academic circles and into the hands of people who need to see it.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=Story Vault Request" className="offer-meta group">
                            Get featured <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <div className="offer-card">
                        <h3 className="offer-card-title">For Students</h3>
                        <p className="offer-card-desc">
                            Start building your public portfolio now. Document your projects, share your perspective, demonstrate what you're capable of. Before you graduate.
                        </p>
                        <a href="mailto:ipd@msm.edu?subject=Student Story Submission" className="offer-meta group">
                            Submit your story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoryVault;
