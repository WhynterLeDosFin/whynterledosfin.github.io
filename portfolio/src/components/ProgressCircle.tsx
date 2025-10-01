import React, { useEffect, useRef, useState } from "react";
import styles from "./cssModules/ProgressCircle.module.scss";

interface ProgressCircleProps {
    progress: number;
    strokeWidth?: number;
    duration?: number;
    className?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
                                                           progress,
                                                           strokeWidth = 12,
                                                           duration = 1000,
                                                           className = "",
                                                       }) => {
    const [displayed, setDisplayed] = useState(0);
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const runAnimation = () => {
        let start = 0;
        const step = () => {
            start += 16;
            const nextValue = Math.min(
                Math.round((progress * start) / duration),
                progress
            );
            setDisplayed(nextValue);
            setAnimatedProgress(nextValue);
            if (nextValue < progress) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        runAnimation(); // 🔄 relance à chaque apparition
                    } else {
                        // reset quand on sort de la zone (facultatif)
                        setDisplayed(0);
                        setAnimatedProgress(0);
                    }
                });
            },
            { threshold: 0.4 }
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => observer.disconnect();
    }, [progress, duration]);

    return (
        <div ref={wrapperRef} className={`${styles.wrapper} ${className}`}>
            <div
                className={styles.circle}
                style={
                    {
                        "--progress": `${animatedProgress}%`,
                        "--stroke": `${strokeWidth}px`,
                    } as React.CSSProperties
                }
            >
                <div className={styles.label}>{displayed}%</div>
            </div>
        </div>
    );
};

export default ProgressCircle;
