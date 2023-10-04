import React from "react";
import styled from "styled-components";
import Second from "../Second";
import SecondPage from "../pages_second/SecondPage";

const LetsImg = styled.img`
  content: url("Lets_g.svg");
  width: 100%;
`;

const ColorImg = styled.img`
  content: url("Color_b.png");
  width: 165%;
  object-fit: cover;
`;

const ColorCon = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 5%;
  display: flex;
  justify-content: center;
`;

const ExplainImg = styled.image`
  content: url("explain_b.svg");
  width: 100%;
  margin-left: 8%;
  margin-top: 5%;
`;

const BottomCon = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 5%;
  display: flex;
  justify-content: center;
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Blue = () => {
  return (
    <>
    <Con>
      <LetsImg />
      <ColorCon>
        <ColorImg />
      </ColorCon>
      <BottomCon>
        <ExplainImg />
      </BottomCon>
    </Con>
    <Second />
    <SecondPage />
    </>
  );
};

export default Blue;
