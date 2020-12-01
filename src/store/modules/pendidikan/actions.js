import { api, pendidikan } from '../action-types';
import { BASE_URL } from '../../../utils/axios';

export const getAllPendidikan = () => {
  return (dispatch) => {
    dispatch({ type: pendidikan.FETCHING_DATA_PENDIDIKAN });
    return BASE_URL.get(`${api + '/get-pendidikans'}`)
      .then((res) => {
        console.log('pendidikan');
        console.log(res);
        dispatch({
          type: pendidikan.GET_ALL_PENDIDIKAN,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const postPendidikan = (data) => {
  return (dispatch) => {
    return BASE_URL.post(`${api + '/add-pendidikan'}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: pendidikan.POST_PENDIDIKAN,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const updatePendidikan = (id, data) => {
  return (dispatch) => {
    return BASE_URL.put(`${api + '/update-pendidikan/' + id}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: pendidikan.UPDATE_PENDIDIKAN,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const deletePendidikan = (id) => {
  return (dispatch) => {
    return BASE_URL.delete(`${api + '/delete-pendidikan/' + id}`)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: pendidikan.DELETE_PENDIDIKAN,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
