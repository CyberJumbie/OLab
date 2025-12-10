import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'cta' | 'ghost';
    to?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    to,
    href,
    onClick,
    className = '',
    type = 'button',
    fullWidth = false,
    style
}) => {
    const baseClass = `btn btn-${variant} ${fullWidth ? 'btn-block' : ''} ${className}`;

    if (to) {
        return <Link to={to} className={baseClass} onClick={onClick} style={style}>{children}</Link>;
    }

    if (href) {
        return <a href={href} className={baseClass} onClick={onClick} style={style}>{children}</a>;
    }

    return (
        <button type={type} className={baseClass} onClick={onClick} style={style}>
            {children}
        </button>
    );
};
