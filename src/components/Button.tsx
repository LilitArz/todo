import React from 'react';

interface ButtonProps {
    onClick: () => void;
    alt?: string;
    src?: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, alt, src, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            <img src={src} alt={alt}/>
        </button>
    );
};
