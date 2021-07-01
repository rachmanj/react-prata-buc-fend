import * as actions from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const materialAddAction = data => {
  return async dispatch => {
    try {
      const material = await axios.post(`/api/materials`, data);

      dispatch(actions.materialAdd(material.data.data));
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};

export const materialAllAction = () => {
  return async dispatch => {
    try {
      const materials = await axios.get(`/api/materials`);

      dispatch(actions.materialsGetAll(materials.data.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error));
    }
  };
};
