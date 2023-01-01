import { CARDSHUFFLE } from "../actions/card-actions";

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
  const cardColors = ["Hearts", "Diamonds", "Spades", "Clubs"];
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

const cardShuffle = (cards) => {
  const anyRandom = Math.floor(Math.random() * 51);
  const cardShuffleValue = cards[anyRandom].value;
  const cardShuffleSuit = cards[anyRandom].suit;
  let entity;
  cardShuffleSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardShuffleSuit.toLowerCase() + ";");
};
const cards = initialStateFunction();
cardShuffle(cards);

const cardReducer = (state = initialStateFunction, action) => {
  switch (action.type) {
    case CARDSHUFFLE:
      return {
        ...state,
        cards: state.cards,
      };
    default:
      return state;
  }
};

export default cardReducer;
