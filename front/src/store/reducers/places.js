import {FETCH_PLACES_SUCCESS} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {...state, places: action.places};
    default:
      return state;
  }
};

export default reducer;