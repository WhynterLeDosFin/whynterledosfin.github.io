export interface Capacity {
    title: string;
    skills: string[];
}

export const capacities: Capacity[] = [
    {
        title: "Conception",
        skills: [
            "Analyse des besoins utilisateurs",
            "Élaboration de cahiers des charges",
            "Modélisation de bases de données (UML, Merise)",
            "Architecture logicielle",
            "Design de solutions performantes",
            "Prototypage d'interfaces (UI/UX)"
        ]
    },
    {
        title: "Développement Fullstack",
        skills: [
            "Développement d'applications web modernes",
            "Mise en place d'API RESTful",
            "Gestion de bases de données SQL & NoSQL",
            "Optimisation des performances",
            "Tests unitaires et d'intégration",
            "Déploiement continu (CI/CD)"
        ]
    },
    {
        title: "Gestion de Projet",
        skills: [
            "Méthodologies Agiles (Scrum, Kanban)",
            "Planification et suivi de projet",
            "Coordination d'équipes techniques",
            "Gestion de la relation client",
            "Veille technologique constante"
        ]
    },
    {
        title: "Documentation & Rédaction",
        skills: [
            "Rédaction de spécifications techniques",
            "Documentation utilisateur (guides, FAQ)",
            "Rédaction de rapports d'audit",
            "Création de supports de formation",
            "Gestion de base de connaissances (Wiki, Notion)",
            "Rédaction de cahiers de tests"
        ]
    }
];
