import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Modal from "./Modal";
import styles from "./cssModules/Works.module.scss";
import react from "../assets/logo/react.png";
import ts from "../assets/logo/typescript.png";
import sass from "../assets/logo/sass.png";
import figma from "../assets/logo/figma.png";
import IntelliJ from "../assets/logo/IntelliJ.jpg";
import vuejs from "../assets/logo/vuejs.png";
import springLogo from "../assets/logo/spring.png";
import nextjs from "../assets/logo/nextjs.png";
import php from "../assets/logo/php.png";
import csharp from "../assets/logo/csharp.png";
import ccpp from "../assets/logo/ccpp.png";
import mongodb from "../assets/logo/mongodb.png";
import mariadb from "../assets/logo/mariadb.png";
import docker from "../assets/logo/docker.png";
import git from "../assets/logo/git.png";

export interface Technology {
    id: string;
    name: string;
    logo: string;
    opportunities: {
        id: string;
        name: string;
        projects: { id: string; title: string; description: string }[];
    }[];
}

const Works: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
    const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

    const technologies: Technology[] = [
        {
            id: "react",
            name: "React",
            logo: react,
            opportunities: [
                {
                    id: "portfolio",
                    name: "Portfolio numérique",
                    projects: [
                        {
                            id: "p1",
                            title: "Développement SPA",
                            description: "Conception et développement d’un portfolio en React avec architecture modulaire et composants réutilisables."
                        },
                        {
                            id: "p2",
                            title: "UX & animations",
                            description: "Implémentation d’animations dynamiques et optimisation du rendu pour une expérience fluide."
                        }
                    ]
                }
            ]
        },

        {
            id: "ts",
            name: "TypeScript",
            logo: ts,
            opportunities: [
                {
                    id: "dashboard",
                    name: "Dashboard (IAM, Toolbox, CheckValue)",
                    projects: [
                        {
                            id: "p1",
                            title: "Typage avancé des données",
                            description: "Structuration des modèles et sécurisation des flux de données provenant de micro-services."
                        },
                        {
                            id: "p2",
                            title: "Routes dynamiques",
                            description: "Gestion des paramètres dynamiques via VueRouter et typage strict des routes."
                        }
                    ]
                },
                {
                    id: "nextjs",
                    name: "SCPerfGrapher",
                    projects: [
                        {
                            id: "p3",
                            title: "Développement Next.js + TS",
                            description: "Développement fullstack avec typage complet des données MongoDB et API."
                        }
                    ]
                }
            ]
        },

        {
            id: "vuejs",
            name: "Vue.js",
            logo: vuejs,
            opportunities: [
                {
                    id: "frisk-demo",
                    name: "Frisk Demo",
                    projects: [
                        {
                            id: "p1",
                            title: "Développement Vue 2 → Vue 3",
                            description: "Migration complète de l’application et refactorisation des composants."
                        },
                        {
                            id: "p2",
                            title: "Intégration API",
                            description: "Développement de requêtes fetch, gestion des CORS et adaptation aux évolutions du micro-service."
                        },
                        {
                            id: "p3",
                            title: "Conception UI",
                            description: "Création de composants dynamiques avec Vuetify et exploitation de données socio-démographiques."
                        }
                    ]
                },
                {
                    id: "dashboard-vue",
                    name: "Dashboard interne",
                    projects: [
                        {
                            id: "p4",
                            title: "Composants génériques",
                            description: "Création de composants réutilisables et gestion d’état dynamique."
                        }
                    ]
                }
            ]
        },

        {
            id: "spring",
            name: "Spring",
            logo: springLogo,
            opportunities: [
                {
                    id: "backend-frisk",
                    name: "Backend FRISK",
                    projects: [
                        {
                            id: "p1",
                            title: "Tests unitaires & intégration",
                            description: "Développement de tests via JUnit, Mockito et AssertJ."
                        },
                        {
                            id: "p2",
                            title: "Couverture & qualité",
                            description: "Analyse de couverture avec JaCoCo et amélioration de la fiabilité du micro-service."
                        },
                        {
                            id: "p3",
                            title: "Nouvelles routes MVC",
                            description: "Ajout de routes API pour exploitation de données externes (Facematching, LinkedIn)."
                        }
                    ]
                },
                {
                    id: "portal-demo",
                    name: "Portail Demo",
                    projects: [
                        {
                            id: "p4",
                            title: "Backend MVC",
                            description: "Développement d’un backend structuré selon le pattern MVC."
                        }
                    ]
                }
            ]
        },

        {
            id: "nextjs",
            name: "Next.js",
            logo: nextjs,
            opportunities: [
                {
                    id: "scperf",
                    name: "SCPerfGrapher",
                    projects: [
                        {
                            id: "p1",
                            title: "Application fullstack",
                            description: "Développement d’un outil de visualisation de performance avec SSR."
                        },
                        {
                            id: "p2",
                            title: "Déploiement Vercel",
                            description: "Mise en production et gestion d’environnement."
                        }
                    ]
                }
            ]
        },

        {
            id: "mongodb",
            name: "MongoDB",
            logo: mongodb,
            opportunities: [
                {
                    id: "scperf-db",
                    name: "SCPerfGrapher",
                    projects: [
                        {
                            id: "p1",
                            title: "Conception base NoSQL",
                            description: "Modélisation et création d’une base MongoDB adaptée aux besoins métier."
                        }
                    ]
                }
            ]
        },

        {
            id: "docker",
            name: "Docker",
            logo: docker,
            opportunities: [
                {
                    id: "docker-scperf",
                    name: "SCPerfGrapher",
                    projects: [
                        {
                            id: "p1",
                            title: "Dockerisation",
                            description: "Containerisation de l’application Next.js et de la base MongoDB."
                        }
                    ]
                }
            ]
        },

        {
            id: "sass",
            name: "Sass",
            logo: sass,
            opportunities: [
                {
                    id: "ui-projects",
                    name: "Dashboards & Portail",
                    projects: [
                        {
                            id: "p1",
                            title: "Architecture CSS scalable",
                            description: "Structuration modulaire des styles et respect des principes mobile-first."
                        }
                    ]
                }
            ]
        },

        { id: "figma", name: "Figma", logo: figma, opportunities: [] },
        { id: "intellij", name: "IntelliJ", logo: IntelliJ, opportunities: [] },
        { id: "php", name: "PHP", logo: php, opportunities: [] },
        { id: "csharp", name: "C#", logo: csharp, opportunities: [] },
        { id: "ccpp", name: "C / C++", logo: ccpp, opportunities: [] },
        { id: "mariadb", name: "MariaDB", logo: mariadb, opportunities: [] },
        { id: "git", name: "Git", logo: git, opportunities: [] }
    ];

    return (
        <div id="works" className={styles.works}>
            <Carrousel items={technologies} onSelect={setSelectedTech} />
            <Modal
                isOpen={!!selectedTech}
                tech={selectedTech}
                selectedOpportunity={selectedOpportunity}
                onSelectOpportunity={setSelectedOpportunity}
                onClose={() => {
                    setSelectedTech(null);
                    setSelectedOpportunity(null);
                }}
            />
        </div>
    );
};

export default Works;
