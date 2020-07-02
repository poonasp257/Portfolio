import React from 'react';
import styled from 'styled-components';

const iconSize = `
    @media (min-width: 1281px) {   
        font-size: 38px !important;      
    }

    @media (min-width: 768px) and (max-width: 1280px) {  
        font-size: 28px !important;      
    }

    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 20px !important;      
    } 
`;

export function StyledIcon({ component }) {
    const Icon = styled(component)`${iconSize}`;
    return <Icon/>;
}

export default StyledIcon;