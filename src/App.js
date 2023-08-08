import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Character from './components/Character';
import Details from "./components/Details";
import { BASE_URL } from './constants/constants';
import styled, { keyframes } from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null);

  useEffect(() => {
    console.log("App mounted")
    axios.get(`${BASE_URL}/people/`)
      .then(res => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  const openDetails = id => {
    setCurrentCharId(id);
  }
  const closeDetails = () => {
    setCurrentCharId(null);
  }


  const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  if(!characters) return (<div>Loading characters...</div>)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledContainer>
        <div>
          {
            characters.map((char, idx) => {
              console.log(idx);
              return <Character char={char} key={idx} id={idx} openDetails={openDetails}/>
            })
          }
        </div>
        {
          currentCharId && <Details currentCharId={currentCharId} closeDetails={closeDetails}/>
        }
      </StyledContainer>
    </div>
  );
}

export default App;
//Need:
/*
Name, Height, Mass, Hair Color, Skin Color, Eye Color, Birth Year, gender, Homeworld, films (array), species, vehicles (array), starships (array), created, edited, url
*/


/*
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "A New Hope",
        "The Empire Strikes Back",
        "Return of the Jedi",
        "Revenge of the Sith"
    ],
    "species": [],
    "vehicles": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.dev/api/people/1/"
},
*/