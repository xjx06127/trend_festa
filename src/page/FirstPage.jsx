import React from "react";
import styled from "styled-components";

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
