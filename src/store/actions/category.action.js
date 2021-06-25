import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const categoryAdd = data => {
  return async dispatch => {
    try {
      const category = await axios.post(
        `http://localhost:3001/api/categories`,
        data
      );

      dispatch(actions.categoryAdd(category.data.data));
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};

export const categoryAll = () => {
  return async dispatch => {
    try {
      const categories = await axios.get(
        `http://localhost:3001/api/categories`
      );

      dispatch(actions.categoryGetAll(categories.data.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.meta.message));
    }
  };
};
