import React, { useEffect } from 'react';
import { Container, Typography, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import CategoryTable from './categoryTable';

import { categoryAll } from 'store/actions/category.action';

const CategoryPage = () => {
  const categories = useSelector(state => state.categories.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryAll());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4">Category Page</Typography>
      <CategoryTable categories={categories} />
    </Container>
  );
};

export default CategoryPage;
