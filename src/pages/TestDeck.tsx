import React from 'react';
import RevealViewer from '../components/organisms/RevealViewer';

const TestDeck: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <RevealViewer>
                <section>
                    <h1>Slide 1</h1>
                    <p>This is the first slide of the test deck.</p>
                </section>
                <section>
                    <h2>Slide 2</h2>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </section>
            </RevealViewer>
        </div>
    );
};

export default TestDeck;
