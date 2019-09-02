import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

function App(props) {
  const [data, setData] = useState([]);
  // const [person, setPerson] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const H1 = styled.h1`
    font-size: 3rem;
  `;

  return (
    <div className="App">
      <H1 className="Header">React Wars</H1>
      <div>
        <CharacterCard data={data} />
      </div>
    </div>
  );
}

export default App;
