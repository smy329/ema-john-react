import React from 'react';
import icon_delete from '../images/delete.svg';

const ReviewItem = (props) => {
  const { handleRemoveCart } = props;
  const { id, img, price, name, quantity } = props.product;
  return (
    <div className="border border-[#95A0A7] rounded-lg p-2 flex items-center">
      <img src={img} alt={name} className="h-24 w-24 rounded-lg mr-5" />
      <div className="flex-grow">
        <p className="font-normal text-xl leading-6 tracking-[0.0015em]">
          {name}
        </p>
        <p>
          Price: <span className="text-amber-600">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="text-amber-600">{quantity}</span>{' '}
        </p>
      </div>
      <button
        className="bg-red-100 rounded-full h-14 w-14"
        onClick={() => handleRemoveCart(id)}
      >
        <img src={icon_delete} alt="delete button" className="" />
      </button>
    </div>
  );
};

export default ReviewItem;
