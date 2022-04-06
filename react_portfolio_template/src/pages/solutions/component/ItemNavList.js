import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';


const StyledBox = styled.div`
        margin-top: 4rem;
        .itemButton{
            font-size: 20px;
            margin-bottom: 1rem;
            text-align: right;
            &:hover{
                text-shadow: 0px 0px 4px #bdbdbd;
            }           
        }
        .itemButton::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #fff;
            transition: width .3s;
            
        }
        .itemButton:hover::after {
            width: 100%;
            transition: width .3s;
        }
        .selectedItem{
            color: #0091da;
        }

    
    a{
        text-decoration: none;
        color: inherit;
    }


`;


const ItemNavList = ({ items, link }) => {

    return (
        <StyledBox>
            {items.map((item, i) =>
                <NavLink key={i} to={`/solutions${link}${item.link}`} activeClassName='selectedItem'>
                    <div className='itemButton'>
                        {item.name}
                    </div>
                </NavLink>
            )}
        </StyledBox>
    );
}

export default withRouter(ItemNavList);