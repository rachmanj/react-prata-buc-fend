import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import FormHelperText from '@material-ui/core/FormHelperText';

import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TransactionItems = ({ materials }) => {
  const classes = useStyles();

  const [itemFields, setItemFields] = useState([
    { material: '', qty: 0, price: 0, total: 0 },
  ]);

  const handleAddFields = () => {
    setItemFields([
      ...itemFields,
      { material: '', qty: 0, price: 0, total: 0 },
    ]);
  };

  const handleRemoveFields = index => {
    const values = [...itemFields];
    values.splice(index, 1);
    setItemFields(values);
  };

  return (
    <>
      {itemFields.map((itemField, index) => (
        <div key={index}>
          <FormControl className={classes.formControl}>
            <InputLabel id="material_id">Material</InputLabel>
            <Select labelId="material_id" name="material_id[]">
              <MenuItem>
                <em>None</em>
              </MenuItem>
              {materials && materials.data
                ? materials.data.map(material => (
                    <MenuItem key={material.id} value={material.id}>
                      {material.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField name="qty[]" label="Qty" />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField name="price[]" label="Price" />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField name="total[]" label="Total" />
          </FormControl>

          <IconButton onClick={() => handleAddFields()}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={() => handleRemoveFields(index)}>
            <RemoveIcon />
          </IconButton>
        </div>
      ))}
    </>
  );
};

export default TransactionItems;
