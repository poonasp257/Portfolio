import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    z-index: 1;
    position: relative;
    min-height: 400px;
    padding: 30px 0 100px 0;
    margin-bottom: 400px;
    color: #121E26;
`;

const Header = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #121E26;
`;

class Contact extends PureComponent {
    render() {
        return (
            <Container id="contact">
                <Header>Contact.</Header>
                <HeaderBar/>
            </Container>
        );
    }
};

export default Contact;