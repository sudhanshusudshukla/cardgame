export const CARDSHUFFLE = "CARDSHUFFLE";

export const CARDWITHDRAW = "CARDWITHDRAW";

export const onCardShuffle = () => {
  return {
    type: CARDSHUFFLE,
  };
};

export const onCardWithdraw = (count) => {
  return {
    type: CARDWITHDRAW,
    payload: { count },
  };
};
