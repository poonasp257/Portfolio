import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Link from './Link';

const navMenuHeight = 50;

const fixedMenu = `
    position: fixed;
    animation: popdown 0.8s;
    @keyframes popdown {
        0% { transform: translateY(-${navMenuHeight}px); }
    }
`;

const hiddenMenu = `
    position: absolute;
`;

const Container = styled.nav`
    ${ props => props.isFixed ? fixedMenu : hiddenMenu}
    z-index: 2;
    top: 0px;
    width: 100%;
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid #c8c8c8;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    height: ${navMenuHeight}px;
    margin: 0 auto;
`;

const Menu = styled.div`
    padding: 15px;
    color: #121E26;
    text-align: center; 
`;

class NavigationBar extends PureComponent {
    constructor(props) {
        super(props);

        this.maxHiddenHeight = 0;
        
        this.state = {
            isFixed: false
        };
    }

    handleScroll = () => {
        const { pageYOffset } = window;
        const isFixed = pageYOffset > this.maxHiddenHeight ? true : false;

        this.setState({ isFixed: isFixed });
    }

    componentDidMount() {
        this.maxHiddenHeight = document.getElementById("home").offsetHeight;

        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }
    
    handleResize = () => {
        this.maxHiddenHeight = document.getElementById("home").offsetHeight;
    }

    render() {
        return (
            <Container id="navigation" isFixed={this.state.isFixed}>
                <Content>
                    <Menu>
                        <Link destination="home" name="home" navMode/>
                        <Link destination="about" name="about me" navMode/>
                        <Link destination="projects" name="projects" navMode/>
                        <Link destination="contact" name="contact" navMode/>
                    </Menu>
                </Content>
            </Container>
        );
    }
};

export default NavigationBar;