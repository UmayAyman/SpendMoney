import React from 'react';
import './Receipt.css';

const Receipt = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="receipt-container">
      <h2>Your Receipt</h2>
      <hr />
      {items.map((item, index) => (
        <div key={index} className="receipt-item">
          <span><b>{item.name}</b></span>
          <span><b>{item.quantity}x</b></span>
          <span className='price'><b>${(item.price * item.quantity).toFixed(2)}</b></span>
        </div>
      ))}
      <hr />
      <div className="receipt-total">
        <h2>TOTAL</h2>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Receipt;
