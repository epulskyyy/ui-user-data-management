import { user } from '../action-types';

export const initialState = {
  data: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case user.FETCHING_DATA_USER:
      return {
        ...state,
        isFetching: true,
      };
    case user.GET_ALL_USER:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
