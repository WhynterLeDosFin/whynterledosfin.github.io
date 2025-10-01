import React, { useEffect, useRef, useState } from "react";
import styles from "./cssModules/Choices.module.scss";
import react from "../assets/logo/react.png";
import ts from "../assets/logo/typescript.png";
import sass from "../assets/logo/sass.png";

type Tech = {
    id: string;
    name: string;
    why: string;
    presentation: string;
    logo: string;
};

const techs: Tech[] = [
    {
        id: "react",
        name: "React",
        presentation:
            "React est une bibliothèque JavaScript orientée composants, idéale pour construire des interfaces utilisateur dynamiques et modulaires. Dans ce projet, elle structure l’ensemble des sections en composants réutilisables, facilitant l’organisation et la maintenance du code. Elle est alliée à des librairies modernes comme Framer Motion pour l’animation, shadcn/ui pour les composants UI, et lucide-react pour les icônes, afin d’enrichir l’expérience utilisateur. L’architecture suit une convention de single-page application avec une navigation fluide entre les sections.",
        why: "Le choix de React était un choix personnel de par ma volonté à construire une réelle expérience dans la développement avec cette librairie. J'ai énormément développé sous le framework VueJS dans ces version 2 et 3 et j'ai donc voulu voir de mes yeux ce que le développement sous React dans sa version native avait à offrir !",
        logo: react,
    },
    {
        id: "sass",
        name: "Sass",
        presentation:
            "Sass est un préprocesseur CSS qui apporte des fonctionnalités avancées comme les variables, l’imbrication et la modularisation des styles. Dans ce projet, il structure la feuille de style via des modules SCSS (CSS Modules), garantissant un scoping localisé et évitant les conflits entre composants. Les variables et mixins définies globalement assurent une cohérence visuelle, tandis que les animations et dégradés de couleurs profitent de la puissance de Sass pour rester maintenables et évolutifs.",
        why: "J'ai décidé d'utiliser Sass pour sa modularité. J'avais besoin d'avoir une façon propre de dissocier les aspects visuels et fonctionnels de mes composants tout en gardant cette simplicité dans l'import. Ne pas avoir opté pour un framework comme Tailwind est volontaire, j'ai préféré la cohérence avec mes idées plutôt que la simplicité pour le rendu.",
        logo: sass,
    },
    {
        id: "ts",
        name: "TypeScript",
        presentation:
            "TypeScript est une surcouche typée de JavaScript permettant de renforcer la robustesse et la lisibilité du code. Son intégration garantit un typage statique des composants et des propriétés, limitant les erreurs et améliorant l’autocomplétion dans l’environnement de développement. Il est utilisé en combinaison avec React pour définir des types stricts sur les composants fonctionnels et leurs props, et s’appuie sur des conventions de code claires (interfaces, types génériques, stricte séparation des modèles de données).",
        why: "J'ai toujours préféré Typescript à sa version non typée. Probablement pour rester stricte avec mon propre code et la maintenabilité de ce dernier !",
        logo: ts,
    },
];

const gradients = {
    sass: (
        <radialGradient id="grad-sass" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(205, 102, 154, 1)" />
            <stop offset="10%" stopColor="rgba(205, 102, 154, 1)" />
            <stop offset="50%" stopColor="rgba(0, 120, 207, 1)" />
            <stop offset="100%" stopColor="rgba(0, 218, 252, 1)" />
        </radialGradient>
    ),
    react: (
        <linearGradient id="grad-react" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 218, 252, 1)" />
            <stop offset="10%" stopColor="rgba(0, 218, 252, 1)" />
            <stop offset="55%" stopColor="rgba(205, 102, 154, 1)" />
            <stop offset="100%" stopColor="rgba(0, 120, 207, 1)" />
        </linearGradient>
    ),
    ts: (
        <linearGradient id="grad-ts" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 218, 252, 1)" />
            <stop offset="45%" stopColor="rgba(205, 102, 154, 1)" />
            <stop offset="90%" stopColor="rgba(0, 120, 207, 1)" />
            <stop offset="100%" stopColor="rgba(0, 120, 207, 1)" />
        </linearGradient>
    ),
};

