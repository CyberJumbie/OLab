import React from 'react';
import RevealViewer from '../components/organisms/RevealViewer';
import WomensHealthHackathon from '../decks/WomensHealthHackathon.mdx';

const WomensHealthHackathonDeck: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
            <RevealViewer>
                <WomensHealthHackathon />
            </RevealViewer>
        </div>
    );
};

export default WomensHealthHackathonDeck;
