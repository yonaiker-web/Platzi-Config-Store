import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';
import '../styles/components/Icons.css';

import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        {/* usamos link para redirigir a otros componenetes  */}
        <Link to="/Checkout">
          <i class="iconsM fa-solid fa-cart-arrow-down"></i>
        </Link>
        {cart.length > 0 && (
          <div className="Header-alert iconsS">{cart.length}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
