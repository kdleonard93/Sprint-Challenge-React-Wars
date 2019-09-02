import React, { useState, useEffect } from "react";
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

// Character Card Styles

const CustomCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-flow: column-wrap;
  border-bottom: 1px solid red;
  background-color: white;
`;

const Name = styled(CardTitle)`
  color grey;
`;

const charTraits = styled.li`
  color: green;
`;

const CharacterCard = props => {
  const people = props.data;
  console.log(people);

  return (
    <>
      {people.map(char => {
        return (
          <Card>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.birth_year}</CardText>
            <CardText>{props.gender}</CardText>
            <CardText>{props.hair_color}</CardText>
            <CardText>{props.height}</CardText>
            <CardText>{props.mass}</CardText>
            <CardText>{props.eye_color}</CardText>
            <CardText>{props.skin_color}</CardText>
          </Card>
        );
      })}
    </>
  );
};

export default CharacterCard;
