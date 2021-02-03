import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={LogoImage} alt="777" />
    </div>
);

export default logo;