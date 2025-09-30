import React from 'react';
import './App.scss';
import LaProvidence from './assets/img/La-Providence.png';
import IUT from './assets/img/IUT-Amiens.jpeg';
import Isen from './assets/img/JUNIA-ISEN.jpg'
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import {theme} from "./styles/theme";
import {Separator} from "./components/Separator";
import {Typewriter} from "./components/Typewriter";
import {Timeline} from "./components/Timeline";
import Choices from "./components/Choices";
import ProgressIndicator from "./components/ProgressIndicator";

const academicSteps = [
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

function App() {
    return (
    <div className="App">
    <Navbar/>

        <Section title={"Bienvenue sur mon portfolio !"} background={theme.colors.gradientBackgroundReversed} fontColor={"#FFFFFF"}>
            <div className="Intro-container" id="presentation">
                <div className="Intro-left">
                   <h1>Enchanté, moi c'est Armel.</h1>
                   <p>Jeune ingénieur ayant évolué dans le milieu des
                       technologies de l’information au travers de
                       différentes formations et divers postes. Je suis
                       passionné par le développement de solutions
                       performantes simplifiant les tâches de mes
                       collaborateurs / clients. Je recherche aujourd’hui
                       une structure me permettant de faire bon usage de
                       mes compétences et de continuer de les y développer
                       dans un cadre dynamique, collaboratif et
                       bienveillant.
                   </p>
                    <p>Je suis actuellement à l'écoute de nouvelles opportunités.
                    </p>
               </div>
                <Separator orientation="vertical" length="400px" thickness="3px" />
                <div className="Intro-right">
                    <div className="Picture-container"/>
                    <div className="Typewriter-container">
                        <Typewriter texts={["j'ai 27 ans","J'habite à Lille","J'aime développer","J'adore conceptualiser","J'aime le défi (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄","Je suis créatif","j'aime bien la photo aussi :p"]} />
                    </div>
                </div>
            </div>
        </Section>
        <Section title={"Formations"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <div id="formations">
                <Timeline items={academicSteps} />
            </div>
        </Section>
        <Section title={"Ce portfolio"} background={theme.colors.gradientBackgroundReversed} fontColor={"#FFFFFF"}>
            <div id="CePortfolio">
                <div className="Choices">
                    <Choices/>
                </div>
                <div className="Progress">
                    <ProgressIndicator progress={40} strokeWidth={20} duration={1500}/>
                </div>
            </div>
        </Section>
    </div>
  );
}

export default App;
