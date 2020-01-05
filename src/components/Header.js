import React, { PureComponent } from 'react';
import styled from 'styled-components';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import logo from '../resources/logo_white.png';
import backgroundImage from '../resources/Road.jpg';

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

const Opacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.45);
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

const Bar = styled.hr`
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
    transform: translate(-50%, 0);
    animation: bounce-fade 1.2s infinite;
    @keyframes bounce-fade {
        from { opacity: 0; bottom: 70px; }
        to { opacity: 1; bottom: 35px; }
    }
`;

class Header extends PureComponent {    
    render() {
        return (
            <Container id="home">
                <Opacity/>
                <Content>
                    <Text>
                        <Logo src={logo }/>
                        <Title>DEVELOPER</Title>
                        <Bar/>
                        <Instroduction>
                            클라이언트&서버 개발자<br/>
                            JunYoung의 포트폴리오 사이트입니다.
                        </Instroduction>
                    </Text>
                    <ScrollDownIndicator/>
                </Content> 
            </Container>
        );
    }
};

export default Header;