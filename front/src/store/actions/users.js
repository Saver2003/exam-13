import axios from '../../axios-api';
import {push} from 'react-router-redux';
import {NotificationManager} from 'react-notifications';
import {
  LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from "./actionTypes";

export const registerUserSuccess = () => {
  return {type: REGISTER_USER_SUCCESS};
};

export const registerUserFailure = error => {
  return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
  return dispatch => {
    return axios.post('/users', userData).then(
      response => {
        dispatch(registerUserSuccess());
        dispatch(push('/'));
        NotificationManager.success('Success', 'Register successful');
      },
      error => {
        dispatch(registerUserFailure(error.response.data));
      }
    );
  };
};

const loginUserSuccess = (user , token) => {
  return {type: LOGIN_USER_SUCCESS, user, token};
};

const loginUserFailure = error => {
  return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
  return dispatch => {
    return axios.post('/users/sessions', userData).then(
      response => {
        dispatch(loginUserSuccess(response.data.user, response.data.token));
        dispatch(push('/'));
        NotificationManager.success('Success', 'Login successful');
      },
      error => {
        const errorObj = error.response ? error.response.data : {error: 'No internet'};
        dispatch(loginUserFailure(errorObj));
      }
    )
  }
};

export const logoutUser = () => {
  return dispatch => {
    axios.delete('/users/sessions').then(
      response => {
        dispatch({type: LOGOUT_USER});
        dispatch(push('/'));
        NotificationManager.success('Success', 'Successfully logged out');
      },
      error => {
        NotificationManager.success('Error', 'Logout failed');
      }
    );
  }
};

export const logoutExpiredUser = () => {
  return dispatch => {
    dispatch({type: LOGOUT_USER});
    dispatch(push('/'));
    NotificationManager.success('Error', 'Your token expired');
  }
};

export const facebookLogin = data => {
  return dispatch => {
    axios.post('/users/facebookLogin', data).then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error.response.data)
      }
    )
  };
};
