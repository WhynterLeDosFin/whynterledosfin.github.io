import React from 'react';
import './App.scss';
import myPhoto from './assets/img/IMG_6461.jpg';
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import {theme} from "./styles/theme";

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
                       mes compétences et de les y développer davantage
                       dans un cadre dynamique, collaboratif et
                       bienveillant.
                   </p>
               </div>
                <div className="Intro-right">
                    <div className="Picture-container">
                    </div>
                </div>
            </div>

            <h1>Lorem ipsum h1</h1>
            <p>And that's an other one</p>

        </Section>
        <Section title={"Second one"} background={theme.colors.gradientBackground} fontColor={"#FFFFFF"}>
            <p>And that's an other one</p>
            <p>And that's an other one</p>

        </Section>

    </div>
  );
}

export default App;
