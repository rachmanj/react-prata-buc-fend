import {
  CATEGORY_GET_ALL,
  CATEGORY_ADD,
  ASSETS_GET_ALL,
  ASSET_ADD,
  MATERIALS_GET_ALL,
  MATERIAL_ADD,
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

// ASSETS
export const assetsGetAll = data => ({
  type: ASSETS_GET_ALL,
  payload: data,
});

export const assetAdd = asset => ({
  type: ASSET_ADD,
  payload: asset,
});

// MATERIALS
export const materialsGetAll = data => ({
  type: MATERIALS_GET_ALL,
  payload: data,
});

export const materialAdd = material => ({
  type: MATERIAL_ADD,
  payload: material,
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
