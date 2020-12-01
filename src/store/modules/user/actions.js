import { api, user } from '../action-types';
import { BASE_URL } from '../../../utils/axios';

export const getAllUser = (offset, limit, search) => {
  return (dispatch) => {
    dispatch({ type: user.FETCHING_DATA_USER });
    return BASE_URL.get(
      `${api}/get-users?offset=${offset}&limit=${limit}&search=${search}`
    )
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: user.GET_ALL_USER,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};

export const postUser = (data) => {
  return (dispatch) => {
    return BASE_URL.post(`${api + '/add-user'}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: user.POST_USER,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        console.log(err.response);

        return false;
      });
  };
};
export const updateUser = (id, data) => {
  return (dispatch) => {
    return BASE_URL.put(`${api + '/update-user/' + id}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: user.UPDATE_USER,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    return BASE_URL.delete(`${api + '/delete-user/' + id}`)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: user.DELETE_USER,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
