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
    color: #121E26;
    text-align: center; 

    @media (min-width: 1281px) {
        padding: 15px;
        font-size: 18px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        padding: 11px;
        font-size: 14px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        padding: 7px;
        font-size: 10px;
    }
`;

const Blank = styled.div`
    width: 100%;
    height: ${props=>props.height}px;
`;

class NavigationBar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isFixed: false,
            maxHiddenHeight: 0,
            navHeight: 0
        };
    }

    handleScroll = () => {
        const isFixed = window.pageYOffset > this.state.maxHiddenHeight ? true : false;

        this.setState({ isFixed: isFixed });
    }

    componentDidMount() {
        this.resizeHiddenHeight();

        window.addEventListener("resize", this.resizeHiddenHeight);
        window.addEventListener("scroll", this.handleScroll);
    }
    
    resizeHiddenHeight = () => {
        const navRect = document.getElementById("navigation").getBoundingClientRect();
 
        this.setState({ 
            maxHiddenHeight: document.getElementById("home").offsetHeight,
            navHeight: navRect.height
        });
    }

    render() {
        return (
            <div>
                <Blank height={this.state.navHeight}/>
                <Container id="navigation" isFixed={this.state.isFixed}>
                    <Menu>
                       <Link destination="home" name="home" navMode/>
                       <Link destination="about" name="about me" navMode floatNav/>
                       <Link destination="projects" name="projects" navMode floatNav/>
                       <Link destination="daily" name="daily" navMode floatNav/>
                    </Menu>
                </Container>
            </div>
        );
    }
};

export default NavigationBar;