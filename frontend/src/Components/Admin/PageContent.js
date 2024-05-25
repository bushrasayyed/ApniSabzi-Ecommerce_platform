// PageContent.jsx

import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import ViewProducts from './Pages/ViewProducts';

const PageContent = () => {
  return (
    <div className="PageContent">
      <Routes>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/orders" component={Orders} />
        <Route path="/customers" component={Customers} />
        <Route path="/adminproductpage" component={ViewProducts} />
      </Routes>
    </div>
  );
}

export default PageContent;
