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
    padding: 5px 0 5px 0;
    background-color: white;
    border-bottom: 1px solid #c8c8c8;
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
                <Menu>
                    <Link destination="home" name="home" navMode/>
                    <Link destination="about" name="about me" navMode floatNav/>
                    <Link destination="projects" name="projects" navMode floatNav/>
                    <Link destination="daily" name="daily" navMode floatNav/>
                </Menu>
            </Container>
        );
    }
};

export default NavigationBar;