import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

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

const ProductTable = ({ assets }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Nama Asset</StyledTableCell>
              <StyledTableCell align="left">Keterangan</StyledTableCell>
              <StyledTableCell align="left">Kategori</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets ? (
              assets.data.map((item, i) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="td" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {item.description}
                  </StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    {item.category.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <Typography variant="h6">Data Not found</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {assets && assets.current_page ? (
        <Pagination count={assets.total} />
      ) : null}
    </>
  );
};

export default ProductTable;
