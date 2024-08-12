import { useState, useEffect } from 'react';

function useOrders(customerId) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (customerId) {
      setLoading(true);
      fetch(`/api/orders/history/${customerId}`)
        .then(response => response.json())
        .then(data => {
          setOrders(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [customerId]);

  const placeOrder = (orderData) => {
    setLoading(true);
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
      setOrders(prevOrders => [...prevOrders, data]);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
  };

  return { orders, loading, error, placeOrder };
}

export default useOrders;