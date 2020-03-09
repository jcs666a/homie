import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './header.scss';
import logo from '../assets/images/homie.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="container">
                <div className="left-header-container">
                    <img src={logo} alt="Homie" />
                    <span>
                        <FaHeart />
                        Favoritos
                    </span>
                </div>
                <div className="right-header-container">
                    <span>¿Cómo funciona?</span>
                    <span>Soy propietario</span>
                    <span>Iniciar sesión</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
