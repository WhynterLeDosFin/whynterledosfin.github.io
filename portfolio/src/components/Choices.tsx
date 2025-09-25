import React, { useState } from "react";
import styles from "./cssModules/Choices.module.scss";
import react from "../assets/logo/react.png";
import ts from "../assets/logo/typescript.png";
import sass from "../assets/logo/sass.png";

type Tech = {
    id: string;
    name: string;
    description: string;
    logo: string;
};

const techs: Tech[] = [
    {
        id: "react",
        name: "React",
        description:
            "Bibliothèque JavaScript moderne pour construire des interfaces utilisateur dynamiques et réactives.",
        logo: react,
    },
    {
        id: "sass",
        name: "Sass",
        description:
            "Préprocesseur CSS permettant d’écrire du style plus maintenable et modulaire.",
        logo: sass,
    },
    {
        id: "ts",
        name: "TypeScript",
        description:
            "Surcouche de JavaScript ajoutant un typage statique pour plus de robustesse.",
        logo: ts,
    },
];

const gradients: Record<string, { offset: string; color: string }[]> = {
    ts: [
        { offset: "0%", color: "rgba(0, 120, 207, 1)" },
        { offset: "5%", color: "rgba(0, 120, 207, 1)" },
        { offset: "50%", color: "rgba(0, 218, 252, 1)" },
        { offset: "100%", color: "rgba(205, 102, 154, 1)" },
    ],
    sass: [
        { offset: "0%", color: "rgba(205, 102, 154, 1)" },
        { offset: "5%", color: "rgba(205, 102, 154, 1)" },
        { offset: "50%", color: "rgba(0, 120, 207, 1)" },
        { offset: "100%", color: "rgba(0, 218, 252, 1)" },
    ],
    react: [
        { offset: "0%", color: "rgba(0, 218, 252, 1)" },
        { offset: "5%", color: "rgba(0, 218, 252, 1)" },
        { offset: "50%", color: "rgba(0, 120, 207, 1)" },
        { offset: "100%", color: "rgba(205, 102, 154, 1)" },
    ],
};

const Choices: React.FC = () => {
    const [activeTech, setActiveTech] = useState<Tech | null>(null);

    const handleClick = (tech: Tech) => {
        if (activeTech?.id === tech.id) {
            setActiveTech(null); // désélection
        } else {
            setActiveTech(tech);
        }
    };

    return (
        <div className={styles.choices}>
            <div className={styles.wrapper}>
                <svg
                    className={`${styles.fluidMask} ${
                        activeTech ? styles.open : styles.close
                    }`}
                    viewBox="0 0 1500 600"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <clipPath id="blobClip">
                            <path d="M 233.567 481.833 C 278.954 373.6 61.5 524.12 26.8865 508.999 C -7.72703 493.878 -9.17035 410.978 26.8864 324.766 C 62.7154 239.098 165.453 134.435 248.583 149.449 C 278.702 154.889 273.118 152.425 296 169.499 C 305.602 177.26 309.095 193.109 320.155 198.348 C 434.171 252.355 732.5 156.813 753.386 47.2653 C 774.273 -62.2822 967.5 43 998.5 149.499 C 1029.5 255.999 1119 154.049 1133.5 217.549 C 1148 281.049 1502 47.2653 1436 177.999 C 1370 308.732 1432.22 364.742 1337.5 429.999 C 1242.78 495.255 1100.5 564.499 1133.5 382.499 C 1166.5 200.499 613.5 570.499 565 429.999 C 516.5 289.499 515.677 429.999 454.5 429.999 C 393.323 429.999 464.168 503.635 430 514.499 C 376.211 531.6 188.181 590.066 233.567 481.833 Z" />
                        </clipPath>

                        {/* On génère un gradient pour CHAQUE techno */}
                        {Object.entries(gradients).map(([id, stops]) => (
                            <radialGradient
                                id={`grad-${id}`}
                                key={id}
                                cx="50%"
                                cy="50%"
                                r="70%"
                                fx="50%"
                                fy="50%"
                            >
                                {stops.map((stop, idx) => (
                                    <stop key={idx} offset={stop.offset} stopColor={stop.color} />
                                ))}
                            </radialGradient>
                        ))}
                    </defs>

                    {Object.keys(gradients).map((id) => (
                        <rect
                            key={id}
                            width="100%"
                            height="100%"
                            clipPath="url(#blobClip)"
                            fill={`url(#grad-${id})`}
                            className={`${styles.gradientRect} ${
                                activeTech?.id === id ? styles.visible : ""
                            }`}
                        />
                    ))}
                </svg>
                <div className={styles.bubblesWrapper}>
                    {techs.map((tech) => (
                        <div
                            key={tech.id}
                            className={`${styles.bubble} ${
                                activeTech?.id === tech.id ? styles.active : ""
                            }`}
                            onClick={() => handleClick(tech)}
                        >
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>

            {activeTech && (
                <div className={styles.techInfo}>
                    <h3>{activeTech.name}</h3>
                    <p>{activeTech.description}</p>
                </div>
            )}
        </div>
    );
};

export default Choices;