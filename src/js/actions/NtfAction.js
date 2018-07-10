import * as actionTypes from './NtfActionTypes';
import Axios from 'axios';

// const apiUrl = 'http://localhost:8000/proxy/omc/notifications';

// const config = {
//   headers: {'Authorization': '2a690c91bf9ff33dd66ce6ca2494eedcf3160f4984f2f371df2b7e694c95dd84'}
// };
const apiUrl = 'http://5b3f2f1ac3c3fb00147428ab.mockapi.io/proxy/omc/notification'

export const createNtf = (notification) => {
    return (dispatch) => {
      return Axios.post(apiUrl, notification)
        .then(response => {
          dispatch(createNtfSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };


  export const fetchNtfs = () => {
    return (dispatch) => {
      return Axios.get(apiUrl)
        .then(response => {
          dispatch(fetchNtfsSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const createNtfSuccess = (ntf) => {
    return {
      type: actionTypes.CREATE_NTF_SUCCESS,
      ntf
    }
  };


  // action creator fetchNtfsSuccess, created an action which include {type, ntfs ( known as payload)}
  export const fetchNtfsSuccess = (ntfs) => {
    return {
      type: actionTypes.FETCH_NTFS_SUCCESS,
      ntfs
    }
  };
  