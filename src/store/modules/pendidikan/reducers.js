import { pendidikan } from '../action-types';

export const initialState = {
  data: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case pendidikan.FETCHING_DATA_PENDIDIKAN:
      return {
        ...state,
        isFetching: true,
      };
    case pendidikan.GET_ALL_PENDIDIKAN:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
