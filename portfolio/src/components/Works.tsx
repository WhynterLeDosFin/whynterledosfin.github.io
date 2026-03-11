import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Modal from "./Modal";
import styles from "./cssModules/Works.module.scss";
import react from "../assets/logo/react.png";
import ts from "../assets/logo/typescript.png";
import sass from "../assets/logo/sass.png";
import figma from "../assets/logo/figma.png";
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
                        id: "react-personnel",
                        name: "Personnel",
                        projects: [
                            {
                                id: "p1",
                                title: "Portfolio numérique",
                                description: "Développement d’une single page application à l'architecture modulaire et de composants réutilisables et génériques. Mise en place d’une navigation fluide sans rechargement et gestion du state. Implémentation d'animations et d'interactions rendant le parcours utilisateur dynamique. Attention particulière portée à l’UX et à la performance du rendu."
                            }
                        ]
                    },
                    {
                        id: "react-academique",
                        name: "Académique",
                        projects: [
                            {
                                id: "p2",
                                title: "Projet de conception produit (ISEN)",
                                description: "Conception et réalisation d'un easter egg en SCSS/TS (ampoule cliquable révélant un texte). Développement des blocs de présentation de notre produit avec Typescript, React et Sass (clef USB à sécurité digitale)."
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
                        id: "vue-meelo",
                        name: "Meelo",
                        projects: [
                            {
                                id: "p1",
                                title: "Frisk Demo",
                                description: "Enquête sur le format de la donnée retourné par l’API. Conception de maquettes quant au layer de la future application et de formats visuels pour la donnée à exploiter. Initialisation d’un projet VueJs2. Sélection des bibliothèques nécessaires à l’application (VueRouter, VueCookies, i18n, lodash...). Développement du formulaire permettant l’identification des profils étudiés. Développement des composants du formulaire et de la page résultat avec Vuetify et Sass. Rédaction des requêtes avec fetch. Organisation et présentation de réunions de conception/validation avec la direction et les équipes commerciales quant à l’identité visuelle de l’outil. Exploitation de donnée socio-démographiques issue de l’api geogouv. Migration vers VueJs3 et maintient en condition opérationnelle de l'application (refactorisation, remplacement de librairies dépréciées, recueil de feedbacks issus des démonstrations). Correctif de requête (ajout/suppression de paramètre, gestion des CORS, modification de route)."
                            },
                            {
                                id: "p2",
                                title: "Portail demo",
                                description: "Pair designing sur les maquettes mobile et moniteur via Figma. Développement de l’application avec TypeScript ,VueJs 3 et Sass. Gestion et administration du dépôt GitHub. Gestion des traductions de l’application avec i18n. Réunion intermédiaire de présentation et de recadrage avec l’équipe commerciale et la direction. Développement de composants innovants et permettant d'interpréter les données des APIs. Présentation finale aux collaborateurs et investisseurs."
                            },
                            {
                                id: "p3",
                                title: "Dashboards internes (IAM, Toolbox, CheckValue)",
                                description: "Développement de trois dashboards dynamiques permettant la gestion d'utilisateur, de traductions, de template de réponse automatisées et des différents services avec TypeScript, VueJs 3 et Sass. Création de composants génériques réutilisables, gestion d’état et routage dynamique via VueRouter. Corrections fonctionnelles, visuelles et amélioration continue suite aux retours utilisateurs et collaborateurs. Formations des équipes aux outils développés."
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
                        id: "spring-meelo",
                        name: "Meelo",
                        projects: [
                            {
                                id: "p1",
                                title: "Backend FRISK",
                                description: "Étude de l’existant (micro-service Java 11 non testé dont l’auteur a quitté l’entreprise). Mock de donnée via Mockito. Développement de test unitaires via JUnit. Mise en place des tests d’intégrations avec AssertJ notamment. Test et rapport de couverture via JaCoCo. Mise en production avec le DevOps. Ajout de nouvelles routes API selon le modèle MVC afin d’exploiter des données de Facematching, LinkedIn et un enrichissement des données socio-demographique existantes."
                            },
                            {
                                id: "p2",
                                title: "Portail Demo",
                                description: "Développement d’un micro-service suivant le modèle MVC avec Spring. Hiérarchisation des accès et de la sécurité sur les endpoints."
                            },
                            {
                                id: "p3",
                                title: "Interventions sur des micro-services divers",
                                description: "Étude des endpoints et des normes de sécurité auxquels ils sont soumis. Ajout et modification de règle de sécurité ou d'exigence hiérarchique sur certaines routes et leurs attentes envers le Json Web Token (JWT). Suppression de règles obsolètes."
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
                        id: "next-scperf",
                        name: "Fishing Cactus",
                        projects: [
                            {
                                id: "p1",
                                title: "SummerCamp PerfGrapher",
                                description: "Cadrage du besoin avec le CTO et l'équipe de développement du jeu. Étude de l'API et test avec postman. Conception et développement d’un outil fullstack avec SSR, API Routes et connexion MongoDB. Mock des données à des fins de présentation et de test des features développés. Dockerisation de l'application. Structuration complète des flux de données et mise en production via Vercel."
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
                        id: "ts-meelo",
                        name: "Meelo",
                        projects: [
                            {
                                id: "p1",
                                title: "Dashboards & outils internes",
                                description: "Typage avancé des modèles et sécurisation des flux issus de micro-services. Structuration forte du code front."
                            }
                        ]
                    },
                    {
                        id: "ts-scperf",
                        name: "Fishing Cactus",
                        projects: [
                            {
                                id: "p2",
                                title: "SCPerfGrapher",
                                description: "Fiabilisation de l’architecture applicative via un typage complet des données issue du backend et de la base noSql MongoDB."
                            }
                        ]
                    },
                    {
                        id: "ts-personnel",
                        name: "Personnel",
                        projects: [
                            {
                                id: "p3",
                                title: "Portfolio",
                                description: "Définition d’interfaces et structuration stricte des composants React."
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
                        id: "mongo-scperf",
                        name: "Fishing Cactus",
                        projects: [
                            {
                                id: "p1",
                                title: "Modélisation NoSQL",
                                description: "Conception et structuration d’une base MongoDB adaptée aux besoins de visualisation de performance. Stockage de capture d'écran issue d'un run du jeu sur un devkit."
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
                        name: "Fishing Cactus",
                        projects: [
                            {
                                id: "p1",
                                title: "Containerisation de l'outil de tracking",
                                description: "Dockerisation de l’application Next.js et de la base MongoDB pour faciliter le déploiement et la portabilité."
                            }
                        ]
                    },
                    {
                        id: "docker-personnel",
                        name: "Personnel & Pro",
                        projects: [
                            {
                                id: "p2",
                                title: "Containerisation",
                                description: "Je dockerise couramment mes projets afin de généraliser certains paramètres entre l'environnement de production et mon environnement de développement. Cela me permet d'éviter certaines tâches redondantes et festidieuses avant la MEP. J'utilise également docker-compose afin de centraliser/grouper le lancement de mes conteneurs."
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
                        id: "sass-global",
                        name: "Professionnel & Personnel",
                        projects: [
                            {
                                id: "p1",
                                title: "Architecture visuelle & thématisation",
                                description: "Structuration modulaire des styles, mise en place d’un design system cohérent et respect des principes mobile-first. Travail approfondi sur la hiérarchie visuelle et les animations CSS. Variabilisation de certaines valeurs redondantes."
                            }
                        ]
                    }
                ]
            },
            {
                id: "php",
                name: "PHP",
                logo: php,
                opportunities: [
                    {
                        id: "php-calc",
                        name: "CALC Architectes",
                        projects: [
                            {
                                id: "p1",
                                title: "Refonte site vitrine",
                                description: "Refonte du site vitrine avec PhP. Ajout d'une fonctionnalité d'ajout de visuels au sein de la partie administrateur. Gestion des visuels des réalisations du cabinet (à but promotionnel) au sein de la base."
                            }
                        ]
                    }
                ]
            },
            {
                id: "ccpp",
                name: "C / C++",
                logo: ccpp,
                opportunities: [
                    {
                        id: "ccpp-academique",
                        name: "Académique",
                        projects: [
                            {
                                id: "p1",
                                title: "Fondations algorithmiques & allocation mémoire",
                                description: "Passage de la logique algorithmique au développement avec C. Découverte et maîtrise de l'allocation mémoire grâce aux pointeurs notamment. Apprentissage de la programmation orientée objet (POO) avec C++."
                            },
                            {
                                id: "p2",
                                title: "Application de gestion d'éclairage d'un théâtre",
                                description: "Conception des modèles de données et des fonctionnalités de séquençage. Prise en main du matériel à destination du théâtre et de sa documentation. Réalisations de diagrammes UML (classes, use case, séquence). Mise en place et gestion de la base de donnée MariaDB. Développement des incréments présents dans notre roadmap."
                            }
                        ]
                    }
                ]
            },
            {
                id: "mariadb",
                name: "MariaDB",
                logo: mariadb,
                opportunities: [
                    {
                        id: "mariadb-academique",
                        name: "Académique",
                        projects: [
                            {
                                id: "p1",
                                title: "Base de données application théâtre",
                                description: "Conception et gestion d’une base relationnelle MariaDB avec modélisation UML et structuration des entités."
                            }
                        ]
                    }
                ]
            },
            {
                id: "csharp",
                name: "C#",
                logo: csharp,
                opportunities: [
                    {
                        id: "csharp-personnel",
                        name: "Personnel",
                        projects: [
                            {
                                id: "p1",
                                title: "Jeu Unity",
                                description: "Développement des mécaniques de jeu en C# et mise en place de tests unitaires."
                            }
                        ]
                    }
                ]
            },
            {
                id: "git",
                name: "Git",
                logo: git,
                opportunities: [
                    {
                        id: "git-global",
                        name: "Professionnel & Personnel",
                        projects: [
                            {
                                id: "p1",
                                title: "Gestion de version via GitHub",
                                description: "Gestion des branches et Pull Requests via GitHub. Mise en place d’un template de Pull Request structuré pour standardiser les revues de code et classer les incréments au projet réalisés."
                            }
                        ]
                    }
                ]
            },
            {
                id: "figma",
                name: "Figma",
                logo: figma,
                opportunities: [
                    {
                        id: "figma-global",
                        name: "Professionnel & Personnel",
                        projects: [
                            {
                                id: "p1",
                                title: "Conception de visuels",
                                description: "Réalisation de visuels pour des web app et autres applicatifs, seul ou en pair designing (ou simplement de layers). Émulation du parcours utilisateur via les fonctionnalités de transitions, d'animation et d'itinérance entre les différentes pages/vues. Anticipation de la responsivity."
                            }
                        ]
                    }
                ]
            },
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
