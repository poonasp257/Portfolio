import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Link from './Link';

import logo from '../resources/logo_black.png';

const fixedMenu = `
    position: fixed;
    animation: popdown 0.8s;
    @keyframes popdown {
        0% { transform: translateY(-50px); }
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
    background-color: #fafafa;
    border-bottom: 1px solid #c8c8c8;
`;

const navbarHeight = 50;

const Content = styled.div`
    position: relative;
    width: 60%;
    height: ${navbarHeight}px;
    margin: 0 auto;
`;

const Logo = styled.img`
    float: left;
    width: ${navbarHeight}px;
    height: ${navbarHeight}px;
`;

const Menu = styled.div`
    float: right;
    padding: 15px;
    color: black;
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

        const menu = document.getElementById("menu");
        this.links = menu.children;

        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <Container id="navigation" isFixed={this.state.isFixed}>
                <Content>
                    <Logo src={logo}/>
                    <Menu id="menu">
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