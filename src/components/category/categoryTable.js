import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CategoryTable = ({ categories }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Nama Kategori</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories ? (
              categories.data.map((item, i) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="td" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {item.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <Typography variant="h6">Data Not found</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CategoryTable;
