import react from "../logo/react.png";
import sass from "../logo/sass.png";
import ts from "../logo/typescript.png";

export interface PortfolioChoices {
    id: string;
    name: string;
    presentation: string;
    why: string;
    logo: string;
}

export const techChoices: PortfolioChoices[] = [
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
    }
];
