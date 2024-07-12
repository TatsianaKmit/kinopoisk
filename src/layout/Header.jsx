import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="container-wide">
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <NavLink to={"/"} >
                        <picture>
                            <source media="(max-width: 992px)" srcSet='./assets/logo_small.png' />
                            <img src='./assets/logo_big.png' />
                        </picture>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header