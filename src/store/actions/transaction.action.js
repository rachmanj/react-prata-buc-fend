import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const transactionAddAction = data => {
  return async dispatch => {
    try {
      const transData = { ...data, users_id: 1, status: 'PENDING', items: [] };
      console.log(transData);
      const transaction = await axios.post(`/api/transactions`, transData);
      dispatch(actions.transactionAdd(transaction.data.data));
      dispatch(actions.successGlobal('Transaction successfully added'));
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};

export const transactionsGetAllAction = data => {
  return async dispatch => {
    try {
      const transactions = await axios.get(`/api/transactions`);
      dispatch(actions.transactionsGetAll(transactions.data.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};

export const testingAddAction = data => {
  return async dispatch => {
    try {
      const transaction = await axios.post(`/api/transactions/test`, data);
      dispatch(actions.testingAdd(transaction.data.data));
      dispatch(actions.successGlobal('Transaction successfully Tested'));
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};
