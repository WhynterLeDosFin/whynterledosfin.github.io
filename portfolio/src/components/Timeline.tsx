import React, { useEffect, useRef } from 'react';
import styles from './cssModules/Timeline.module.scss';

interface TimelineItem {
    title: string;
    description: string;
    image: string;
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
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <span className={styles.point}></span>
                    </div>
                );
            })}
        </div>
    );
};
