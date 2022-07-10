import React from 'react';
import '../styles/Footer.css';
function Footer({ footerTitle }) {
    return (
        <footer className='footer'>
            {footerTitle}
        </footer>
    );
}

export default Footer;