import { useState, useEffect } from 'react';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const addProduct = (productData) => {
    setLoading(true);
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      setProducts(prevProducts => [...prevProducts, data]);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
  };

  return { products, loading, error, addProduct };
}

export default useProducts;