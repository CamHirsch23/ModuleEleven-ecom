import React, { useState } from 'react';

function CreateCustomerForm({ onCustomerCreated }) {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
      });
      if (!response.ok) throw new Error('Failed to create customer');
      const data = await response.json();
      onCustomerCreated(data);
      setCustomer({ name: '', email: '', phone: '' }); // Reset form
      alert('Customer created successfully!');
    } catch (error) {
      console.error('Error creating customer:', error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={customer.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={customer.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={customer.phone} onChange={handleChange} required />
      </div>
      <button type="submit">Create Customer</button>
    </form>
  );
}

export default CreateCustomerForm;