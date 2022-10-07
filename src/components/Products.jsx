import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';

import AppContext from '../context/AppContext';

const Products = () => {
  //destructuramos los elementos que vamos a usar del contexto
  const { products, addToCart } = useContext(AppContext);
  console.log('silvino', products);

  //funcion para agregar al carrtio, proveniente del c
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
