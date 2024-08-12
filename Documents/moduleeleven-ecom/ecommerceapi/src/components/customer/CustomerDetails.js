import React, { useEffect, useState } from 'react';

function CustomerDetails({ customerId, onDeleteSuccess }) {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/customers/${customerId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setCustomer(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching customer details:', error);
        setError('Failed to load customer details');
        setLoading(false);
      });
  }, [customerId]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      fetch(`/api/customers/${customerId}`, { method: 'DELETE' })
        .then(response => {
          if (!response.ok) throw new Error('Deletion failed');
          onDeleteSuccess(); // Alert the parent component to update UI accordingly
        })
        .catch(error => {
          console.error('Error deleting customer:', error);
          setError('Failed to delete customer');
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!customer) return <div>No customer found</div>;

  return (
    <div>
      <h1>{customer.name}</h1>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
}

export default CustomerDetails;