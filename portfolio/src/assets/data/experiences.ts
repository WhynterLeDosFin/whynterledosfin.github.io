export interface Skill {
    name: string;
    url?: string;
}

export interface ExperienceData {
    title: string;
    company: string;
    period: string;
    description: string;
    functionalSkills: string[];
    technicalSkills: Skill[];
}

export const experiences: ExperienceData[] = [
    {
        title: "Développeur junior",
        company: "CALC Architecte",
        period: "05/18 à 08/18",
        description: "Stage de deux mois afin de compléter ma première année de cursus à la Providence. Refonte du site vitrine avec PhP et ajout de fonctionnalité de gestion du contenu. Import et remaniement de la base de donnée.",
        functionalSkills: ["Etude de l'existant", "Conception logicielle", "Enquête utilisateur", "Correctifs fonctionnels & visuels", "UML", "Documentation"],
        technicalSkills: [
            { name: "PhP", url: "https://www.php.net/" },
            { name: "Filezilla", url: "https://filezilla-project.org/" },
            { name: "PostgreSQL", url: "https://www.postgresql.org/ " },
        ]
    },
    {
        title: "Ingénieur logiciel",
        company: "Meelo",
        period: "09/20 à 08/23",
        description: "Contrat d'alternance de trois ans en parallèle de mon cursus à l'ISEN. Formation à Git bash, Angular/VueJS et Spring. Développement et conception de plusieurs outils de démonstration, de monitoring et d'applications. Formation et expérience de 4 mois au poste de scrum master. Rédaction de tests sur d'anciens projets Java. Conception et création de 3 outils de monitoring de la donnée (accès utilisateurs, template de message/notification, outils et sources de donnée).",
        functionalSkills: ["Agilité", "Conception logicielle", "Migration Vue 2 -> 3", "Tests unitaires", "Tests d'intégrations", "Brainstorming", "Enquête utilisateur", "Correctifs fonctionnels & visuels", "MCO", "Etude de l'existant", "Documentation", "UML", "Synthèse", "Compte-rendu"],
        technicalSkills: [
            { name: "VueJS", url: "https://vuejs.org/" },
            { name: "Vuetify", url: "https://vuetifyjs.com/" },
            { name: "vue-cookies", url: "https://www.npmjs.com/package/vue-cookies" },
            { name: "vue-router", url: "https://router.vuejs.org/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "Spring", url: "https://spring.io/projects/spring-framework" },
            { name: "Git", url: "https://git-scm.com/" },
            { name: "Github", url: "https://github.com/" },
            { name: "Docker", url: "https://www.docker.com/" },
            { name: "TailwindCSS", url: "https://tailwindcss.com/" },
            { name: "i18n", url: "https://www.i18next.com/" },
            { name: "_lodash", url: "https://lodash.com/" },
            { name: "Figma", url: "https://www.figma.com/fr-fr/" },
            { name: "Jira", url: "https://www.atlassian.com/fr/software/jira" },
            { name: "Confluence", url: "https://www.atlassian.com/fr/software/confluence" },
            { name: "1Password", url: "https://1password.com/fr" },
            { name: "DBeaver", url: "https://dbeaver.io/" },
            { name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { name: "Postman", url: "https://www.postman.com/" },
            { name: "Swagger", url: "https://swagger.io/" },
        ]
    },
    {
        title: "Développeur full stack Node.JS",
        company: "Fishing cactus",
        period: "01/24 à 05/24",
        description: "Stage de quatre mois afin de compléter mon cursus à l'ISEN. Développement et conception d'un outil de monitoring pour un suivi plus précis du développement du dernier projet du studio : SummerCamp un projet financé par Décathlon. Conception et création de layer sur Figma. Développement de l'application avec NextJS. Conception et création d'une base de donnée MongoDB. Création de visuels interprétable pour la donnée récoltée. Conception et développement d'une interface de configuration dynamique.",
        functionalSkills: ["Agilité", "Conception logicielle", "Brainstorming", "Correctifs fonctionnels & visuels", "UML", "Documentation", "Enquête utilisateur", "Correctifs fonctionnels & visuels", "Etude de l'existant", "Manipulation de canvas HTML", "Gestion d'événement graphiques", "Parsing JSON/YAML", "Choix et application de seuils de criticité", "Structure modulaire", "Gestion / Optimisation de requêtes SQL", "Pagination des requêtes", "Server actions", "Gestion du cache", "Data visualization", "Performance anylisis"],
        technicalSkills: [
            { name: "NextJS", url: "https://nextjs.org/" },
            { name: "TailwindCSS", url: "https://tailwindcss.com/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "Git", url: "https://git-scm.com/" },
            { name: "Gitlab", url: "https://about.gitlab.com/" },
            { name: "Docker", url: "https://www.docker.com/" },
            { name: "i18n", url: "https://www.i18next.com/" },
            { name: "Chart.js", url: "https://www.chartjs.org/" },
            { name: "js-yaml", url: "https://www.npmjs.com/package/js-yaml" },
            { name: "i18n", url: "https://www.i18next.com/" },
            { name: "Figma", url: "https://www.figma.com/fr-fr/" },
            { name: "Jira", url: "https://www.atlassian.com/fr/software/jira" },
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Mongoose", url: "https://mongoosejs.com/" },
            { name: "Slack", url: "https://slack.com/intl/fr-fr" },
        ]
    },
    {
        title: "Responsable recrutement",
        company: "SOLUTEC Lille",
        period: "11/24 à 07/25",
        description: "CDI au poste de chargé de recrutement pour le cabinet Lillois de l'ESN. Suivi des processus de recrutement et examinations des candidatures. Sourcing de profil selon les besoins des clients. Animations des entretiens. Représentation de l'entreprise sur des salons de recrutement. Rédactions de compte-rendus des activités recrutement et synthèse des échanges avec les candidats. Jury d'un examen de licence GEII de l'académie de Lille.",
        functionalSkills: ["Suivi de dossier", "Synthèse", "Compte-rendu", "Entretiens", "Sourcing", "Examination"],
        technicalSkills: [
            { name: "SAP SucessFactors", url: "https://www.sap.com/" },
            { name: "Word", url: "https://word.cloud.microsoft/fr-fr" },
            { name: "Powerpoint", url: "https://powerpoint.cloud.microsoft/fr-fr" },
            { name: "Excel", url: "https://excel.cloud.microsoft/fr-fr" },
            { name: "Teams", url: "https://www.microsoft.com/fr-fr/microsoft-teams" },
        ]
    },
];