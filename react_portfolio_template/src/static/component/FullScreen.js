import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    overflow: hidden;
    width:100%;
    height: 100vh;
    background-color: #e2e5e9;
    color: ${props => props.color || 'white'};
    background-image: url(${props => props.bg});
    background-size: ${props => `${props.size}%` || 'cover' };
    background-position-x: ${props => props.x || '50%'};
    background-position-y: ${props => props.y || '50%'};
    animation: animatedBackground ease-in 10s infinite;
    .overlay{
        display: flex;
        flex-direction: ${props => props.direction || 'column'};
        justify-content: ${props => props.justify || 'flex-start'};
        align-items: ${props => props.align || 'flex-start'};
        width: 100%;
        height: 91.5%;
        background: ${props => props.overlay || 'rgba(0,0,0,0.3)'};
        padding: ${props => props.padding || '80px 0 0 0'};
    }
    @keyframes animatedBackground {
        0% {background-size: ${props => `${props.size}%` || '160%'}; }
        50% {background-size: ${props => `${props.size+20}%` || '180%'}; }
        100% {background-size: ${props => `${props.size}%` || '160%'}; }
    }
`;

const FullScreen = ({ children, bg, x, y, direction, align, justify, padding, color, overlay, size }) => {

    return (
        <StyledBox 
            bg={bg}
            x={x}
            y={y}
            direction={direction}
            align={align}
            justify={justify}
            padding={padding}
            color={color}
            overlay={overlay}
            size={size}
        >
            <div className='overlay'>
        {children}
        </div></StyledBox>
    );
}

export default React.memo(FullScreen);