import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/strategies.jpg';
import { landingData } from '../../../static/data';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import { motion } from "framer-motion"

const StyledBox = styled.div`
    text-transform: capitalize;
    .item{
        margin-left: 6rem;
        margin-bottom: 3rem;
        .title{
            font-size: 36px;
            font-weight: 600;
            display: flex;
            flex-direction: row;
            align-items: center;
            .even{
                animation: rotateIcon 10s linear infinite;
                transform-origin: 50% 50%;
            }
            .odd {
                animation: rotateIconReverse 10s linear infinite;
                transform-origin: 50% 50%;
            }
            div{
                color: #00338d;
                margin-left: 1rem;
            }
        }
        .content{
            font-size: 20px;
            margin: 1rem 0 0 1rem;
            padding: 1rem;
            color: #555;
            border-bottom-left-radius: 25px;
            border-top-right-radius: 25px;
            background: rgba(245,245,245,0.6);
            box-shadow: 1px 1px 4px #bdbdbd;
            &:hover{
                box-shadow: 1px 1px 10px #bdbdbd;
                background: rgba(245,245,245,0.9);
            }
        }
    }

    @keyframes rotateIcon{
        100% { transform: rotate(360deg); }
    }  
    @keyframes rotateIconReverse{
        100% { transform: rotate(-360deg); }
    }
`;

const colorList = ['rgba(0,51,141,1)', 'rgba(20,71,161,1)', 'rgba(40,91,181,1)', 'rgba(60,111,201,1)'];


const Strategies = () => {

    return (
        <StyledBox>
            <FullScreen bg={bg} x={20} overlay='rgba(0,0,0,0.1)' justify='center' size={180}>
                {landingData.strategies.map((p, i) =>
                    <div key={i} className='item'>
                        <div className='title'>
                            <SettingsSharpIcon className={i % 2 === 0 ? 'even' : 'odd'} fontSize='large'/>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} style={{color: colorList[i]}}>{p.title}</motion.div>
                        </div>

                        <div className='content'>{p.content}</div>
                    </div>
                )}
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Strategies);