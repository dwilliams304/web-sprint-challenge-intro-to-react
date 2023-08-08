import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import { BASE_URL } from "../constants/constants";



function Details(props){
    const {currentCharId, closeDetails} = props;
    const [charInfo, setCharInfo] = useState(null);
    
    // const [moves, setMovies] = useState([]);
    // const movieArray = [];



    const StyledDiv = styled.div`
        width: 750px;
        opactiy: 0;
        background-color: ${pr => pr.theme.black};
        border: 1px solid ${pr => pr.theme.primaryColor};
        p{
            border-bottom: 1px dotted ${pr => pr.theme.primaryColor};
            padding-top: 10px;
            padding-bottom: 5px;
            color: ${pr => pr.theme.secondaryColor};
        }
        button{
            margin-top: 60px;
            padding: 10px;
            border-radius: 10px;
            color: ${pr => pr.theme.secondaryColor};
            border: 1px solid ${pr => pr.theme.primaryColor};
            background-color: ${pr => pr.theme.black};
            &:hover{
                transition: 0.2s ease-in-out;
                cursor: pointer;
                scale: 1.1;
                color: ${pr => pr.theme.white};
                background-color: ${pr => pr.theme.hoverBackColor};
            }
        }

        h2{
            border-bottom: 2px solid ${pr => pr.theme.primaryColor};
            margin-bottom: 40px;
            padding: 10px;
            color: ${pr => pr.theme.secondaryColor};
        }
    `;

    useEffect(() => {
        axios.get(`${BASE_URL}/people/${currentCharId}/`)
        .then(res => {
            setCharInfo(res.data);
        })
        .catch(err => console.log(err))
      }, [currentCharId])


    
    
      
      // function GrabMovies(url){
          //     axios.get(url)
          //     .then(res => {
              //         console.log(res.data);
              //         movieArray.push(res.data.title);
              //     })
              //     .catch(err => {
                  //         console.log(err);
                  //     }, [])
                  //     console.log(movieArray);
                  
                  // }
                  
    if(!charInfo) return(
        <StyledDiv>
            <h2>Loading details...</h2>
        </StyledDiv>
    )

      return(
          <StyledDiv>
            <h2>Name: {charInfo.name}</h2>
            <p>Height: {charInfo.height}cm</p>
            <p>Mass: {charInfo.mass}kg</p>
            <p>Hair Color: {charInfo.hair_color.toUpperCase()}</p>
            <p>Eye Color: {charInfo.eye_color.toUpperCase()}</p>
            <p>Birth Year: {charInfo.birth_year}</p>
            <p>Gender: {charInfo.gender.toUpperCase()}</p>
            {/* <h3>Films:</h3> */}
            {/* {
                charInfo.films.map(film => {
                    return <p>{GrabMovies(film)}</p>
                })
            } */}

            <button onClick={closeDetails}>Close details</button>
        </StyledDiv>
    )

}

/*
Name, Height, Mass, Hair Color, Skin Color, Eye Color, Birth Year, gender, Homeworld, films (array), species, vehicles (array), starships (array), created, edited, url
*/


export default Details;