import {
  FETCH_INTRO_DATA_SUCCESS,
  FETCH_INTRO_DATA_FAILURE,
  FETCH_SKILLS_DATA_SUCCESS,
  FETCH_SKILLS_DATA_FAILURE
} from "./Constants";

const introDataInitialState = {
  loading: false,
  introData: {
  },
  error: ''
}

const skillsDataInitialState = {
  loading: false,
  skillsData: {
  },
  error: ''
}

export const infoData = (state = introDataInitialState, action) => {
  switch (action.type) {
    case FETCH_INTRO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        introData: action.payload,
        error: "",
      };
    case FETCH_INTRO_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        introData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export const skillSetData = (state = skillsDataInitialState, action) => {
  switch (action.type) {
    case FETCH_SKILLS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        skillsData: action.payload,
        error: "",
      };
    case FETCH_SKILLS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        skillsData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};