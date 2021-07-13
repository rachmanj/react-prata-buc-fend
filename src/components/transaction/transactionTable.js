import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';

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

const TransactionTable = ({ transactions }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Asset</StyledTableCell>
              <StyledTableCell align="left">Jenis Perbaikan</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {transactions ? (
              transactions.data.map((item, i) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>{i + 1}</StyledTableCell>
                  <StyledTableCell>
                    <Moment format="DD-MMM-YYYY">{item.date}</Moment>
                  </StyledTableCell>
                  <StyledTableCell>{item.assetbuc.name}</StyledTableCell>
                  <StyledTableCell>{item.jenis_perbaikan}</StyledTableCell>
                  <StyledTableCell>
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={'text'}
                      value={item.amount}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{item.status}</StyledTableCell>
                  <StyledTableCell component="td" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginRight: '5px' }}
                      // onClick={() => gotoEdit(item._id)}
                    >
                      Detail
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

export default TransactionTable;
