import { combineReducers } from 'redux';
import categories from './category.reducer';
import notifications from './notification.reducer';

const appReducers = combineReducers({
  categories,
  notifications,
});

export default appReducers;
