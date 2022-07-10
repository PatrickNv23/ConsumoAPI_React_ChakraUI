import React from 'react';
import '../styles/Header.css';
function Header(props) {
    return (
        <header className='header'>
            {props.headerTitle}
        </header>
    );
}


export default Header;