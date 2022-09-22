import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';

import AppContext from '../context/AppContext';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  //almacena la referencia de lo que este en el formulario
  const form = useRef(null);
  //almacena el historial de la navegacion
  const history = useHistory();
  const { cart } = state;

  //accion al pagar
  const handleSubmit = () => {
    //guardamos en formData y creamo un nuevo FormData y le pasamos el current (todo) desde la refernecia del formulario
    const formData = new FormData(form.current);
    //creamos un comprador y almacenamos en cada una de ellas un formData obtenido por en name del formulario
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };
  console.log('form', form);

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto: </h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={() => handleSubmit()}>
              Pagar
            </button>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedidos: </h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
