import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Button,
} from '@material-ui/core';

import { errorHelper } from 'utils/tools';

import { validation } from './formValues';
import { categoryAll } from 'store/actions/category.action';
import { assetAddAction } from 'store/actions/asset.action';

const AddAsset = props => {
  const categories = useSelector(state => state.categories.all);
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      categories_id: 0,
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const handleSubmit = values => {
    dispatch(assetAddAction(values));
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/assets');
    }
  }, [notifications, props.history]);

  useEffect(() => {
    dispatch(categoryAll());
  }, [dispatch]);

  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <div page_title_wrapper>
          <Typography variant="h4">Add Category</Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              name="name"
              label="Enter asset name"
              variant="standard"
              {...formik.getFieldProps('name')}
              {...errorHelper(formik, 'name')}
            />
          </div>
          <TextField
            style={{ width: '100%', marginBottom: '10px' }}
            name="name"
            label="Enter description"
            variant="standard"
            {...formik.getFieldProps('description')}
            {...errorHelper(formik, 'description')}
          />
          <FormControl variant="standard" style={{ width: '100%' }}>
            <Typography variant="h6">Select Category</Typography>
            <Select
              name="categories_id"
              {...formik.getFieldProps('categories_id')}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories && categories.data
                ? categories.data.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>

          <div style={{ marginTop: '10px' }}>
            <Button variant="contained" color="primary" type="submit">
              Add asset
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddAsset;
