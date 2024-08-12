import React, { useState } from 'react';

const UpdateCustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform update logic here
    console.log('Updating customer:', name, email, phone);
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Customer Details</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateCustomerForm;