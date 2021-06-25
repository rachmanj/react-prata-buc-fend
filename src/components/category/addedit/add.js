import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, Typography, TextField, Button } from '@material-ui/core';

import { categoryAdd } from 'store/actions/category.action';

const AddCategory = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Harus diisi'),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const handleSubmit = values => {
    dispatch(categoryAdd(values));
  };

  return (
    <Container>
      <Typography variant="h6">Add Category</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          variant="standard"
          label="Enter Category Name"
          {...formik.getFieldProps('name')}
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default AddCategory;
