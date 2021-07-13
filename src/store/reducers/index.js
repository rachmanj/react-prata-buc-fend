import { combineReducers } from 'redux';
import categories from './category.reducer';
import assets from './assets.reducer';
import materials from './material.reducer';
import transactions from './transaction.reducer';
import notifications from './notification.reducer';

const appReducers = combineReducers({
  categories,
  notifications,
  assets,
  materials,
  transactions,
});

export default appReducers;
