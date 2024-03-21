import React from 'react';
import carrito from '../assets/img/carrito.png';
import logo from '../assets/img/logo.png';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = ({ children }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                <img src={logo} alt="loguito" width="40" height="40" class="d-inline-block align-text-top"></img>
            
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Acerca de</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Ubicación</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Iniciar Sesión</a>
                        </li>
                    </ul>
                    </div>
                <div className="navbar-nav ml-auto d-flex align-items-center"> 
                    <CartWidget />
                    <img src={carrito} alt="cart" className="cart" />
                </div>
            </div>
            {children}
        </nav>
    );
}

export default NavBar;


