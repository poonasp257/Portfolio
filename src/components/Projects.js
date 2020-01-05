import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    z-index: 1;
    position: relative;
    min-height: 500px;
    padding: 30px 0 100px 0;
    background-color: #121E26; 
`;

//#23323c

const Title = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
    color: #fafafa;
`;

const TitleBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #fafafa;
`;

class Projects extends PureComponent {
    render() {
        return (
            <Container id="projects">
                <Title>Works.</Title>
                <TitleBar/>
            </Container>
        );
    }
};

export default Projects;