import React, { PureComponent } from 'react';
import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import StyledIcon from './StyledIcon';
import Link from './Link';

const Container = styled.footer`
    z-index: 0;
    position: fixed;
    left: 50%;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #121E26;
    transform: translate(-50%, 0);    
        
    @media (min-width: 1281px) {
        height: 350px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        height: 350px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        height: 200px;
    }
`;

const Header = styled.div`
    position: relative;
    font-weight: bold;
    color: #B4D2D9;

    @media (min-width: 1281px) {
        padding-top: 50px;
        font-size: 48px;
        letter-spacing: 13px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        padding-top: 40px;
        font-size: 44px;
        letter-spacing: 10.5px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        padding-top: 30px;
        font-size: 18px;
        letter-spacing: 8px;
    }
`;

const SubHeader = styled.p`
    @media (min-width: 1281px) {
        font-size: 18px;
        margin: 19px auto;
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 15px;
        margin: 15px auto;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 12px;
        margin: 11px auto;
    }    
`;

const Navigation = styled.div`
    @media (min-width: 1281px) {   
        font-size: 16px;
        margin: 38px;      
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {  
        font-size: 12px;
        margin: 28px;      
    }

    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 8px;
        margin: 18px;      
    } 
`;

const Copyright = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    
    @media (min-width: 1281px) {   
        font-size: 14px;        
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {  
        font-size: 10px;      
    }

    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 6px;
    } 
`;

const Contact = styled.div`
    display: flex;
    justify-content: center;
`;

const LinkIcon = styled.a`
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
    
    @media (min-width: 1281px) {   
        margin: 15px 20px 0px 20px;
        font-size: 13.5px;        
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {
        margin: 15px 15px 0px 15px;
        font-size: 10px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        margin: 15px 10px 0px 10px;
        font-size: 6.5px;
    }    
`;

const Address = styled.span`
    @media (min-width: 1281px) {   
        margin-left: 10px;
        font-size: 13.5px;        
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {
        margin-left: 8px;
        font-size: 10px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        margin-left: 6px;
        font-size: 6.5px;
    }    
`;

class Footer extends PureComponent {
    render() {
        return (
            <Container id="contact">
                <Header>Let´s start with me!</Header>
                <SubHeader>작업할 준비 됐습니다. 언제든지 편하게 연락 주세요!</SubHeader>
                <Contact>
                    <LinkIcon href="https://github.com/poonasp257" target="blank">
                        <StyledIcon component={GitHubIcon}/>
                        <Address>https://github.com/poonasp257</Address>
                    </LinkIcon>
                    <LinkIcon href="mailto:poonasp257@naver.com">
                        <StyledIcon component={AlternateEmailIcon}/>
                        <Address>poonasp257@naver.com</Address>
                    </LinkIcon>
                </Contact>
                <Navigation>
                    <Link destination="home" name="home" navMode />
                    <Link destination="about" name="about me" navMode floatNav />
                    <Link destination="projects" name="projects" navMode floatNav />
                    <Link destination="daily" name="daily" navMode floatNav />
                </Navigation>
                <Copyright>© JUNYOUNG 2020. Designed with React.js</Copyright>
            </Container>
        );
    }
};


export default Footer;