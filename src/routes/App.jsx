import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  //validamos que le initialState tengo valores
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (
        // encapsulamos todo las rutas con el context
        <AppContext.Provider value={initialState}>
          {/* encapsulamos toda la navegacion de nuestro aplicativo */}
          <BrowserRouter>
            {/* encapsulamos todas las rutas en el layout que contiene el header y footer */}
            <Layout>
              {/* poder mostrar las rutas */}
              <Switch>
                {/* espesificamos las rutas */}
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route
                  exact
                  path="/checkout/information"
                  component={Information}
                />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default App;
