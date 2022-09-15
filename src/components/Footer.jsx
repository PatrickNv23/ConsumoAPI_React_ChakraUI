import React from 'react';
import '../styles/Footer.css';
function Footer({ footerTitle }) {
    return (
        <footer className='footer'>
            <div className='div_textFooter'>
                {footerTitle}
                <small>Desarrollado por: Patrick Navarro</small>
            </div>

        </footer>
    );
}

export default Footer;