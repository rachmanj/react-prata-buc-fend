import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button } from '@material-ui/core';

import { materialAllAction } from 'store/actions/material.action';

import MaterialTable from './materialTable';

const MaterialPage = () => {
  const [loading, setLoading] = useState(false);
  const materials = useSelector(state => state.materials.all);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(materialAllAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div className="page_title_wrapper">
          <Typography align="center" variant="h4">
            Material List
          </Typography>
        </div>
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
        <MaterialTable materials={materials} />
      </Container>
    </>
  );
};

export default MaterialPage;
