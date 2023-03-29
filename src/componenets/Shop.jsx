import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    //step 01: get id
    for (const id in storedCart) {
      //step 02: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //setp 03: get quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step 04:add the addedProduct to the saved cart
        savedCart.push(addedProduct);
      }
    }
    //set the cart
    setCart(savedCart);
  }, [products]);

  // useEffect(() => {
  //   const storedCart = getShoppingCart();

  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     const quantity = storedCart[id];
  //     addedProduct.quantity = quantity;
  //   }
  // }, [products]);

  const handleAddToCart = (product) => {
    //   we can create new array like this 'const newArr = [...prevArr, newElement]'
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-3 gap-5 p-5">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
