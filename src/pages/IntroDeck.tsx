import React from 'react';
import RevealViewer from '../components/organisms/RevealViewer';
import MainDeck from '../decks/MainDeck.mdx';

const IntroDeck: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
            <RevealViewer>
                <MainDeck />
            </RevealViewer>
        </div>
    );
};

export default IntroDeck;
