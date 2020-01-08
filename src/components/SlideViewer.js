import React, { PureComponent } from 'react';
import styled from 'styled-components';

import BackwardArrowIcon from '@material-ui/icons/ArrowBackIos';
import ForwardArrowIcon from '@material-ui/icons/ArrowForwardIos';

const Container = styled.div`
    position: relative;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-bottom: 3px solid #121E26;
`;

const SlideList = styled.div`
    display: flex;
    overflow: hidden;
`;

const Slide = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
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
    margin: 8px 10px 8px 10px;
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

        this.SlideWidth = props.width;
        this.SlideHeight = props.height;

        this.state = {
            currentIndex: 0,
            items: props.children
        };
    }

    moveTo = (position) => {
        this.ref.current.scrollTo({ left: position * this.SlideWidth, behavior: 'smooth' });
    }

    increaseIndex = () => { 
        if(this.state.items.length <= this.state.currentIndext + 1) return;
        
        const nextIndex = this.state.currentIndex + 1;
        
        this.moveTo(nextIndex);
        this.setState({ currentIndex: nextIndex });
    }

    decreaseIndex = () => {        
        if(this.state.currentIndex === 0) return;
        
        const prevIndex = this.state.currentIndex - 1;
        
        this.moveTo(prevIndex);
        this.setState({ currentIndex: prevIndex });
    }

    render() {
        const { items, currentIndex } = this.state;
        
        return (
            <Container width={this.SlideWidth} height={this.SlideHeight}>
                { currentIndex > 0 &&  
                    <BackwardButton onClick={this.decreaseIndex}>
                        <BackwardArrow fontSize="small"/>
                    </BackwardButton>
                }
                { currentIndex < items.length - 1 &&
                    <ForwardButton onClick={this.increaseIndex}>
                        <ForwardArrow fontSize="small"/>
                    </ForwardButton>
                }
                <SlideList ref={this.ref}>
                    { items.map((item, key) => {
                        return (
                            <Slide key={key} width={this.SlideWidth} height={this.SlideHeight}> 
                                { React.cloneElement(item, {
                                    style: {
                                        width: this.SlideWidth,
                                        height: this.SlideHeight
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