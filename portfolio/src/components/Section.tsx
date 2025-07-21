import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    backgroundColor: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, backgroundColor }) => {
    return (
        <section style={{ backgroundColor }}>
            <h2>{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};