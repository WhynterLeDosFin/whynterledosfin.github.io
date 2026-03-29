import React, {useEffect, useRef, useState} from 'react';
import styles from './cssModules/Section.module.scss';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    background: string;
    fontColor: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, background, fontColor }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);
    return (
        <section className={styles.section} style={{ background, color: fontColor }}>
            <p ref={titleRef} className={`${styles.sectionTitle} ${isVisible ? styles.animateIn : ''}`}>
                {title}
            </p>
            <div className="sectionContent">
                {children}
            </div>
        </section>
    );
};