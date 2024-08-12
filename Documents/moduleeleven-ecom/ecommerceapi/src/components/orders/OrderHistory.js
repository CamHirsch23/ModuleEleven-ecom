import React, { useEffect, useState } from 'react';

function OrderHistory({ customerId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`/api/orders/history/${customerId}`)
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching order history:', error));
  }, [customerId]);

  return (
    <div>
      <h1>Order History</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              Order ID: {order.id}, Product ID: {order.productId}, Quantity: {order.quantity}, Order Date: {order.orderDate}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default OrderHistory;