import React from 'react';
import RevealViewer from '../components/organisms/RevealViewer';
import OpportunityWorkshops from '../decks/OpportunityWorkshops.mdx';

const OpportunityWorkshopsDeck: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
            <RevealViewer>
                <OpportunityWorkshops />
            </RevealViewer>
        </div>
    );
};

export default OpportunityWorkshopsDeck;
