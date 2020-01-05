import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HorizontalScroll = styled.div`
    z-index: 999;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${props => props.height};
    cursor: default;
`;

const VerticalScroll = styled.div`
    z-index: 999;
    position: fixed;
    right: 0;
    top: 0;
    width: ${props => props.width};
    height: 100%;
    cursor: default;
`;

const HorizontalBar = styled.div.attrs(props => ({
    style: {
        left: props.scrollLeft,
        width: props.thumbWidth,
        backgroundColor: props.color
    }
})) `    
    position: relative;
`;

const VerticalBar = styled.div.attrs(props => ({
    style: {
        top: props.scrollTop,
        height: props.thumbHeight,
        backgroundColor: props.color
    }
})) `    
    position: relative;
`;

function getScrollBarWidthRatio() {
    return window.innerWidth / document.documentElement.scrollWidth;
}

function getScrollBarHeightRatio() {
    return window.innerHeight / document.documentElement.scrollHeight;
}

class HorizontalScrollBar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            thumbWidth: window.innerWidth * getScrollBarWidthRatio(),
            scrollLeft: 0 
        };
    }

    componentDidMount() {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleResize = () => {
        const thumbWidth = window.innerWidth * getScrollBarWidthRatio();
        this.setState({ thumbWidth: thumbWidth });
    } 

    handleScroll = () => {
        const scrollLeft = window.pageXOffset * getScrollBarWidthRatio();
        this.setState({ scrollLeft: scrollLeft });
    }

    render() {
        const { size } = this.props;

        return (
            <HorizontalScroll height={size}>
                <HorizontalBar {...this.props} {...this.state}/>
            </HorizontalScroll>
        );
    }
};

HorizontalScrollBar.defaultProps = {
    size: '5px',
    color: 'black'
};

class VerticalScrollBar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            thumbHeight: window.innerHeight * getScrollBarHeightRatio(),
            scrollTop: 0 
        };
    }

    componentDidMount() {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleResize = () => {
        const thumbHeight = window.innerHeight * getScrollBarHeightRatio();
        this.setState({ thumbHeight: thumbHeight });
    } 

    handleScroll = () => {
        const scrollTop = window.pageYOffset * getScrollBarHeightRatio();
        this.setState({ scrollTop: scrollTop });
    }

    render() {
        const { size } = this.props;

        return (
            <VerticalScroll width={size}>
                <VerticalBar {...this.props} {...this.state}/>
            </VerticalScroll>
        );
    }
};

VerticalScrollBar.defaultProps = {
    size: '5px',
    color: 'black'
};

export {
    HorizontalScrollBar,
    VerticalScrollBar
};