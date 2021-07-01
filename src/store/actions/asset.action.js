import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const assetsGetAllAction = () => {
  return async dispatch => {
    try {
      const assets = await axios.get(`/api/assets`);

      dispatch(actions.assetsGetAll(assets.data.data));
    } catch (error) {
      dispatch(actions.errorGlobal('Something went wrong'));
    }
  };
};

export const assetAddAction = data => {
  return async dispatch => {
    try {
      const asset = await axios.post(`/api/assets`, data);

      dispatch(actions.assetAdd(asset.data.data));
      dispatch(actions.successGlobal('Asset berhasil ditambahkan'));
    } catch (error) {
      dispatch(actions.errorGlobal('Something went wrong'));
    }
  };
};
