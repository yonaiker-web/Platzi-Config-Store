import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';
import '../styles/components/Icons.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        {/* usamos link para redirigir a otros componenetes  */}
        <Link to="/Checkout">
          <i class="iconsL fa-solid fa-cart-arrow-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
