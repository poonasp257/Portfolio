import { keyframes } from 'styled-components';

const animations = {
    fadeIn: keyframes`
        from { opacity: 0; }
        to { opacity: 1; }
    `,
    fadeOut: keyframes`
        from { opacity: 1; }
        to { opacity: 0; }
    `,
    zoomIn: keyframes`
        from { transform: scale(1.00); }
        to { transform: scale(1.05); }
    `,
    zoomOut: keyframes`    
        from { transform: scale(1.05); }
        to { transform: scale(1.00); }
    `
};

export default animations;