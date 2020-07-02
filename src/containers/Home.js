import React, { PureComponent } from 'react';
import styled from 'styled-components'

import { BlockReserveLoading } from 'react-loadingg';

import { 
    Header, NavigationBar, Footer, AboutMe, Projects, Daily
} from 'components';

const Content = styled.section`
    z-index: 1;
    position: relative;
    background-color: #fafafa;
    box-shadow: 0 10px 60px rgba(20,20,20,0.1), 0 10px 50px rgba(30, 30, 30, 0.06);
`;

const Loading = styled.div`
    margin: 35vh auto;
    text-align: center;
    font-size: 1.3rem;
`;

const Item = styled.div`
    position: relative;
`;

class Home extends PureComponent {
    state = {
        isPrepared: false,
        isLoaded: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isPrepared: true });
            setTimeout(() => {
                this.setState({ isLoaded: true });
            }, 500);
        }, 1000);
    }

    render() {  
        return (
            this.state.isLoaded ?
                <div>
                    <Header />
                    <Content>
                        <NavigationBar />
                        <AboutMe />
                        <Projects />
                        <Daily />
                    </Content>
                    <Footer />
                </div>
                : <Loading>
                    <Item style={{ height: "120px" }}>
                        <BlockReserveLoading color="#f9d6fd" size="large" />
                    </Item>
                    <Item>
                        {this.state.isPrepared ? '환영합니다!' : '준비 중입니다.'}
                    </Item>
                </Loading>
        );
    }
};

export default Home;
