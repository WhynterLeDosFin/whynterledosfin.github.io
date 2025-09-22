import React, { useState } from "react";
import styles from "./cssModules/Choices.module.scss";
import react from '../assets/logo/react.png';
import ts from '../assets/logo/typescript.png';
import sass from '../assets/logo/sass.png';

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

const Choices: React.FC = () => {
    const [activeTech, setActiveTech] = useState<Tech | null>(null);

    return (
        <div className={styles.choices}>
            {/* Zone bulles + flaque */}
            <div
                className={`${styles.bubblesWrapper} ${
                    activeTech ? styles.expanded : ""
                }`}
            >
                {techs.map((tech) => (
                    <div
                        key={tech.id}
                        className={styles.bubble}
                        onClick={() => setActiveTech(tech)}
                    >
                        <img src={tech.logo} alt={tech.name} />
                    </div>
                ))}
            </div>

            {/* Zone info techno */}
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
