import React, { PureComponent } from 'react';
import styled from 'styled-components';

const lineWidth = 3;
const timeStampSize = 10;

const Container = styled.section`
    position: relative;
    margin: 6vw auto;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: ${lineWidth}px;
      background-color: #fafafa;
    }
`;

const Event = styled.div`
    position: relative;
    margin: 0 auto;
`;

const TimeStamp = styled.span`
    width: ${timeStampSize}px;
    height: ${timeStampSize}px;
    border-radius: 50%;
    background-color: #fafafa;
    position: absolute;
    left: calc(50% - ${timeStampSize * 0.5}px + ${lineWidth * 0.5}px);
    top: 9vw;
    :hover {
        cursor: pointer;
        background-color: #B4D2D9;
    }  
`;

const Content = styled.div`
    position: relative;
    left: ${props => props.index % 2 ? `55%` : `18%`};
    width: fit-content;
`;

class TimeLine extends PureComponent {
    render() {
        return (
            <Container>
                {this.props.children.map((child, i) => {
                    return (
                        <Event key={i}>
                            <TimeStamp/>
                            <Content index={i}>
                                {child}
                            </Content>
                        </Event>
                    );
                })}
            </Container>
        );
    }
};

export default TimeLine;