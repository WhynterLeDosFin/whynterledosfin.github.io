import React from 'react';
import styles from './cssModules/Separator.module.scss';

interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical';
    thickness?: string;
    length?: string;
    color?: string;
    margin?: string;
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
                transformOrigin: 'left',
            }
            : {
                height: length,
                width: thickness,
                backgroundColor: color,
                margin: margin,
                transformOrigin: 'top',
                animationName: styles.verticalSlideIn,
            };

    return <div className={styles.separator} style={style}></div>;
};