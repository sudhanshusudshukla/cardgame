import { CARDSHUFFLE, CARDWITHDRAW } from "../actions/card-actions";

const initialStateFunction = () => {
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const cardColors = [
    {
      name: "Hearts",
      symbol: "♥",
      color: "red",
    },
    {
      name: "Clubs",
      symbol: "♣",
      color: "black",
    },
    {
      name: "Diamonds",
      symbol: "♦",
      color: "red",
    },
    {
      name: "Spades",
      symbol: "♠",
      color: "black",
    },
  ];
  const cards = [];
  for (let s = 0; s < cardColors.length; s++) {
    for (let v = 0; v < cardValues.length; v++) {
      const value = cardValues[v];
      const suit = cardColors[s];
      cards.push({ value, suit });
    }
  }
  return cards;
};

const cardShuffle = (card) => {
  return card.sort(() => Math.random() - 0.5);
};

const cardWithdraw = (card, count) => {
  let picked = card.filter((v, i) => count.payload === i);
  let rest = card.filter((v, i) => count.payload !== i);
  return { rest, picked };
};

const cards = initialStateFunction();

const initialState = {
  cards: cards,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDSHUFFLE:
      return {
        ...state,
        cards: cardShuffle(state.cards),
      };
    case CARDWITHDRAW:
      const c = cardWithdraw(state.cards, action.payload.count);
      return {
        ...state,
        cards: c.rest,
        picked: c.picked,
      };

    default:
      return state;
  }
};

export default cardReducer;
