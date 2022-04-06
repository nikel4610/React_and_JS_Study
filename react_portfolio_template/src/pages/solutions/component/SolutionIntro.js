import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
    margin: 5rem;
    div{
        margin-bottom: 2rem;
        font-size: 18px;
    }
    .ko{
        font-size: 16px;
        opacity: .6;
    }
`;


const SolutionIntro = ({ desc, descKo }) => {

    return (
        <StyledBox>
            <div className='en'>
                {desc[0]}
            </div>
            <div className='ko'>
                {descKo[0]}
            </div>
        </StyledBox>
    );
}

export default React.memo(SolutionIntro);