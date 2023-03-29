import React from 'react';
import cart from '../images/cart.svg';

const Product = (props) => {
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="border-2 rounded-md p-2">
      <img
        className="rounded-md"
        src={props.product.img}
        alt={props.product.name}
      />
      <div className="p-3">
        <p className="text-xl leading-8">{props.product.name}</p>
        <p className="text-base leading-7">Price: {props.product.price}</p>
        <p className="text-sm leading-4">
          Manufacturer: {props.product.seller}
        </p>
        <p className="text-sm leading-4">Rating: {props.product.ratings}</p>
      </div>
      {/* why we used anonymus function at onclick? 
          Cause if we use handleAddToCart with parenthesis or parameter, react will call the function during compilation. React will not wait for click. That's why we dont use parenthesis when we call a function inside onclick */}
      <button
        className="border-2 rounded-md p-2 bg-[#FFE0B3] hover:bg-[#fac069] w-full flex justify-center"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart
        <img src={cart} alt="" className="w-5 h-5 my-auto ml-2" />
      </button>
    </div>
  );
};

export default Product;
