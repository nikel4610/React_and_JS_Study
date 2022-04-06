import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import { globalInsightsCenterData as data } from '../../../static/data';


const StyledBox = styled.div`
    a{
        text-decoration: none;
        color: inherit;
    }

    .item{
        width: 700px;
        border-left: 5px solid;
        margin-bottom: 4rem;
    }
    .item::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: #fff;
        transition: width .6s;
    }
    .item:hover{
        color: #00338d;
    }
    .item:hover::after {
        width: 100%;
        transition: width .6s;
    }
    .title{
        margin-left: 1rem;
        font-size: 36px;
    }
    .desc{
        margin-left: 1rem;
        font-size: 20px;
        opacity: 0.7;
    }
`;

const Contents = () => {
    return (
        <StyledBox>
            <FullScreen
                size={140} 
                justify='center'
                padding='5rem 20rem'
                bg='https://cdn.pixabay.com/photo/2017/08/13/16/34/notebook-2637733_1280.jpg'
            >
                {data.contents[data.meta.displayItemsId].items.map((item, i) =>
                    <a
                        href={item.link} key={i} className='item' target='_blank'
                        rel="noreferrer"
                        style={{ marginLeft: `${(i) * 10}%` }}
                    >
                        <div className='title'>{item.title}</div>
                        <div className='desc'>{item.desc}</div>
                    </a>
                )}
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Contents);