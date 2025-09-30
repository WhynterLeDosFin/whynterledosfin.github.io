import React from "react";
import styles from "./cssModules/ProgressIndicator.module.scss";
import ProgressCircle from "./ProgressCircle";

interface ProgressIndicatorProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
    duration?: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
                                                                 progress,
                                                                 size,
                                                                 strokeWidth = 12,
                                                                 duration = 1500,
                                                             }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.indicator}>
                <div className={styles.circleContainer}>
                    <ProgressCircle progress={progress} strokeWidth={strokeWidth} duration={duration} />
                </div>
                <h2>Progression actuelle du site</h2>
            </div>
        </div>

    );
};

export default ProgressIndicator;
