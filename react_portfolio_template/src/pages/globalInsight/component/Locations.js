import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import locations from '../../../static/image/gic.png';
const StyledBox = styled.div`
    .title{
        font-size: 64px;
        width: 400px;
        text-transform: capitalize;
    }
    .title::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: #fff;
        transition: width .3s;
        animation: animatedLocationText linear forwards 1 5s;
    }
    img {
        align-self: center;
        border-radius: 2px;
    }
    @keyframes animatedLocationText {
        100% { width: 100%; transition: width;}
    }
`;

const Locations = () => {
    return (
        <StyledBox>
            <FullScreen
                direction='row'
                justify='space-around'
                align='center'
                bg='https://cdn.pixabay.com/photo/2016/11/06/17/17/north-america-1803504_1280.jpg'
                size={80}
                overlay='rgba(0,0,0,0.6)'
            >
                <div className='title'>global insights center locations</div>
                <img src={locations} alt='global insight center locations' />
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Locations);