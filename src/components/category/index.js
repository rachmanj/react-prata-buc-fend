import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';

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
      <div className="page_title_wrapper">
        <Typography align="center" variant="h4">
          Category List
        </Typography>
      </div>
      <hr />
      <div style={{ marginBottom: '10px' }}>
        <Link to="/materials/add_material" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Tambah Material
          </Button>
        </Link>
      </div>
      <CategoryTable categories={categories} />
    </Container>
  );
};

export default CategoryPage;
