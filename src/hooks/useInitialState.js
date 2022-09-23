import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  //contiene el estado inicial proveniendo del arreglo
  const [state, setState] = useState(initialState);

  //funcion para agregar al carrito
  const addToCart = (payload) => {
    //setiamos el estado, y obtenemos lo que ya tengamos, y en cart agregamos lo que ya tenemos mas lo que le pasemos en el payload
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    //setiamos el estado, en cart filtramos  guardamos todos los items que sea diferente a el payload
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
