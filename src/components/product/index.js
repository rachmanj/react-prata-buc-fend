import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';

import ProductTable from 'components/product/productTable';

import { assetsGetAllAction } from 'store/actions/asset.action';

const ProductsPage = () => {
  const assets = useSelector(state => state.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(assetsGetAllAction());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <div className="page_title_wrapper">
          <Typography align="center" variant="h4">
            Assets List
          </Typography>
        </div>
        <hr />
        <div style={{ marginBottom: '10px' }}>
          <Link to="/assets/add_asset" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
            >
              Tambah Asset
            </Button>
          </Link>
        </div>
        <ProductTable assets={assets.all} />
      </div>
    </Container>
  );
};

export default ProductsPage;
