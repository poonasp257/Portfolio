import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Link from './Link';

import logo from '../resources/logo_black.png';

const Container = styled.footer`
    z-index: 0;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 400px;
    text-align: center;
    color: #121E26;
`;

const Header = styled.div`
    position: relative;
    padding-top: 50px;
    font-size: 50px;
    font-weight: bold;
    color: #B4D2D9;
    letter-spacing: 0.8rem;
`;

const SubHeader = styled.p`
    margin: 20px auto;
`;

const Logo = styled.img`
    margin: 10px auto;
    width: 80px;
    height: 80px;
`;

const Links = styled.div`
    margin: 35px auto;
`;

const Copyright = styled.div`
    width: 100%;
    font-size: 12px;
`;

class Footer extends PureComponent {
    render() {
        return (
            <Container>
                <Header>Let´s start with me!</Header>
                <SubHeader>작업할 준비 됐습니다. 언제든지 편하게 연락 주세요!</SubHeader>
                <Logo src={logo}/>
                <Links>
                    <Link destination="home" name="home"/>
                    <Link destination="about" name="about me"/>
                    <Link destination="projects" name="projects"/>
                    <Link destination="contact" name="contact"/>
                </Links>
                <Copyright>© JUNYOUNG 2020. Designed with React.js</Copyright>
            </Container>
        );
    }
};

export default Footer;