import React, { Component } from 'react';
import styled from 'styled-components';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Container = styled.footer`
    z-index: 0;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 400px;
`;

const Title = styled.div`
    position: relative;
    padding-top: 50px;
    font-size: 60px;
    font-weight: 500;
    color: #F9D6FD;
    text-align: center;
`;

const Text = styled.p`
    text-align: center;
`;

const Contacts = styled.div`
    margin-top: 60px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
`;

const Phone = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`;

const PhoneNumber = styled.span`
    margin-left: 5px;
    font-size: 24px;
    letter-spacing: 0.08rem;
`;

const Email = styled.span`
    display: flex;
    position: relative;
    align-items: center;
    margin-left: 20px;
`;

const Address = styled.span`
    margin-left: 5px;
    font-size: 24px;
    letter-spacing: 0.08rem;
`;

const Copyright = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

class Footer extends Component {
    render() {
        return (
            <Container>
                <Title>Let´s start with me!</Title>
                <Text>작업할 준비 됐습니다. 언제든 연락 주세요!</Text>
                <Contacts>
                    <Phone>
                        <PhoneAndroidIcon fontSize="large"/>
                        <PhoneNumber>010 - 2554 - 5998</PhoneNumber>
                    </Phone>
                    <Email>
                        <MailOutlineIcon fontSize="large"/>
                        <Address>poonasp257@naver.com</Address>
                    </Email>
                </Contacts>
                <Copyright>© 2020 All Rights Reserved. JunYoung Lee</Copyright>
            </Container>
        );
    }
};

export default Footer;