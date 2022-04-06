import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import { Link, Switch, withRouter, Route } from 'react-router-dom';
import ItemDetail from './itemDetail';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ItemNavList from './ItemNavList';
import SolutionIntro from './SolutionIntro';
import Container from '@material-ui/core/Container';


const StyledBox = styled.div`
    .container{ display: flex; flex-direction: row; }
    .introText{
        width: 25rem;
        border-right: .72rem solid #0091da;
        padding: 1rem 3rem 0 0;
        animation: loadingBorder 1 forwards linear 5s;
        .title{
            font-size: 56px;
            text-shadow: 0px 0px 2px #dbdbdb;
            border-bottom: 1px solid;
        }
        .backBtn{
            display: flex;
            margin-top: 15rem;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .icon{ color: #43b02a;}
            &:hover{
                cursor: pointer;
                text-shadow: 0px 0px 3px #bdbdbd;
            }
        }
    }
    @keyframes loadingBorder {
        0% { height: 0; }
        50% { height: 50%; }
        100% { height: 100%; }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .contentsBox{
        color: #444;
        width: 100%;
        background: rgba(255,255,255,0.8);
        overflow: auto;
        height: 82.4vh;
        border-top-right-radius: 40px;
        scroll-behavior: smooth;
    }
    .contentsBox::-webkit-scrollbar{ width: 2px; background: transparent;}


`;


const ItemsList = ({ contents, history }) => {

    const { title, desc, descKo, items, thumbnail, link } = contents;
    // const goBack = () => { history.goBack(); };


    return (
        <StyledBox>
            <FullScreen bg={thumbnail} size={100} padding='10rem 0 0 5rem'>
                <Container className='container' maxWidth='lg'>

                    <div className='introText'>
                        <Link to={`/solutions${link}`}><div className='title'>{title}</div></Link>
                        <ItemNavList items={items} link={link} />
                        <Link to='/solutions'><div className='backBtn'><ArrowBackSharpIcon className='icon' />&ensp;다른 솔루션 더보기</div></Link>
                    </div>

                    <div className='contentsBox'>
                        <Switch>
                            <Route path={`/solutions${link}`} exact render={() => <SolutionIntro desc={desc} descKo={descKo} />} />
                            {items.map((item, i) => <Route key={i} path={`/solutions${link}${item.link}`} render={() => <ItemDetail item={item} />} />)}
                        </Switch>
                    </div>
                </Container>
            </FullScreen>
        </StyledBox>
    );
}

export default withRouter(ItemsList);