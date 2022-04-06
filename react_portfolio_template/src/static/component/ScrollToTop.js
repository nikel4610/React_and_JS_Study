import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const StyledBox = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border: 1px solid #aaa;
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 4px;
    color: #aaa;
`;


const Scroll = () => {

    const ScrollToTop = () => {
        document.getElementById('landing-container') && document.querySelector('#landing-container').scrollTo(0,0);
        document.getElementById('global-container') && document.querySelector('#global-container').scrollTo(0,0);
        window.scrollTo(0, 0);
    }

    return (
        <StyledBox>
            <KeyboardArrowUpIcon onClick={ScrollToTop}/>
        </StyledBox>
    );
}


export default React.memo(Scroll);