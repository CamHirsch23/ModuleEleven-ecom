import React, { useEffect, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  const handleDelete = () => {
    fetch(`/api/products/${productId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          alert('Product deleted successfully');
        } else {
          throw new Error('Failed to delete product');
        }
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      });
  };

  const toggleModal = () => setShowModal(!showModal);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={toggleModal}>Delete Product</button>
      {showModal && (
        <ConfirmationModal
          onConfirm={handleDelete}
          onCancel={toggleModal}
          message="Are you sure you want to delete this product?"
        />
      )}
    </div>
  );
}

export default ProductDetails;