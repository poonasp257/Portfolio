import React, { PureComponent } from 'react';
import styled from 'styled-components';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Container = styled.section`
    z-index: 1;
    position: relative;
    padding-top: 30px;
    color: #121E26;
    text-align: center;

    @media (min-width: 1281px) {
        min-height: 840px;
        margin-bottom: 350px;
        font-size: 32px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        min-height: 740px;
        margin-bottom: 350px;
        font-size: 28px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        min-height: 640px;
        margin-bottom: 200px;
        font-size: 26px;
    }    
`;

const Header = styled.h1`
    margin: 0 auto;
    letter-spacing: 2px;
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #121E26;
`;

const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-weight: bold;
`;

const ScrollDownIndicator = styled(KeyboardArrowDownIcon)`
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: bounce-fade 1.2s infinite;
    @keyframes bounce-fade {
        from { opacity: 0; bottom: 45px; }
        to { opacity: 1; bottom: 10px; }
    }
`;

class Daily extends PureComponent {
    render() {
        return (
            <Container id="daily">
                <Header>Daily.</Header>
                <HeaderBar/>
                <Content>Comming Soon!!</Content>
                <ScrollDownIndicator/>
            </Container>
        );
    }
};

export default Daily;