import * as actions from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };

    case actions.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case actions.GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };

    case actions.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };

    default:
      return state;
  }
};

export default profileReducer;
