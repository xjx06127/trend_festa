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
const First_page = () => {
  const handleLinkClick = () => {
    // 주어진 링크로 이동합니다.
    window.location.href =
      "https://www.sandollcloud.com/CanpusCampaign?utm_source=university&utm_medium=website&utm_campaign=canpuscampaign&utm_content=season3&utm_term=can3_trendfesta";

    // 페이지를 가운데로 스크롤합니다.
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    window.scrollTo({
      top: (documentHeight - windowHeight) / 2, // 페이지 중앙으로 스크롤
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  };

  return (
    <div>
      <Back>
        <Pic src="./F_page.svg"></Pic>
        <a
          href="https://www.sandollcloud.com/CanpusCampaign?utm_source=university&utm_medium=website&utm_campaign=canpuscampaign&utm_content=season3&utm_term=can3_trendfesta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkPic src="./alink.svg" />
        </a>
      </Back>
    </div>
  );
};

export default First_page;
