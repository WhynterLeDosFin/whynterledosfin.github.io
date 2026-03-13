import LaProvidence from "../img/La-Providence.png";
import IUT from "../img/IUT-Amiens.jpeg";
import Isen from "../img/JUNIA-ISEN.jpg";

export interface AcademicStep {
    diploma: string;
    school: string;
    description: string;
    image: string;
    date: string;
}

export const academicSteps: AcademicStep[] = [
    {
        diploma: "BTS Systèmes numériques, Informatique et Réseaux",
        school: "La Providence",
        description: "Acquis de compétences solides dans le développement logiciel, l’administration des systèmes et des réseaux, ainsi que dans l’architecture des systèmes embarqués. Maîtrise de plusieurs langages de programmation (C, C++, HTML, CSS, PhP). Conception d'applications en lien avec des équipements connectés. Apprentissage du fonctionnement des réseaux informatiques et de la configuration d'infrastructures à la sécurité réseau. Analyse des besoins techniques, rédaction de documentation et réalisation de projets en équipe, donnant ainsi une vision globale des systèmes d’information et de leur mise en œuvre.",
        image: LaProvidence,
        date: "Septembre 2017 à Août 2019"
    },
    {
        diploma: "DUT Informatique AS",
        school: "UPJV IUT Informatique",
        description: "Renforcement des compétences en administration et gestion de systèmes informatiques. Approfondissement de l’utilisation des systèmes Linux et de la programmation Bash. Consolidation des connaissances en C et C++. Découverte du langage C# avec une attention particulière portée sur les tests unitaires et la qualité du code. Développement d’une approche rigoureuse dans l’écriture de code maintenable. Acquisition d’une vision structurée des systèmes informatiques et de leur exploitation en environnement professionnel.",
        image: IUT,
        date: "Septembre 2019 à Août 2020"
    },
    {
        diploma: "Diplôme d'ingénieur",
        school: "JUNIA ISEN Lille",
        description: "Approfondissement des connaissances en ingénierie des systèmes d’information et en développement logiciel à grande échelle. Mise en œuvre de méthodes agiles, gestion de projet et travail collaboratif dans des contextes complexes. Exploration de domaines tels que le développement web, les bases de données, l’architecture logicielle et les systèmes distribués. Réalisation de projets concrets mêlant innovation technologique et contraintes industrielles. Développement d’un esprit critique et d’une capacité à concevoir des solutions robustes, évolutives et adaptées aux besoins métiers.",
        image: Isen,
        date: "Septembre 2020 à Août 2023"
    }
];
