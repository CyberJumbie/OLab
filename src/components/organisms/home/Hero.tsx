import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '../../atoms/Button';
import MicroscopeBackground from './MicroscopeBackground';
import './Hero.css';

const words = ["healthcare", "research", "medical education", "life sciences", "community health"];

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typing effect logic
    useEffect(() => {
        if (index >= words.length) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 2000);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Blink cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <section className="hero-section">
            <div className="hero-bg">
                <MicroscopeBackground />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-label"
                >
                    Morehouse School of Medicine
                </motion.p>

                <h1 className="hero-title">
                    The future of <br className="break-mobile" />
                    <span className="hero-typing">
                        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                    </span>
                    <br /> won't build itself
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-description"
                >
                    You see something that could work better. A clinical workflow ready to improve. A curriculum opportunity waiting to be built. A community need that the right tools could finally reach. The IPD-O Lab pairs what you know with what's now possible. Together, we build what's next.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="hero-actions"
                >
                    <Button to="/services" variant="primary">
                        Start Here
                    </Button>
                    <Button href="mailto:ipd@msm.edu" variant="outline">
                        Book Office Hours
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            >
                <span className="scroll-text">Scroll</span>
                <ArrowDown className="bounce" size={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
