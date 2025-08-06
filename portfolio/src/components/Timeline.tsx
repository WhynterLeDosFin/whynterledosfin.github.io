import React, { useEffect, useRef } from 'react';
import styles from './cssModules/Timeline.module.scss';

interface TimelineItem {
    diploma: string;
    school: string;
    description: string;
    image: string;
    date: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = timelineRef.current?.querySelectorAll(`.${styles.item}`);
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className={styles.timeline} ref={timelineRef}>
            {items.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
                    >
                        <div className={styles.content}>
                            <p className={styles.diploma}>{item.diploma}</p>
                            <p className={styles.school}>{item.school}</p>
                            <p className={styles.date}>{item.date}</p>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.diploma} />
                        </div>
                        <span className={styles.point}></span>
                    </div>
                );
            })}
        </div>
    );
};
