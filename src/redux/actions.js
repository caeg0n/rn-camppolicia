export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AGE = "SET_USER_AGE";
export const GET_CITIES = "GET_CITIES";

const API_URL = "https://mocki.io/v1/8cb770c0-6948-4d96-81bf-83d21da310b3";

export const getCities = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log("unable to fectch");
      }
    };
  } catch (error) {
    console.log();
  }
};

export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = (age) => (dispatch) => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};
