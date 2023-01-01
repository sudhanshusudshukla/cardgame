import React from "react";
import {
  CardContainer,
  Card,
  CardDisplay,
  CardValueFront,
  CardValueBack,
} from "./Cards.styled";

const Cards = () => {
  return (
    <CardContainer>
      <Card>
        <CardDisplay>
          <CardValueFront></CardValueFront>
          <CardValueBack>Back!</CardValueBack>
        </CardDisplay>
      </Card>
      <Card>
        <CardDisplay>
          <CardValueFront></CardValueFront>
          <CardValueBack>Back!</CardValueBack>
        </CardDisplay>
      </Card>
    </CardContainer>
  );
};

export default Cards;
