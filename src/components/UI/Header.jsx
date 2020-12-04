import React from 'react'
import './styles/Header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar of the logged in user  */}
                <Avatar 
                className="header__avatar"
                alt='user'
                src=''
                />
                {/* time icon  */}
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                {/* seaech icon */}
                <SearchIcon/>
                {/* input */}
                <input placeholder="search" />
            </div>
            <div className="header__right">
                {/* help icon */}
                < HelpOutlineIcon />

            </div>
        </div>
    )
}

export default Header
