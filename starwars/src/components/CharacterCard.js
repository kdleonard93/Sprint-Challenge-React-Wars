import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
function CharacterCard(props) {
  return (
    <>
      <Card body>
        <characterName>{props.name}</characterName>
        <CardText></CardText>
      </Card>
    </>
  );
}

export default CharacterCard;
