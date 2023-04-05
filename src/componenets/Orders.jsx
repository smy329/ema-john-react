import React, { useState } from 'react';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    console.log(id);
    const reamining = cart.filter((product) => product.id !== id);
    setCart(reamining);
    removeFromDb(id);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-1 gap-5 p-5">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
