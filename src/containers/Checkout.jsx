import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM NAME</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i class="iconsM fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type="button">
          <Link to="/Checkout/information">Continuar Pedido</Link>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
