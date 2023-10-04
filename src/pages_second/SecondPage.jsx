import React from 'react';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const FirstImg = styled.img`
    width: 100%;
`

const SecondImg = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(/secondImage2.png);
    background-size: cover;
    width: 100%;
    position: relative;
`
//부모 요소에게 position: relative;를 지정하고, 
//자식 요소에게 position: absolute;를 지정함으로써 
//자식 요소를 부모 요소를 기준으로 위치

const Empty = styled.div`
    height: 100vh;
    @media (orientation: landscape){
        height: 498vh;
    }
`

const Btn = styled.img`
    width: 70%;
    margin-left: 24%;
    position: absolute;
    bottom: 10%; 
`
//Btn컴포넌트의 부모 컴포넌트는 SecondImg 컴포넌트
//이때, absolute 속성은
//부모 요소 중에서 relative, absolute, fiexd가 있는 부모를 기준으로 위치결정
//없을 경우, 문서 전체를 기준으로 결정한다.

const SecondPage = () => {
    const url = "https://www.converse.co.kr/?utm_source=google&utm_medium=cpc&utm_campaign=google_sa_pc&utm_content=&utm_term=%EC%BA%94%EB%B2%84%EC%8A%A4&utm_source=google&utm_medium=cpc&utm_campaign=google_sa_pc&utm_content=&utm_term=%EC%BA%94%EB%B2%84%EC%8A%A4&gad_source=1&gclid=CjwKCAjw9-6oBhBaEiwAHv1QvOjs1IZVZVwW3q4dEZdS6abE7TDkyQvELOL4sJfjht9cjJ927pLm9RoCiFgQAvD_BwE";

    const GoToCanpus = () => {
        window.open(url);
    };


    return (
        <>
            <Box>
                <FirstImg src="/secondImage1.png"/>
                <SecondImg>
                        <Empty/>
                        <Btn src="/buttonImage.png" onClick={GoToCanpus}/>
                </SecondImg>
            </Box>
                
            
        </>
    );
};

export default SecondPage;