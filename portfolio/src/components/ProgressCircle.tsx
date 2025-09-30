import React, { useEffect, useState } from "react";
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

    useEffect(() => {
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
    }, [progress, duration]);

    return (
        <div className={`${styles.wrapper} ${className}`}>
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
