import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import { Link } from 'react-router-dom';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // Default base
import '../../index.css'; // Ensure global vars are available

interface RevealViewerProps {
    children: React.ReactNode;
}

const RevealViewer: React.FC<RevealViewerProps> = ({ children }) => {
    const deckDivRef = useRef<HTMLDivElement>(null);
    const revealRef = useRef<Reveal.Api | null>(null);

    useEffect(() => {
        if (deckDivRef.current && !revealRef.current) {
            revealRef.current = new Reveal(deckDivRef.current, {
                hash: true,
                width: 1280,
                height: 720,
                margin: 0.15,
                transition: 'slide', // none/fade/slide/convex/concave/zoom
            });
            revealRef.current.initialize();
        }
        return () => {
            try {
                if (revealRef.current) {
                    revealRef.current.destroy();
                    revealRef.current = null;
                }
                // Cleanup Reveal.js global effects
                document.documentElement.style.removeProperty('overflow');
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('height');
                document.documentElement.style.removeProperty('height');
                document.body.classList.remove('reveal-viewport');
            } catch (e) {
                console.warn('Reveal cleanup error', e);
            }
        };
    }, []);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

            {/* Control Bar */}
            <div style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 10000,
                display: 'flex',
                gap: '10px'
            }}>
                {/* Full Screen Toggle */}
                <button
                    onClick={toggleFullScreen}
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontFamily: 'var(--font-body)',
                        backdropFilter: 'blur(4px)'
                    }}
                    className="hover:bg-black hover:border-[var(--msm-gold)] transition-colors"
                >
                    Toggle Full Screen
                </button>

                {/* Back to Decks Button */}
                <Link
                    to="/decks"
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontFamily: 'var(--font-body)',
                        backdropFilter: 'blur(4px)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    className="hover:bg-black hover:border-[var(--msm-gold)] transition-colors"
                >
                    <span style={{ fontWeight: 'bold' }}>✕</span>
                </Link>
            </div>

            {/* Styles */}
            <style>{`
        .reveal {
            font-family: var(--font-body) !important;
            color: var(--text-primary) !important;
        }
        .reveal .slides > section {
            padding: 0 4rem !important;
            box-sizing: border-box;
        }
        .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
            font-family: var(--font-display) !important;
            text-transform: none !important;
            text-align: left;
        }
        .reveal p, .reveal li {
            text-align: left;
        }
        .reveal ul, .reveal ol {
            display: block;
            text-align: left;
        }
        .reveal section img {
            border: none !important;
            box-shadow: none !important;
            background: none !important;
        }
        /* Override Reveal's black theme background if set on section */
        .reveal-viewport {
            background-color: var(--bg-deep) !important;
        }
        
        /* Layout Utilities */
        .slides h1, .slides h2, .slides h3, .slides h4, .slides h5, .slides h6 {
            text-align: left !important;
        }
        .slides p, .slides li {
            text-align: left !important;
        }

        .text-gradient {
            background: linear-gradient(90deg, #FFFFFF 0%, var(--msm-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }
        
        .slide-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
            text-align: left;
        }
        
        .slide-grid-3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.5rem;
            align-items: start;
            text-align: left;
        }

        .slide-grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            align-items: start;
            text-align: left;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 1.5rem;
            backdrop-filter: blur(10px);
        }

        .stat-number {
            font-family: var(--font-display);
            font-size: 3em;
            color: var(--msm-gold);
            line-height: 1;
            margin-bottom: 0.5rem;
        }

        /* Table Styles for Slides */
        .reveal table {
            font-size: 0.6em;
            width: 100%;
            border-collapse: collapse;
        }
        .reveal th {
            text-align: left;
            border-bottom: 1px solid var(--msm-gold);
            padding: 0.5rem;
            color: var(--msm-gold);
        }
        .reveal td {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 0.5rem;
        }
        .reveal tr:last-child td {
            border-bottom: none;
        }

      `}</style>

            {/* Reveal JS Container */}
            <div className="reveal" ref={deckDivRef}>
                <div className="slides">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default RevealViewer;
