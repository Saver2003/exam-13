import {FETCH_ONE_PLACE_SUCCESS, FETCH_PLACES_SUCCESS} from "../actions/actionTypes";

const initialState = {
  places: [],
  place: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {...state, places: action.places};
    case FETCH_ONE_PLACE_SUCCESS:
      return{...state, place: action.place};
    default:
      return state;
  }
};

export default reducer;