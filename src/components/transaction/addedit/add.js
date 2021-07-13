import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Container,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  IconButton,
} from '@material-ui/core';

import { transactionAddAction } from 'store/actions/transaction.action';
import { assetsGetAllAction } from 'store/actions/asset.action';
import { materialAllAction } from 'store/actions/material.action';
import { validation } from './formValues';
import { errorHelper } from 'utils/tools';
import TransactionItems from './transactionItems';

const AddTransaction = props => {
  const assets = useSelector(state => state.assets.all);
  const materials = useSelector(state => state.materials.all);
  const notifications = useSelector(state => state.notifications);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      date: '',
      users_id: '',
      assetbucs_id: '',
      jenis_perbaikan: '',
      tindakan_perbaikan: '',
      remarks: '',
      amount: 0,
      status: '',
      items: [],
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const handleSubmit = values => {
    console.log(values);
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/transactions');
    }
  }, [notifications, props.history]);

  useEffect(() => {
    dispatch(assetsGetAllAction());
    dispatch(materialAllAction());
  }, [dispatch]);

  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <div className="page_title_wrapper">
          <Typography variant="h5">Add Transaction</Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <FormControl
              variant="standard"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              <InputLabel id="assetbucs_id">Asset Name</InputLabel>
              <Select
                labelId="assetbucs_id"
                name="assetbucs_id"
                {...formik.getFieldProps('assetbucs_id')}
              >
                <MenuItem>
                  <em>Select asset to maintenance</em>
                </MenuItem>
                {assets && assets.data
                  ? assets.data.map(item => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </div>

          <div className="form-group">
            <TextField
              style={{ marginBottom: '10px' }}
              label="Date"
              name="date"
              type="date"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('date')}
              {...errorHelper(formik, 'date')}
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              label="Jenis Perbaikan"
              name="jenis_perbaikan"
              variant="standard"
              {...formik.getFieldProps('jenis_perbaikan')}
              {...errorHelper(formik, 'jenis_perbaikan')}
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: '100%', marginBottom: '10px' }}
              label="Tindakan Perbaikan"
              name="tindakan_perbaikan"
              variant="standard"
              {...formik.getFieldProps('tindakan_perbaikan')}
              {...errorHelper(formik, 'tindakan_perbaikan')}
            />
          </div>

          <Typography variant="h6">Materials :</Typography>

          {/* <TransactionItems formik={formik} materials={materials} /> */}
          <div style={{ marginTop: '10px' }}>
            <Button variant="contained" color="primary" type="submit">
              Add Transaction
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddTransaction;
