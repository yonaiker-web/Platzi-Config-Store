import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.css';

import AppContext from '../context/AppContext';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  //datos ligados a nuestra cuenta
  const paypalOptions = {
    clientId:
      'AUQsp3krg3TBu3QwXEoDFuymNf6hZaLtwVVFTF9TNOfKjRsB6HTMQJFBq0LLRoD6gCnMcAP5kvqghDmQ',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  //accion cuando el pago es success
  const handlePaymentSuccess = (data) => {
    console.log('data success', data);
    //si el estado de la data es COMPLETED
    if (data.status === 'COMPLETED') {
      //creamos una nueva orden del pedido
      const newOrder = {
        //el comprador
        buyer,
        //los productos que viene en el cart
        product: cart,
        //datos del pago que nos devuelve la data o accion del api de paypal
        payment: data,
      };
      //guardamos la informacion
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }

    if (data.status === 'CANCELED') {
      console.log('Cancelo la orden');
    }
  };

  const handleSumTotal = (cart) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
