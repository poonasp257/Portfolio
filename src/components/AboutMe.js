import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    z-index: 1;
    position: relative;
    line-height: 1.8;
    min-height: 500px;
    padding: 130px 0 130px 0;
    text-align: center;
    color: #121E26;
`;

const Title = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
`;

const TitleBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #121E26;
`;

class AboutMe extends PureComponent {
    render() {
        return (
            <Container id="about">
                <Title>About Me.</Title>
                <TitleBar/>
                안녕하세요. JunYoung입니다. <br/>
                저의 포트폴리오 사이트를 방문해주셔서 감사합니다.
            </Container>
        );
    }
};

export default AboutMe;