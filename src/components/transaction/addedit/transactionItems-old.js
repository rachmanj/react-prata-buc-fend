import React, { useState } from 'react';

import { TextField, IconButton, Select, MenuItem } from '@material-ui/core';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const TransactionItems = ({ formik, materials }) => {
  const [itemFields, setItemFields] = useState([
    { material: '', qty: 0, price: 0 },
  ]);

  const handleAddFields = () => {
    setItemFields([...itemFields, { material: '', qty: 0, price: 0 }]);
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
          <Select name="material_id" label="material">
            <MenuItem value="">
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
          <TextField
            type="text"
            name="material"
            label="material"
            {...formik.getFieldProps('material')}
          />
          <TextField
            type="number"
            name="qty"
            label="qty"
            {...formik.getFieldProps('qty')}
          />
          <TextField
            type="number"
            name="price"
            label="price per unit"
            {...formik.getFieldProps('price')}
          />
          <TextField
            type="number"
            name="sub_amount"
            label="Sub Amount"
            {...formik.getFieldProps('price')}
          />
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
