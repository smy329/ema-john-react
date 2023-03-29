import React from 'react';

const Cart = (props) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of props.cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = totalPrice * 0.07;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="bg-[#FF99004D] sticky top-0">
      <h6>Order Summaary</h6>
      <p>Selected Items: {props.cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
