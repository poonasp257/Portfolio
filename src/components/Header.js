import React, { PureComponent } from 'react';
import styled from 'styled-components';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import logo from '../resources/logo_white.png';
import backgroundImage from '../resources/home.jpg';

import Fade from 'react-reveal/Fade';

const Container = styled.header`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
    line-height: 2;
    background-position: 50% 80%;
    background-repeat: no-repeat;
    background-image: url('${backgroundImage}');
    background-size: cover;
`;

const BlurContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.45);
`;

const Content = styled.div`
    position: relative;
    width: 100%;
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
    font-size: 2vw;
    letter-spacing: 6px;
`;

const Bar = styled.hr`
    margin-top: 15px;
    width: 110px;
    height: 1px;
    border: 0;
    background-color: white;
`;

const Instroduction = styled.div`
    margin: 100px auto;
    font-size: 1.2vw;
    font-weight: 300;
    letter-spacing: 2px;
`;

const ScrollDownIndicator = styled(KeyboardArrowDownIcon)`
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: bounce-fade 1.2s infinite;
    @keyframes bounce-fade {
        from { opacity: 0; bottom: 45px; }
        to { opacity: 1; bottom: 10px; }
    }
`;

const TinyTitle = styled.div`
    position: absolute;
    margin: 25px 0 0 35px;
    color: #fafafa;
`;

class Header extends PureComponent {    
    render() {
        return (
            <Container id="home">
                <BlurContainer/>
                <TinyTitle>JunYoung's Web Portfolio</TinyTitle>
                <Content>
                    <Text>
                        <Fade top duration={1600}>
                            <Logo src={logo}/>
                            <Title>DEVELOPER</Title>
                            <Bar/>
                            <Instroduction>
                                안녕하세요, 이준영입니다.
                            </Instroduction>
                        </Fade>
                    </Text>
                    <ScrollDownIndicator/>
                </Content> 
            </Container>
        );
    }
};

export default Header;