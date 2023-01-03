import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCardShuffle, onCardWithdraw } from "../data/actions/card-actions";
import {
  CardContainer,
  Card,
  CardDisplay,
  CardValueFront,
  CardValueBack,
  Button,
  CardWrapper,
  PickedCard,
  PickedCardValueBack,
} from "./Cards.styled";

const Cards = () => {
  const { cards, picked } = useSelector((s) => s.card);
  const dispatch = useDispatch();

  const onShuffle = () => {
    dispatch(onCardShuffle());
  };

  const onWithdraw = (count) => {
    dispatch(onCardWithdraw({ payload: count }));
  };

  return (
    <>
      <CardContainer>
        <CardWrapper>
          {cards.map((c, count) => (
            <Card
              data-testid={`withdraw-${count}`}
              key={count}
              onClick={() => onWithdraw(count)}
            >
              <CardDisplay>
                <CardValueFront></CardValueFront>
                <CardValueBack color={c.suit.color}>
                  {c.value} {c.suit.symbol}
                </CardValueBack>
              </CardDisplay>
            </Card>
          ))}
        </CardWrapper>
      </CardContainer>
      <CardWrapper data-testid="picked-card">
        {picked &&
          picked.map((p, count) => (
            <PickedCard key={count} onClick={() => onWithdraw(count)}>
              <CardDisplay>
                <CardValueFront></CardValueFront>
                <PickedCardValueBack color={p.suit.color}>
                  {p.value} {p.suit.symbol}
                </PickedCardValueBack>
              </CardDisplay>
            </PickedCard>
          ))}
      </CardWrapper>
      <Button data-testid="shuffle-button" onClick={onShuffle}>
        Shuffle
      </Button>
    </>
  );
};

export default Cards;
