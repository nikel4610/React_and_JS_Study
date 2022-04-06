import React from 'react';
import styled from 'styled-components';
import Intro from './component/Intro';
import Contents from './component/Contents';
import Locations from './component/Locations';
import Footer from '../../static/component/Footer';
const StyledBox = styled.div`
    .container{ 
        scroll-behavior: smooth;
        height: 100vh;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar { width: 0; background: transparent;}
    .container > div { scroll-snap-align: start;}

`;

const GlobalInsight = () => {
    return (
        <StyledBox>
            <div className='container' id='global-container'>
                <div><Intro /></div>
                <div><Contents /></div>
                <div><Locations /></div>
                <Footer />
            </div>
        </StyledBox>
    );
}

export default React.memo(GlobalInsight);