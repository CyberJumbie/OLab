import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';

const Login: React.FC = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Get the redirect path from state, or default to home
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Check if we are in development mode (Vite) where API might not be available
            // In a real Vercel deployment, /api/login would exist.
            // For local dev without `vercel dev` verify logic:
            let success = false;

            if (import.meta.env.DEV && !window.location.host.includes('vercel')) {
                // Local dev fallback if API is not running
                console.warn('Development mode: Using mock password validation. Password is "admin"');
                if (password === 'admin') {
                    success = true;
                } else {
                    // Try fetch anyway in case proxy is set up or user is using vercel dev
                    try {
                        const res = await fetch('/api/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ password }),
                        });
                        if (res.ok) success = true;
                    } catch (err) {
                        // API failed in dev, stay with mock check result
                    }
                }
            } else {
                // Production: Use the API
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password }),
                });

                if (res.ok) {
                    success = true;
                } else {
                    const data = await res.json();
                    setError(data.error || 'Incorrect password');
                }
            }

            if (success) {
                localStorage.setItem('authenticated', 'true');
                navigate(from, { replace: true });
            } else if (!error) { // Don't overwrite API error
                if (import.meta.env.DEV) setError('Incorrect password (Dev: try "admin")');
                else setError('Incorrect password');
            }

        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            background: 'var(--bg-deep)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'var(--font-body)'
        }}>
            <div className="card" style={{
                maxWidth: '400px',
                width: '100%',
                background: 'rgba(255,255,255,0.03)',
                padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(184, 134, 11, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem auto',
                        border: '1px solid var(--msm-gold)'
                    }}>
                        <Lock size={24} color="var(--msm-gold)" />
                    </div>
                    <h2 className="text-gradient" style={{ fontSize: '1.5em', marginBottom: '0.5rem' }}>IPD-O Lab</h2>
                    <p style={{ opacity: 0.7, fontSize: '0.9em' }}>Please enter access password</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '6px',
                                color: 'white',
                                fontSize: '1em',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            className="focus:border-[var(--msm-gold)]"
                        />
                    </div>

                    {error && (
                        <div style={{
                            marginBottom: '1.5rem',
                            color: '#ff6b6b',
                            fontSize: '0.85em',
                            textAlign: 'center',
                            background: 'rgba(255,107,107,0.1)',
                            padding: '0.5rem',
                            borderRadius: '4px'
                        }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: 'var(--msm-gold)',
                            color: 'black',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: 'bold',
                            cursor: loading ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'opacity 0.2s'
                        }}
                        className="hover:opacity-90"
                    >
                        {loading ? 'Verifying...' : (
                            <>
                                Access System <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
