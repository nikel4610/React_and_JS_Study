import React from 'react';
import styled from 'styled-components';
import FullScreen from './FullScreen';
import { menus } from '../data';
import { Link } from 'react-router-dom';


const StyledBox = styled.div`
    text-transform: uppercase;
   .menus{
       display: flex;
       flex-direction: column;
       font-size: 46px;
       font-weight: 550;
   }
   .link{
        color: white;
        text-decoration: none;
        display: inline-block;
        margin-bottom: 20px;
    }
    .link::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: #fff;
        transition: width .3s;
    }
    .link:hover::after {
        width: 100%;
        transition: width .3s;
    }
`;

const Menu = () => {
    const handleClick = (link) => {
        window.location.replace(`${link}`);
    }
    
    return (
        <StyledBox>
            <FullScreen overlay='#00338d' justify='center' align='center'>
            <div className='menus'>
                        {menus.map((m) =>
                            <div key={m.path}>
                                <Link to={m.path} className="link" onClick={() => handleClick(m.path)}>{m.name}</Link>
                            </div>
                        )}
                    </div>
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Menu);