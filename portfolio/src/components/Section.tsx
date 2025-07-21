import React from 'react';
import styles from './cssModules/Section.module.scss';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    backgroundColor: string;
    fontColor: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, backgroundColor, fontColor }) => {
    return (
        <section style={{ backgroundColor, color: fontColor }}>
            <p className={styles.sectionTitle}>{title}</p>
            <div className="sectionContent">
                {children}
            </div>
        </section>
    );
};