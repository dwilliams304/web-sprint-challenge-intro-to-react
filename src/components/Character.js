// Write your Character component here
import React from "react";
import styled from 'styled-components';



function Characters(props){
    


    const id = props.id + 1;
    
    const StyledDiv = styled.div`

        background-color: ${pr => pr.theme.black};
        padding-top: 10px;
        width: 750px;
        border: 4px solid ${pr => pr.theme.primaryColor};
        border-radius: 10px;
        margin: 25px;
        display: flex;
        justify-content: center;

        p{
            margin-left: 20px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            color: ${pr => pr.theme.secondaryColor};
        }
        &:hover{
            transition: 0.2s ease-in-out;
            cursor: pointer;
            scale: 1.05;
            background-color: ${pr => pr.theme.hoverBackColor};
            p{
                color: ${pr => pr.theme.white};
            }
        }
        
    `;

    return (
        <StyledDiv onClick={() => props.openDetails(id)}>
            <p>{id}. {props.char.name}</p>
        </StyledDiv>
    );

}

export default Characters;

/*
Name, Height, Mass, Hair Color, Skin Color, Eye Color, Birth Year, gender, Homeworld, films (array), species, vehicles (array), starships (array), created, edited, url
*/