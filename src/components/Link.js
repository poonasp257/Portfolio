import React, { PureComponent } from 'react';
import styled from 'styled-components';

const animationFillColor = `
    animation: fillColor 0.3s forwards;
`;

const Container = styled.section`
    display: inline-block;
    margin-left: 30px;
    text-transform: uppercase;
    cursor: pointer;
    ${props => props.active ? animationFillColor : null };
    :hover { ${animationFillColor} }
    @keyframes fillColor {
        100% { color: #f9d6fd; }
    }
`;

class Link extends PureComponent {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.targetRectTop = null; 
        this.targetRectBottom = null; 
        this.navBarHeight = 0;

        this.state = {
            isActivated: false
        };
    }

    componentDidMount() {
        const navBar = document.getElementById("navigation");
        const target = document.getElementById(this.props.destination);
        const targetRect = target.getBoundingClientRect();

        this.targetRectTop = targetRect.top + window.pageYOffset - navBar.offsetHeight;
        this.targetRectBottom = targetRect.bottom + window.pageYOffset - navBar.offsetHeight;
        this.navBarHeight = navBar.offsetHeight;
        
        window.addEventListener("scroll", this.handleScroll);
        this.ref.current.addEventListener("click", this.handleClick);
    }    

    handleScroll = () => {
        if(this.targetRectTop - this.navBarHeight <= window.pageYOffset
            && window.pageYOffset < this.targetRectBottom - this.navBarHeight) {
                this.setState({ isActivated: true });
            }
        else this.setState({ isActivated: false });
    }

    handleClick = () => {
        window.scrollTo({ top: this.targetRectTop, behavior: 'smooth' });
    }
    
    render() {
        const { isActivated } = this.state;
        const { navMode } = this.props;

        return (
            <Container ref={this.ref} active={isActivated && navMode}>
                { this.props.name }
            </Container>
        );
    }
};

Link.defaultProps = {
    destination: 'None',
    name: 'None',
    navMode: false,
};

export default Link;