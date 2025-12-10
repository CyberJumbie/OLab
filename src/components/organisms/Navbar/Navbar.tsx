import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../atoms/Button';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="logo">
                        IPD-O Lab
                    </Link>

                    <div className="desktop-menu">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/moonshots" className="nav-link">Moonshots</Link>
                        <Link to="/resources" className="nav-link">Resources</Link>
                        <Link to="/insights" className="nav-link">Insights</Link>
                        <Link to="/decks" className="nav-link">Decks</Link>


                        <Button href="mailto:ipd@msm.edu" variant="cta">
                            Book Office Hours
                        </Button>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-overlay"
                    >
                        <div className="mobile-nav-links">
                            <Link to="/" className="mobile-link">Home</Link>
                            <Link to="/about" className="mobile-link">About</Link>
                            <Link to="/services" className="mobile-link" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link to="/moonshots" className="mobile-link" onClick={() => setIsOpen(false)}>Moonshots</Link>
                            <Link to="/resources" className="mobile-link" onClick={() => setIsOpen(false)}>Resources</Link>
                            <Link to="/insights" className="mobile-link" onClick={() => setIsOpen(false)}>Insights</Link>
                            <Link
                                to="/decks"
                                className="font-mono text-xl tracking-widest hover:text-[var(--msm-gold)] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                DECKS
                            </Link>

                            <Button href="mailto:ipd@msm.edu" variant="primary" fullWidth style={{ marginTop: '2rem' }}>
                                Book Office Hours
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
