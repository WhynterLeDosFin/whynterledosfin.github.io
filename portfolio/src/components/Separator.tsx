import React from 'react';
import styles from './cssModules/Separator.module.scss';

interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical';
    thickness?: string;         // ex: '2px'
    length?: string;            // ex: '80%', '100px'
    color?: string;             // ex: '#FF0000' ou une variable CSS
    margin?: string;            // ex: '2rem auto'
}

export const Separator: React.FC<SeparatorProps> = ({
                                                        orientation = 'horizontal',
                                                        thickness = '2px',
                                                        length = '100%',
                                                        color = '',
                                                        margin = '1rem 0'
                                                    }) => {
    const style: React.CSSProperties =
        orientation === 'horizontal'
            ? {
                width: length,
                height: thickness,
                backgroundColor: color,
                margin: margin,
                transformOrigin: 'left', // pour que l'animation parte de la gauche
            }
            : {
                height: length,
                width: thickness,
                backgroundColor: color,
                margin: margin,
                transformOrigin: 'top', // pour que l'animation parte du haut
                animationName: styles.verticalSlideIn,
            };

    return <div className={styles.separator} style={style}></div>;
};