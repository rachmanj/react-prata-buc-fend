import { TRANSACTIONS_GET_ALL, TRANSACTION_ADD, TESTING_ADD } from '../types';

export default function transactionReducer(state = {}, action) {
  switch (action.type) {
    case TRANSACTIONS_GET_ALL:
      return { ...state, all: action.payload };
    case TRANSACTION_ADD:
      return { ...state, lastAdded: action.payload };
    case TESTING_ADD:
      return { ...state, testing: action.payload };
    default:
      return state;
  }
}
