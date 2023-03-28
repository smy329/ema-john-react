import React from 'react';

const Product = (props) => {
  console.log(props);
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
      <button className="border-2 rounded-md p-2 bg-[#FFE0B3] hover:bg-[#fac069] w-full ">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
