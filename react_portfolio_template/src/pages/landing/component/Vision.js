import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/vision.png';
import { landingData } from '../../../static/data';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';

const StyledBox = styled.div`
    @keyframes FadeInText {
        0% { opacity: 0.2; }
        100% { opacity: 1; }
    }
    .vision{
        animation: FadeInText linear 3s forwards;
        font-size: 30px;
        text-align: center;
        div:nth-child(1){
            font-size: larger;
        }
        div:nth-child(2){
            font-size: smaller;
            opacity: 0.8;
        }
    }
    .content{
        animation: FadeInText linear 3s forwards;
        margin: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .col{
            display: flex;
            flex-direction: column;
        }
        .item{
            width: 300px;
            height: 150px;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 20px;
        }
        .left{
            border-right: 1px solid rgba(255,255,255,0.3);
        }
        .top {
            border-bottom: 1px solid rgba(255,255,255,0.3);
        }
    }
`;

const Vision = () => {

    return (
        <StyledBox>
            <FullScreen bg={bg} x={20} size={200} overlay='rgba(0,0,0,0.6)' justify='center' align='center'>
                <div className='vision'>
                    {landingData.vision.map((p, i) => i < 2 && <div key={i}>{p}</div>)}
                </div>
                <div className='content'>
                    <div className='col left'>
                        {landingData.vision.map((p, i) => i >= 2 && i % 2 === 0 &&
                            <div key={i} className={i === 2 ? 'item top' : 'item'}>
                                <AppsSharpIcon fontSize='large' />
                                {p}
                            </div>
                        )}
                    </div>
                    <div className='col'>
                        {landingData.vision.map((p, i) => i >= 2 && i % 2 !== 0 &&
                            <div key={i} className={i === 3 ? 'item top' : 'item'}>
                                <AppsSharpIcon fontSize='large' />
                                <span>{p}</span>
                            </div>
                        )}
                    </div>
                </div>
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Vision);