import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Character = styled(Card)`
  margin: 30px 20px 0 20px;
  broder: 1px solid black;
  border-radius: 10px;
  height: 350px;
  width: 350px;
  background-color: rgba(255, 250, 250, 0.8);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const CharacterCard = props => {
  const people = props.data;
  console.log(people);
  return (
    <Container>
      {people.map(char => {
        return (
          <Character>
            <Name>{char.name}</Name>
            <CardText>Birth-Year: {char.birth_year}</CardText>
            <CardText>Gender: {char.gender}</CardText>
            <CardText>Hair-Color: {char.hair_color}</CardText>
            <CardText>Height: {char.height}lbs</CardText>
            <CardText>Weight: {char.mass}</CardText>
          </Character>
        );
      })}
    </Container>
  );
};

export default CharacterCard;
