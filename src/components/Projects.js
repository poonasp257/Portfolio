import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    z-index: 1;
    position: relative;
    min-height: 500px;
    padding: 30px 0 100px 0;
`;

const Title = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
`;

const TitleBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: black;
`;

class Projects extends PureComponent {
    render() {
        return (
            <Container id="projects">
                <Title>Projects.</Title>
                <TitleBar/>
            </Container>
        );
    }
};

export default Projects;