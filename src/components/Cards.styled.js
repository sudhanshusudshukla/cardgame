import styled from "styled-components";
import img from "../assets/poker-card-image.jpeg";

export const CardContainer = styled.div`
  align-items: center;
  background-color: gray;
  border: 8px solid #fff;
  border-radius: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
  padding: 2rem;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 auto;
  //border-radius: 15px;
  //box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  //border: 1px solid #000;

  float: left;
  perspective: 500px;

  :hover {
    > div {
      transform: rotateY(180deg);
      transition: transform 0.5s;
    }
  }
`;

export const CardDisplay = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  flex-direction: column;
  //height: inherit;

  transition: transform 1s;
  transform-style: preserve-3d;

  // transition: transform 1s;
  // transform-style: preserve-3d;
  // :hover {
  //   transform: rotateY(180deg);
  //   transition: transform 0.5s;
  // }
`;

export const CardValueFront = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-size: contain;
  line-height: 300px;
  color: #03446a;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
  border: 1px solid #000;
`;

export const CardValueBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 300px;
  color: #03446a;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 1px solid #000;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
`;
export const Bottom = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
`;
