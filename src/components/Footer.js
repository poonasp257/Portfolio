import React, { PureComponent } from 'react';
import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import Link from './Link';

const Container = styled.footer`
    z-index: 0;
    position: fixed;
    left: 50%;
    bottom: 0;
    height: 17.5vw;
    min-height: 350px;
    text-align: center;
    color: #121E26;
    transform: translate(-50%, 0);
    font-size: 0.8vw;
`;

const Header = styled.div`
    position: relative;
    padding-top: 50px;
    font-size: 2.5vw;
    font-weight: bold;
    color: #B4D2D9;
    letter-spacing: 0.8rem;
`;

const SubHeader = styled.p`
    margin: 1vw auto;
`;

const Navigation = styled.div`
    margin: 2vw auto;
`;

const Copyright = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    font-size: 0.6vw;
`;

const Contact = styled.div`
    display: flex;
    justify-content: center;
`;

const LinkIcon = styled.a`
    margin: 15px 20px 0px 20px;
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
    transition: all .2s ease-in-out;
    color: #121E26;
    :hover {
        color: #B4D2D9;
        transform: scale(1.05);
    }
`;

const Address = styled.span`
    margin-left: 10px;
    font-size: 0.7vw;
`;

class Footer extends PureComponent {
    render() {
        return (
            <Container id="contact">
                <Header>Let´s start with me!</Header>
                <SubHeader>작업할 준비 됐습니다. 언제든지 편하게 연락 주세요!</SubHeader>
                <Contact>
                    <LinkIcon href="https://github.com/poonasp257" target="blank">
                        <GitHubIcon style={{fontSize: '2vw'}}/>
                        <Address>https://github.com/poonasp257</Address>
                    </LinkIcon>
                    <LinkIcon href="mailto:poonasp257@naver.com">
                        <AlternateEmailIcon style={{fontSize: '2vw'}}/>
                        <Address>poonasp257@naver.com</Address>
                    </LinkIcon>
                </Contact>
                <Navigation>
                </Navigation>
                <Copyright>© JUNYOUNG 2020. Designed with React.js</Copyright>
            </Container>
        );
    }
};


export default Footer;