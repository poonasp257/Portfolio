import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    margin-left: 30px;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    color: ${ props => props.active || props.hover ? '#B4D2D9' : '' };
    ${ 
        ("ontouchstart" in document.documentElement) ? 
        '' : ':hover { color: #B4D2D9; }' 
    }
`;

class Link extends PureComponent {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        
        this.state = {
            isActivated: false
        };
    }

    intializeTarget = () => {
        var bodyRect = document.body.getBoundingClientRect();
        const target = document.getElementById(this.props.destination);
        const targetRect = target.getBoundingClientRect();
        const navBar = document.getElementById("navigation");
        const navHeight = this.props.floatNav ? navBar.offsetHeight : 0;

        this.targetRectTop = Math.round(targetRect.top - bodyRect.top - navHeight);
        this.targetRectBottom = Math.floor(this.targetRectTop + targetRect.height);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.ref.current.addEventListener("click", this.handleClick);
    }    

    handleScroll = (e) => {
        this.intializeTarget();

        const scrollY = Math.round(window.pageYOffset);

        if(this.targetRectTop <= scrollY
            && scrollY < this.targetRectBottom) {
                this.setState({ isActivated: true });
        }
        else {
            this.setState({ isActivated: false });
        }
    }

    handleClick = (event) => {
        if (!this.props.navMode) return;

        event.preventDefault()

        this.intializeTarget();

        window.scrollTo({ top: this.targetRectTop, behavior: 'smooth' });
    }
    
    render() {
        const { isActivated } = this.state;
        const { navMode } = this.props;

        return (
            <Container 
                ref={this.ref} 
                active={isActivated && navMode}
            >
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