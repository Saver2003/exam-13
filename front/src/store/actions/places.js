import axios from '../../axios-api';
import {CREATE_PLACE_SUCCESS, FETCH_PLACES_SUCCESS} from "./actionTypes";

export const fetchPlacesSuccess = places => {
  return {type: FETCH_PLACES_SUCCESS, places};
};

export const fetchPlaces = () => {
  return dispatch => {
    axios.get('/places')
      .then(response => dispatch(fetchPlacesSuccess(response.data)));
  }
};

export const createPlaceSuccess = () => {
  return {type: CREATE_PLACE_SUCCESS};
};

export const createPlace = placeData => {
  return (dispatch, getState) => {
    const headers = {
      'Token': getState().users.user.token
    };

    return axios.post('/places', placeData, {headers})
      .then(responses => dispatch(createPlaceSuccess()));
  };
};