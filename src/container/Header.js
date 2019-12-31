import React, { Component } from 'react';
import styled from 'styled-components';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import logo from '../resources/logo.png';
import backgroundImage from '../resources/Road.jpg';

const Container = styled.header`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
    background-position: 50% 80%;
    background-repeat: no-repeat;
    background-image: url('${backgroundImage}');
    background-size: cover;
`;

const Opacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.5);
`;

const Content = styled.div`
    position: relative;
    width: 700px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    color: white;
`;

const Text = styled.div`
    position: absolute;
    text-align: center;
    margin: auto;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Title = styled.div`
    margin-top: 45px;
    font-size: 40px;
    letter-spacing: 6px;
`;

const Underline = styled.hr`
    margin-top: 20px;
    width: 110px;
    height: 1px;
    border: 0;
    background-color: white;
`;

const Instroduction = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
`;

const ScrollDownIndicator = styled(KeyboardArrowDownIcon)`
    position: absolute;
    bottom: 100px;
    left: 50%;
    animation: bounce-fade 1.2s infinite;
    @keyframes bounce-fade {
        0%   { opacity: 0; bottom: 70px; }
        100% { opacity: 1; bottom: 35px; }
    }
`;

class Header extends Component {    
    render() {
        return (
            <Container scrollY={window.scrollY}>
                <Opacity/>
                <Content>
                    <Text>
                        <Logo src={logo }/>
                        <Title>DEVELOPER</Title>
                        <Underline/>
                        <Instroduction>JunYoung Lee의 포트폴리오 사이트입니다.</Instroduction>
                    </Text>
                    <ScrollDownIndicator/>
                </Content> 
            </Container>
        );
    }
};

export default Header;