const Choices: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
    const [mountedTech, setMountedTech] = useState<Tech | null>(null);
    const [displayedTech, setDisplayedTech] = useState<Tech | null>(null);

    const infoRef = useRef<HTMLDivElement | null>(null);
    const techInnerRef = useRef<HTMLDivElement | null>(null);
    const prevMountedRef = useRef<boolean>(false);

    useEffect(() => {
        const el = infoRef.current;
        if (!el) return;

        const TRANS = "max-height 600ms ease, opacity 450ms ease";
        el.style.overflow = "hidden";
        el.style.transition = TRANS;

        if (mountedTech) {
            setDisplayedTech(mountedTech);

            if (!prevMountedRef.current) {
                el.style.maxHeight = "0px";
                el.style.opacity = "0";
                requestAnimationFrame(() => {
                    const target = el.scrollHeight;
                    el.style.maxHeight = `${target}px`;
                    el.style.opacity = "1";
                });

                const onEnd = (ev: TransitionEvent) => {
                    if (ev.propertyName === "max-height") {
                        el.style.maxHeight = "none";
                        el.removeEventListener("transitionend", onEnd as EventListener);
                    }
                };
                el.addEventListener("transitionend", onEnd as EventListener);
            } else {
                el.style.transition = "none";
                el.style.maxHeight = "none";
                el.style.opacity = "1";
                requestAnimationFrame(() => {
                    el.style.transition = TRANS;
                });
            }
        } else {
            el.style.transition = TRANS;
            const current = el.scrollHeight;
            el.style.maxHeight = `${current}px`;
            void el.offsetHeight;
            el.style.opacity = "0";
            el.style.maxHeight = "0px";

            const onEnd = (ev: TransitionEvent) => {
                if (ev.propertyName === "max-height") {
                    setDisplayedTech(null);
                    el.removeEventListener("transitionend", onEnd as EventListener);
                }
            };
            el.addEventListener("transitionend", onEnd as EventListener);
        }

        prevMountedRef.current = !!mountedTech;
    }, [mountedTech]);

    useEffect(() => {
        const inner = techInnerRef.current;
        if (!inner) return;
        inner.style.transition = "opacity 200ms ease";
        inner.style.opacity = "0";
        requestAnimationFrame(() => {
            inner.style.opacity = "1";
        });
    }, [displayedTech]);

    const handleClick = (tech: Tech) => {
        if (selectedTech?.id === tech.id) {
            setSelectedTech(null);
            setMountedTech(null);
            return;
        }

        setSelectedTech(tech);
        setMountedTech(tech);
    };

    return (
        <div className={styles.choices}>
            <div className={styles.wrapper}>
                <svg
                    className={`${styles.fluidMask} ${mountedTech ? styles.open : styles.close}`}
                    viewBox="0 0 1500 600"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden={!mountedTech}
                >
                    <defs>
                        <clipPath id="blobClip">
                            <path d="M 233.567 481.833 C 278.954 373.6 61.5 524.12 26.8865 508.999 C -7.72703 493.878 -9.17035 410.978 26.8864 324.766 C 62.7154 239.098 165.453 134.435 248.583 149.449 C 278.702 154.889 273.118 152.425 296 169.499 C 305.602 177.26 309.095 193.109 320.155 198.348 C 434.171 252.355 732.5 156.813 753.386 47.2653 C 774.273 -62.2822 967.5 43 998.5 149.499 C 1029.5 255.999 1119 154.049 1133.5 217.549 C 1148 281.049 1502 47.2653 1436 177.999 C 1370 308.732 1432.22 364.742 1337.5 429.999 C 1242.78 495.255 1100.5 564.499 1133.5 382.499 C 1166.5 200.499 613.5 570.499 565 429.999 C 516.5 289.499 515.677 429.999 454.5 429.999 C 393.323 429.999 464.168 503.635 430 514.499 C 376.211 531.6 188.181 590.066 233.567 481.833 Z" />
                        </clipPath>

                        {gradients.sass}
                        {gradients.react}
                        {gradients.ts}
                    </defs>

                    {techs.map((t) => (
                        <rect
                            key={t.id}
                            width="100%"
                            height="100%"
                            clipPath="url(#blobClip)"
                            fill={`url(#grad-${t.id})`}
                            className={`${styles.gradientRect} ${mountedTech?.id === t.id ? styles.visible : ""}`}
                        />
                    ))}
                </svg>

                <div className={styles.bubblesWrapper}>
                    {techs.map((tech) => (
                        <div
                            key={tech.id}
                            className={`${styles.bubble} ${selectedTech?.id === tech.id ? styles.active : ""}`}
                            onClick={() => handleClick(tech)}
                            role="button"
                            aria-pressed={selectedTech?.id === tech.id}
                        >
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div ref={infoRef} className={styles.techInfo} aria-hidden={!displayedTech}>
                <div ref={techInnerRef}>
                    {displayedTech ? (
                        <>
                            <h1>{displayedTech.name}</h1>
                            <h3>Présentation</h3>
                            <p>{displayedTech.presentation}</p>
                            <h3>Pourquoi ?</h3>
                            <p>{displayedTech.why}</p>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Choices;
