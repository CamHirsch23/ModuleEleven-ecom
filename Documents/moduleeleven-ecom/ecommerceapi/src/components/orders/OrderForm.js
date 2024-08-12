import React, { useState, useEffect } from 'react';

function OrderForm({ onSubmit }) {
  const [order, setOrder] = useState({
    customerId: '',
    productId: '',
    quantity: 1,
    orderDate: new Date().toISOString().slice(0, 10) // Default to today's date
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="customerId">Customer ID:</label>
      <input
        type="text"
        id="customerId"
        name="customerId"
        value={order.customerId}
        onChange={handleChange}
        required
      />

      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        id="productId"
        name="productId"
        value={order.productId}
        onChange={handleChange}
        required
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={order.quantity}
        onChange={handleChange}
        required
      />

      <label htmlFor="orderDate">Order Date:</label>
      <input
        type="date"
        id="orderDate"
        name="orderDate"
        value={order.orderDate}
        onChange={handleChange}
        required
      />

      <button type="submit">Place Order</button>
    </form>
  );
}

export default OrderForm;