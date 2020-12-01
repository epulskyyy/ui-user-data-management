import { profesi } from '../action-types';

export const initialState = {
  data: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case profesi.FETCHING_DATA_PROFESI:
      return {
        ...state,
        isFetching: true,
      };
    case profesi.GET_ALL_PROFESI:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
