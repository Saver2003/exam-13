import axios from '../../axios-api';
import {push} from 'react-router-redux';

import {CREATE_PLACE_SUCCESS, FETCH_ONE_PLACE_SUCCESS, FETCH_PLACES_SUCCESS} from "./actionTypes";

export const fetchPlacesSuccess = places => {
  return {type: FETCH_PLACES_SUCCESS, places};
};

export const fetchPlaces = () => {
  return dispatch => {
    axios.get('/places')
      .then(response => dispatch(fetchPlacesSuccess(response.data)));
  }
};

export const fetchOnePlaceSuccess = place => {
  return {type: FETCH_ONE_PLACE_SUCCESS, place};
};

export const fetchOnePlace = data => {
  return dispatch => {
    axios.get('/place', data)
      .then(response => dispatch(fetchOnePlaceSuccess(response.data)))
  }
}

export const createPlaceSuccess = () => {
  return {type: CREATE_PLACE_SUCCESS};
};

export const createPlace = placeData => {
  return (dispatch, getState) => {
    const headers = {
      'Token': getState().users.user.token
    };

    return axios.post('/places', placeData, {headers}).then(
      responses => {
        dispatch(createPlaceSuccess());
        dispatch(push('/'));
      }

    );
  };
};