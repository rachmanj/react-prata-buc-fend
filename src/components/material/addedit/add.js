import Reat, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography, TextField, Button } from '@material-ui/core';

import { errorHelper } from 'utils/tools';
import { validation } from './formValues';
import { materialAddAction } from 'store/actions/material.action';

const AddMaterial = props => {
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      uom: '',
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const handleSubmit = values => {
    dispatch(materialAddAction(values));
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/materials');
    }
  }, [notifications, props.history]);

  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <div page_title_wrapper>
          <Typography variant="h4">Add Material</Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              name="name"
              label="Material Name"
              variant="standard"
              {...formik.getFieldProps('name')}
              {...errorHelper(formik, 'name')}
            />
          </div>
          <div>
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              name="description"
              label="Description"
              variant="standard"
              {...formik.getFieldProps('description')}
              {...errorHelper(formik, 'description')}
            />
          </div>
          <div>
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              name="uom"
              label="UOM"
              variant="standard"
              {...formik.getFieldProps('uom')}
              {...errorHelper(formik, 'uom')}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button variant="contained" color="primary" type="submit">
              Add material
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddMaterial;
