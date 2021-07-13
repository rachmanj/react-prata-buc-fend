import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Typography, Button } from '@material-ui/core';

import { transactionsGetAllAction } from 'store/actions/transaction.action';

import TransactionTable from './transactionTable';

const TransactionPage = () => {
  const transactions = useSelector(state => state.transactions.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsGetAllAction());
  }, [dispatch]);
  return (
    <>
      <Container>
        <div className="page_title_wrapper">
          <Typography align="center" variant="h4">
            Transaction List
          </Typography>
        </div>
        <hr />
        <div style={{ marginBottom: '10px' }}>
          <Link
            to="/transactions/add_transaction"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
            >
              Tambah Transaksi
            </Button>
          </Link>
        </div>
        <TransactionTable transactions={transactions} />
      </Container>
    </>
  );
};

export default TransactionPage;
