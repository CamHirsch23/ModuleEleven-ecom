import React, { useState } from 'react';

function ProductForm({ onProductAdd }) {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    .then(response => {
      if (response.ok) {
        alert('Product added successfully');
        onProductAdd();
      } else {
        throw new Error('Failed to add product');
      }
    })
    .catch(error => {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleChange} required />
      <label>Price:</label>
      <input type="number" name="price" value={product.price} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;