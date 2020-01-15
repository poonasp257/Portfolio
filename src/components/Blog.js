import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    z-index: 1;
    position: relative;
    min-height: 400px;
    padding: 30px 0 100px 0;
    margin-bottom: 350px;
    color: #121E26;
    text-align: center;
`;

const Header = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #121E26;
`;

const Content = styled.div`
    margin: 150px;
    font-size: 30px;
    font-weight: bold;
`;

class Blog extends PureComponent {
    render() {
        return (
            <Container id="blog">
                <Header>Blog.</Header>
                <HeaderBar/>
                <Content>Comming Soon!!</Content>
            </Container>
        );
    }
};

export default Blog;