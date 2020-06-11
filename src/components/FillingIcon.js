import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Icon = styled.div`
    width: 4.8em;
    height: 4.8em;
    overflow:hidden;
    line-height: 4.8em;
    text-align: center;
    border-radius: 50%;
    border: 2px solid ${props => props.borderColor};
    background-color: ${props => props.color};
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.4s;
    :hover, :focus, :active {
        transform: scale(1.2);
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        cursor: pointer;
    }
`;

const Text = styled.div`
    font-weight: bold;  
    color: ${props => props.fontColor};
`;

const Fill = styled.div`
    background-color: ${props => props.bgColor};
    width: 100%;
    height: ${props => 100 - props.amount}%;
`;

class FillingIcon extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isHover: false
        };
    }
    
    render() {
        const { borderColor, color, bgColor, fontColor, fillAmount, text } = this.props;
        const percentage = fillAmount * 100;
        return (
            <Icon
                borderColor={borderColor} 
                color={color} 
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}>
                <Fill
                    bgColor={bgColor}
                    color={color}
                    amount={percentage}
                >
                    <Text fontColor={fontColor}>
                        { this.state.isHover ? `${percentage}%` : text}
                    </Text>
                </Fill>
            </Icon>
        );
    }
}

FillingIcon.defaultProps = {
    color: '#B4D2D9',
    borderColor: '#B4D2D9',
    bgColor: '#fafafa',
    fontColor: '#121E26',
    fillAmount: 0.0,
    text: ''
}

export default FillingIcon;