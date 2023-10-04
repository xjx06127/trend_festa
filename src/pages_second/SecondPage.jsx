import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -6px;
`;

const FirstImg = styled.img`
  width: 100%;
`;

const SecondImg = styled.img`
  width: 100%;
  margin-bottom: -41%;
`;
const Btn = styled.img`
  width: 70%;
  margin-left: 26%;
`;

const SecondPage = () => {
  const url =
    "https://www.sandollcloud.com/CanpusCampaign?utm_source=university&utm_medium=website&utm_campaign=canpuscampaign&utm_content=season3&utm_term=can3_trendfesta";

  const GoToCanpus = () => {
    window.open(url);
  };

  return (
    <>
      <Box>
        <FirstImg src="/secondImage1.png" />
        <SecondImg src="/secondImage2.png" />
      </Box>
      <Btn src="/buttonImage.png" onClick={GoToCanpus} />
    </>
  );
};

export default SecondPage;
