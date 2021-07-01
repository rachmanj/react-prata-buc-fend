import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
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

const MaterialTable = ({ materials }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">uom</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {materials ? (
              materials.data.map((item, i) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>{i + 1}</StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.description}</StyledTableCell>
                  <StyledTableCell>{item.uom}</StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginRight: '5px' }}
                      // onClick={() => gotoEdit(item._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => alert('remove')}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <Typography variant="h5">No data found</Typography>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MaterialTable;
