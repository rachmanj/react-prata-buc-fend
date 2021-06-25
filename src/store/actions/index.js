import {
  CATEGORY_GET_ALL,
  CATEGORY_ADD,
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
} from '../types';

// category
export const categoryGetAll = data => ({
  type: CATEGORY_GET_ALL,
  payload: data,
});

export const categoryAdd = category => ({
  type: CATEGORY_ADD,
  payload: category,
});

/// NOTIFICATIONS
export const errorGlobal = msg => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = msg => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};
