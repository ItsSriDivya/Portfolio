import axios from "axios";
import NotificationPopup from "../components/resuable/NotificationPopup";
import {
  FETCH_INTRO_DATA_SUCCESS,
  FETCH_INTRO_DATA_FAILURE,
} from "./Constants";

const saveHomePageDataSuccess = (extractedData) => {
  return {
    type: FETCH_INTRO_DATA_SUCCESS,
    payload: extractedData,
  };
};

const saveHomePageDataFailure = (error) => {
  return {
    type: FETCH_INTRO_DATA_FAILURE,
    payload: error,
  };
};

export const getHomePageData = () => {
  return (dispatch) => {
    axios.get(`https://portfolio-api-vercel-fxhb9jm2q-itssridivya.vercel.app/GetIntroData/`)
      .then((response) => {
        const extractedData = response.data;
        dispatch(saveHomePageDataSuccess(extractedData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(saveHomePageDataFailure(errorMsg));
        NotificationPopup({
          type: "error",
          message: "Error while fetching Data",
          description: "",
        });
      });
  };
};