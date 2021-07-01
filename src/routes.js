import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Home from 'components/home';
import Header from 'components/navigation/header';
import Footer from 'components/navigation/footer';

import CategoryPage from 'components/category';
import AddCategory from 'components/category/addedit/add';
import AssetsPage from 'components/product';
import AddAsset from 'components/product/addedit/add';
import MaterialPage from 'components/material';
import AddMaterial from 'components/material/addedit/add';
import TransactionPage from 'components/transaction';

const Routes = () => {
  return (
    <BrowserRouter className="App">
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/assets/add_asset" component={AddAsset} />
          <Route path="/assets" component={AssetsPage} />
          <Route path="/category/add_category" component={AddCategory} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/materials/add_material" component={AddMaterial} />
          <Route path="/materials" component={MaterialPage} />
          <Route path="/transactions" component={TransactionPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
