import { MATERIALS_GET_ALL, MATERIAL_ADD } from '../types';

export default function materialReducer(state = {}, action) {
  switch (action.type) {
    case MATERIALS_GET_ALL:
      return { ...state, all: action.payload };
    case MATERIAL_ADD:
      return { ...state, lastAdded: action.payload };
    default:
      return state;
  }
}
