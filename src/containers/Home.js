import React, { PureComponent } from 'react';
import styled from 'styled-components'

import { Header, NavigationBar, Footer, AboutMe, Projects, Contact } from 'components';
import { BlockReserveLoading } from 'react-loadingg';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Loading = styled.div`
    position: fixed;
    width: 105%;
    height: 100%;
    background-color: #fafafa;
    z-index: 999;
    ${props => props.done ? `animation: fadeout 1.8s forwards;` : null}
    @keyframes fadeout {
        from { opacity: 1; }
        to { opacity: 0; z-index: -1; }
    }
`;

const Content = styled.article`
    z-index: 1;
    position: relative;
    background-color: #fafafa;
    width: 100%;
    height: auto;
    margin-bottom: 400px;
    box-shadow: 0 10px 60px rgba(20,20,20,0.1), 0 10px 50px rgba(30, 30, 30, 0.06);
`;

class Home extends PureComponent {
    state = {
        isLoaded: false
    };

    componentDidMount() {
        this.setState({ isLoaded: true });
    }

    render() {  
        return (
            <Container>
                <Loading done={this.state.isLoaded}>
                    <BlockReserveLoading color="#f9d6fd" size="large"/>
                </Loading>
                <Header/>
                <Content>
                    <NavigationBar/>
                    <AboutMe/>
                    <Projects/>
                    <Contact/>
                </Content>
                <Footer/>
            </Container>
        );
    }
};

export default Home;