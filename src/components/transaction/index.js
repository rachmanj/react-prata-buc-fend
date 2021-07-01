import React from 'react';

import { Container, Typography } from '@material-ui/core';

import TransactionTable from './transactionTable';

const TransactionPage = () => {
  return (
    <>
      <Container>
        <div className="page_title_wrapper">
          <Typography align="center" variant="h4">
            Transaction List
          </Typography>
        </div>
        <TransactionTable />
      </Container>
    </>
  );
};

export default TransactionPage;
