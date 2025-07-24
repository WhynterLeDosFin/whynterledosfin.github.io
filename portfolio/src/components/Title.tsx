import React from 'react';
import styles from './cssModules/Title.module.scss';

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};