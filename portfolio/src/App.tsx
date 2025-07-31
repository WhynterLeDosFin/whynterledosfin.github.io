import React from 'react';
import './App.scss';
import myPhoto from './assets/img/IMG_6461.jpg';
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import {theme} from "./styles/theme";
import {Separator} from "./components/Separator";
import {Typewriter} from "./components/Typewriter";

function App() {
  return (
    <div className="App">
    <Navbar/>
        <Section title={"Bienvenue sur mon portfolio !"} background={theme.colors.gradientBackgroundReversed} fontColor={"#FFFFFF"}>
            <div className="Intro-container">
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
        <Section title={"Mes expériences"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <p>And that's an other one</p>
        </Section>
    </div>
  );
}

export default App;
