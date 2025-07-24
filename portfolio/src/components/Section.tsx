import React from 'react';
import styles from './cssModules/Section.module.scss';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    background: string;
    fontColor: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, background, fontColor }) => {
    return (
        <section style={{ background, color: fontColor }}>
            <p className={styles.sectionTitle}>{title}</p>
            <div className="sectionContent">
                {children}
            </div>
        </section>
    );
};