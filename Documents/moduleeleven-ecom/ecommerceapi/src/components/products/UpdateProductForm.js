import React, { useState, useEffect } from 'react';

function UpdateProductForm({ productId, onUpdate }) {
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(productId, product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleChange} required />
      <label>Price:</label>
      <input type="number" name="price" value={product.price} onChange={handleChange} required />
      <button type="submit">Update Product</button>
    </form>
  );
}

export default UpdateProductForm;