import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

const StyledBox = styled.div`
    color: #444;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .name{
        color: #00338d;
        font-size: 54px;
        text-transform: capitalize;
        margin: 2rem 0 1rem 3rem;
        text-shadow: 1px 1px 3px #bdbdbd;
    }
    .title{
        font-size: 24px;
        text-transform: capitalize;
        padding-bottom: .2rem;
        margin-bottom: .8rem;
        border-bottom: .3px solid #eee;
    }
    .desc{
        padding: 1rem 3rem;
        .TitleContent{
            margin-bottom: 2rem;
        }
        .descContent{
            opacity: 0.8;  
        } 
        .tech{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: .5rem;
        }
    }
    .arch{
        padding: 0 3rem; 
    }
    .demo{
        align-self: center;
        width: 90%;
        margin: 2rem;
    }
    
`;

const Desc = ({ desc }) => {
    return (
        <div className='desc'>
            {desc.map((d, i) =>
                <div key={i} className='TitleContent'>
                    <div className='title'>{d.title}</div>
                    {d.title === "Used Technology"
                        ? <div>{d.content.split(',').map((line, i) => <div key={i} className='tech'><ArrowRightSharpIcon />{line}</div>)}</div>
                        : <div className='descContent'>{d.content}</div>
                    }
                    {d.image && <img src={`/architecture/${d.image}`} alt='desc' width='100%' />}
                </div>
            )}

        </div>
    );
}

const Arch = ({ arch }) => {
    return (
        arch && (
            <div className='arch'>
                <div className='title'>Architecture</div>
                <img src={`/architecture/${arch}`} alt='architecture' width='100%' />
            </div>
        )
    );
}

const Demo = ({ mp4 }) => {
    return (
        mp4 && (
            <div className='demo'>
                <div className='title'>How to use</div>
                <video controls width='100%'>
                    <source src={`/demovideo/${mp4}`} type="video/mp4" loop={true} />
                </video>
            </div>
        )
    );
}



const ItemDetail = ({ item }) => {
    const { name, link, desc, arch, mp4 } = item;

    return (
        <StyledBox>
                <div className='name'>{name}</div>
                <Desc desc={desc} />
                <Arch arch={arch} />
                <Demo mp4={mp4} />
        </StyledBox>
    );
}

export default React.memo(ItemDetail);