import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flow-root;
    margin-bottom: 20px;
`;

const Category = styled.h3`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: left;
`;

const ListItem = styled.span`
    float: left;
    margin-right: ${props => props.spacing};
`;

class List extends PureComponent {
    render() {
        const { category, spacing, children } = this.props;
        const lastIndex = children.length - 1;

        return (
            <Container>
                <Category>{category}</Category>
                {children.map((child, i) => 
                    <ListItem spacing={i !== lastIndex ? spacing : ''} key={i}>
                        {child}
                    </ListItem>
                )}
            </Container>
        );
    }
};

List.propTypes = {
    spacing: PropTypes.string
};

List.defaultProps = {
    spacing: '5px'
};

export default List;