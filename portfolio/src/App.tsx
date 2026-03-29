import React from "react";
import './App.scss';
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import {theme} from "./styles/theme";
import {Separator} from "./components/Separator";
import {Typewriter} from "./components/Typewriter";
import {Timeline} from "./components/Timeline";
import Choices from "./components/Choices";
import ProgressIndicator from "./components/ProgressIndicator";
import Works from "./components/Works";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Capacities from "./components/Capacity";
import { academicSteps } from "./assets/data/academicSteps";

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
                        <Typewriter texts={["J'ai 27 ans","J'habite à Lille","J'aime développer","J'adore conceptualiser","J'aime le défi (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄","Je suis créatif","J'aime bien la photo aussi :p"]} />
                    </div>
                </div>
            </div>
        </Section>
        <Section title={"Ce portfolio"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <div id="CePortfolio">
                <div className="Choices">
                    <Choices/>
                </div>
                <div className="Progress">
                    <ProgressIndicator progress={71.66} strokeWidth={20} duration={1500}/>
                </div>
            </div>
        </Section>
        <Section title={"Formations"} background={theme.colors.gradientBackgroundReversed} fontColor={"#FFFFFF"}>
            <div id="formations">
                <Timeline items={academicSteps} />
            </div>
        </Section>
        <Section title={"Expériences"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <div id="experiences">
                <Experience/>
            </div>
        </Section>
        <Section title={"Réalisations"} background={theme.colors.gradientBackgroundReversed} fontColor={"#FFFFFF"}>
            <div id="realisations">
                <Works/>
            </div>
        </Section>
        <Section title={"Que puis-je faire pour vous ?"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <div id="capacities">
                <Capacities/>
            </div>
        </Section>
        <Section title={""} background={theme.colors.thirdBackground} fontColor={"#FFFFFF"}>
            <ContactForm />
        </Section>
    </div>
  );
}
export default App;
