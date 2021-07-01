import { ASSETS_GET_ALL, ASSET_ADD } from '../types';

export default function assetsGetAll(state = {}, action) {
  switch (action.type) {
    case ASSETS_GET_ALL:
      return { ...state, all: action.payload };
    case ASSET_ADD:
      return { ...state, lastAdded: action.payload };
    default:
      return state;
  }
}
