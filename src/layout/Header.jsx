import React from 'react';
import { NavLink } from "react-router-dom";
import logo_big from '../assets/logo_big.PNG'
import logo_small from '../assets/logo_small.PNG';

function Header() {
    return (
        <div className="container-wide">
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <NavLink to={"/"} >
                        <picture>
                            <source media="(max-width: 992px)" srcSet={logo_small} alt="logo_small" />
                            <img src={logo_big} alt="logo_big" />
                        </picture>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header