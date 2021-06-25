import { CATEGORY_GET_ALL } from '../types';

export default function categoryReducer(state = {}, action) {
  switch (action.type) {
    case CATEGORY_GET_ALL:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
