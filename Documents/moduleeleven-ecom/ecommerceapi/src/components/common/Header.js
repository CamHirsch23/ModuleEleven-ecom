import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;