import React, { PureComponent } from 'react';
import styled from 'styled-components';

import BackwardArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import ForwardArrowIcon from '@material-ui/icons/KeyboardArrowRight';

const Container = styled.div`
    position: relative;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

const SlideList = styled.div`
    display: flex;
    overflow: hidden;
`;

const Slide = styled.div`
    user-select: none;
`;
    
const buttonStyle = `
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(50, 50, 50, 0.55);
    :hover {    
        color: rgba(255, 255, 255, 1);
        background-color: rgba(50, 50, 50, 0.65);
    }
`;

const BackwardButton = styled.div`
    left: 10px;
    ${buttonStyle}
`;

const ForwardButton = styled.div`
    right: 10px;
    ${buttonStyle}
`;

const arrowStyle = `
    margin: 5px;
        
    @media (min-width: 1281px) {
        font-size: 38px !important;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 26px !important;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 18px !important;
    }
`;

const BackwardArrow = styled(BackwardArrowIcon)`
    ${arrowStyle}
`;

const ForwardArrow = styled(ForwardArrowIcon)`
    ${arrowStyle}
`;

class SliderViewer extends PureComponent {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.state = {
            currentIndex: 0,
            items: props.children,
            slideWidth: props.width,
            slideHeight: props.height
        };
    }

    moveTo = (index, distance) => {
        if(!this.ref.current) return;

        this.ref.current.scrollTo({ left: index * distance, behavior: 'smooth' });
    }

    increaseIndex = () => { 
        if(this.state.items.length <= this.state.currentIndext + 1) return;
        
        const nextIndex = this.state.currentIndex + 1;
        
        this.moveTo(nextIndex, this.state.slideWidth);
        this.setState({ currentIndex: nextIndex });
    }

    decreaseIndex = () => {        
        if(this.state.currentIndex === 0) return;
        
        const prevIndex = this.state.currentIndex - 1;
        
        this.moveTo(prevIndex, this.state.slideWidth);
        this.setState({ currentIndex: prevIndex });
    }

    handleResize = () => {
        let slideWidth, slideHeight;
        
        if (window.matchMedia("(min-width: 1281px)").matches) {
            slideWidth = 800;
            slideHeight = 700;
        }
        else if (window.matchMedia("(min-width: 768px)").matches
            && window.matchMedia("(max-width: 1280px)").matches) {
                slideWidth = 650;
                slideHeight = 400;
        }
        else if (window.matchMedia("(min-width: 500px)").matches
            && window.matchMedia("(max-width: 767px)").matches) {
                slideWidth = 500;
                slideHeight = 300;
        }
        else if (window.matchMedia("(min-width: 320px)").matches
            && window.matchMedia("(max-width: 500px)").matches) {
                slideWidth = 280;
                slideHeight = 200;
        }

        this.moveTo(this.state.currentIndex, slideWidth);
        this.setState({ slideWidth, slideHeight });
    }

    componentDidMount() {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { items, currentIndex } = this.state;
        
        return (
            <Container width={this.state.slideWidth} height={this.state.slideHeight}>
                { currentIndex > 0 &&  
                    <BackwardButton onClick={this.decreaseIndex}>
                        <BackwardArrow/>
                    </BackwardButton>
                }
                { currentIndex < items.length - 1 &&
                    <ForwardButton onClick={this.increaseIndex}>
                        <ForwardArrow/>
                    </ForwardButton>
                }
                <SlideList ref={this.ref}>
                    { items.map((item, key) => {
                        return (
                            <Slide key={key}> 
                                { React.cloneElement(item, {
                                    style: {
                                        display: 'block',
                                        width: this.state.slideWidth,
                                        height: this.state.slideHeight
                                    }
                                }) }
                            </Slide>
                        )
                    }) }
                </SlideList>
            </Container>
        );
    }
};

export default SliderViewer;