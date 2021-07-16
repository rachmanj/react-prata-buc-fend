import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { errorHelper } from 'utils/tools';

import { validation, formValues } from './formValues';
import { assetsGetAllAction } from 'store/actions/asset.action';
import {
  testingAddAction,
  transactionAddAction,
} from 'store/actions/transaction.action';

const AddTransaction = props => {
  const notifications = useSelector(state => state.notifications);
  const assets = useSelector(state => state.assets.all);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const handleSubmit = values => {
    console.log(values);
    dispatch(transactionAddAction(values));
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      // props.history.push('/transactions');
    }
  }, [notifications]);

  useEffect(() => {
    dispatch(assetsGetAllAction());
  }, [dispatch]);

  return (
    <Container>
      <h1>Add Transaction</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <TextField
            name="date"
            type="date"
            label="Date"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            {...formik.getFieldProps('date')}
            {...errorHelper(formik, 'date')}
          />
        </div>
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
            <MenuItem value="">
              <em>Select Asset to Maintain</em>
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

        <div className="form-group">
          <TextField
            name="jenis_perbaikan"
            label="Jenis Perbaikan"
            variant="standard"
            {...formik.getFieldProps('jenis_perbaikan')}
            {...errorHelper(formik, 'jenis_perbaikan')}
          />
        </div>

        <div className="form-group">
          <TextField
            name="tindakan_perbaikan"
            label="Tindakan Perbaikan"
            variant="standard"
            {...formik.getFieldProps('tindakan_perbaikan')}
            {...errorHelper(formik, 'tindakan_perbaikan')}
          />
        </div>

        <div className="form-group">
          <TextField
            name="remarks"
            label="Remarks"
            variant="standard"
            {...formik.getFieldProps('remarks')}
            {...errorHelper(formik, 'remarks')}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AddTransaction;
