import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-3 gap-5 p-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div>
        <h1>Order Summaary</h1>
      </div>
    </div>
  );
};

export default Shop;
