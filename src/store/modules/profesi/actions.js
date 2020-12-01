import { api, profesi } from '../action-types';
import { BASE_URL } from '../../../utils/axios';

export const getAllProfesi = () => {
  return (dispatch) => {
    dispatch({ type: profesi.FETCHING_DATA_PROFESI });
    return BASE_URL.get(`${api + '/get-profesis'}`)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: profesi.GET_ALL_PROFESI,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const postProfesi = (data) => {
  return (dispatch) => {
    return BASE_URL.post(`${api + '/add-profesi'}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: profesi.POST_PROFESI,
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
export const updateProfesi = (id, data) => {
  return (dispatch) => {
    return BASE_URL.put(`${api + '/update-profesi/' + id}`, data)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: profesi.UPDATE_PROFESI,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
export const deleteProfesi = (id) => {
  return (dispatch) => {
    return BASE_URL.delete(`${api + '/delete-profesi/' + id}`)
      .then((res) => {
        console.log(res.data.Data);
        dispatch({
          type: profesi.DELETE_PROFESI,
          payload: res.data.Data,
        });
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};
