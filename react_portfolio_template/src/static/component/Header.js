import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../image/logo.svg';
import menu2 from 'react-useanimations/lib/menu2'
import UseAnimations from "react-useanimations";
import { Link } from 'react-router-dom';

const StyledBox = styled.div`
    position: fixed;
    display: flex;
    height: 60px;
    width: 95%;
    padding: 1rem 2rem 0rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        div{
            display: inline-flex;
            text-transform: capitalize;
            font-size: 24px;
            margin-left: 0.5rem;
            align-self: center;
        }
    }

`;

const Header = ({ setMenu }) => {
    const [clicked, setClicked] = useState(false);
    const [link, setLink] = useState('/menu');


    const handleToggle = () => {
        setClicked(!clicked);
        setMenu(clicked ? 1 : 0);
        setLink(clicked ? '/menu' : '/');
    };
    return (
        <StyledBox>
            <a href='/'><img src={logo} alt='logo' width='115px' /><div>lighthouse</div></a>
            <Link to={link}><UseAnimations
                id='hamburger'
                animation={menu2} size={45} strokeColor={'#e2e5e9'} speed={2}
                onClick={handleToggle} reverse={clicked} /></Link>
        </StyledBox>
    );
}

export default React.memo(Header);