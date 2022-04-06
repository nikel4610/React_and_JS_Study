import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/gic_map.png';
import { globalInsightsCenterData as data } from '../../../static/data';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

const StyledBox = styled.div`
    .title{
        text-transform: capitalize;
        font-size: 64px;
        text-shadow: 0px 0px 10px #444;
    }
    p:nth-child(2){
        /* meta.desc */
        width: 800px;
        font-size: 18px;
        margin-top: 3rem;
    }
    a{
        /* link to global insights center */
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        display: flex;
        font-size: 25px;
        align-items: center;
        margin-top: 10rem;
        transition-duration: 0.5s;

        &:hover{
            transition-duration: 0.5s;
            color: rgba(0,0,0,0.5);

        }
    }
`;

const Intro = () => {
    return(
        <StyledBox>
            <FullScreen bg={bg} size={100} padding='15rem 0 0 10rem' overlay='rgba(0,0,0,0.6)'>
                <div className='title'>lighthouse insights center</div>
                <p>{data.meta.desc}</p>
                <a href={data.meta.link} target='_blank' rel="noreferrer" className='btn'>
                    <ArrowForwardIosSharpIcon />
                    visit global insights center
                </a>
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Intro);