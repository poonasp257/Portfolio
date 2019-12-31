import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.section`
    z-index: 1;
    position: relative;
    background-color: #fafafa;
    width: 100%;
    height: 700px;
    margin-bottom: 400px;
    box-shadow: 0 10px 60px rgba(20,20,20,0.1), 0 10px 50px rgba(30,30,30,0.06);
`;

class Home extends Component {
    render() {
        return (
            <Container>
                
            </Container>
        );
    }
};

export default Home;