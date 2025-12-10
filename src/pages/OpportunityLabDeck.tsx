import React from 'react';
import RevealViewer from '../components/organisms/RevealViewer';
import OpportunityLab from '../decks/OpportunityLab.mdx';

const OpportunityLabDeck: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
            <RevealViewer>
                <OpportunityLab />
            </RevealViewer>
        </div>
    );
};

export default OpportunityLabDeck;
