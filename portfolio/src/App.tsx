import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from "./components/Title";
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar title={"didier"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Title title={"Portfolio"}/>
      </header>
        <Section title={"First one"} backgroundColor={"#FFFFFF"} fontColor={"#000000"}>
            I'm in the new section
        </Section>
        <Section title={"Second  one"} backgroundColor={"#000000"} fontColor={"#FFFFFF"}>
            And that's an other one
        </Section>

    </div>
  );
}

export default App;
