import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import OrderForm from './components/orders/OrderForm';
import OrderHistory from './components/orders/OrderHistory';

function App() {
  return (
    <Router>
      <div>
        <h1>My E-commerce App</h1>
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/order" component={OrderForm} />
          <Route path="/order-history" component={OrderHistory} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;