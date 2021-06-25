import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Home from 'components/home';
import Header from 'components/navigation/header';
import Footer from 'components/navigation/footer';

import CategoryPage from 'components/category';
import AddCategory from 'components/category/addedit/add';

const Routes = () => {
  return (
    <BrowserRouter className="App">
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/category/add_category" component={AddCategory} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
