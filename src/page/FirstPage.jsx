import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2a67d5;
  position: relative; /* 부모 요소를 상대 위치로 설정합니다. */
`;

const Pic = styled.img`
  width: 100vw;
  height: 100vh;
  position: relative; /* Pic을 상대 위치로 설정합니다. */
  z-index: 1; /* 다른 요소 위에 나타나도록 z-index를 설정합니다. */
`;

const LinkPic = styled.img`
  position: absolute; /* LinkPic을 절대 위치로 설정합니다. */
  top: 0; /* 원하는 위치로 조절하세요. */
  left: 0; /* 원하는 위치로 조절하세요. */
  z-index: 2; /* Pic 위에 나타나도록 z-index를 설정합니다. */
  width: 70vw;
  height: auto;
  margin-top: 65vh;
  margin-left: 5vw;
`;

const FirstImg = styled.img`
  margin-top: 20%;
  width: 100%;
  margin-bottom: -82%;
`;

const Btn = styled.img`
  width: 60%;
  margin-left: 3%;
`;

const FirstPage = () => {
  const url =
    "https://www.sandollcloud.com/CanpusCampaign?utm_source=university&utm_medium=website&utm_campaign=canpuscampaign&utm_content=season3&utm_term=can3_trendfesta";
  const Go = () => {
    window.open(url);
  };
  return (
    <div>
      <FirstImg src="/lastBack.png" />
      <Btn src="/lastBtn.png" onClick={Go} />
    </div>
  );
};

export default FirstPage;
