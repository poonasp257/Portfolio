import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    margin: 6vw auto;
    &:before {
        content: "";
        position: absolute;
        height: 100%;
        background-color: #fafafa;

        @media (min-width: 1281px) {
            width: 3px;
        }
      
        @media (min-width: 768px) and (max-width: 1280px) {
            width: 2px;
        }

        @media (min-width: 320px) and (max-width: 767px) {
            width: 1px;
        }   
    }
`;

const Event = styled.div`
    position: relative;
    margin: 0 auto;
`;

const TimeStamp = styled.span`
    border-radius: 50%;
    background-color: #fafafa;
    position: absolute;
    top: 9vw;
    :hover {
        cursor: pointer;
        background-color: #B4D2D9;
    }  
    
    @media (min-width: 1281px) {
        left: calc(50% - 5px + 1.5px);
        width: 10px;
        height: 10px;
    }
  
    @media (min-width: 768px) and (max-width: 1280px) {
        left: calc(50% - 3.5px + 1px);
        width: 7px;
        height: 7px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        left: calc(50% - 2px + 0.5px);
        width: 4px;
        height: 4px;
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
                        <Event key={i} name="hello">
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