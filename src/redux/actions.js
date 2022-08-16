export const SET_USER_UUID = "SET_USER_UUID";
export const GET_CITIES = "GET_CITIES";


const API_URL = "https://mocki.io/v1/8cb770c0-6948-4d96-81bf-83d21da310b3";
const UUID_URL = global.URL_BASE + '/is_registered/' + global.UUID

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

export const getUUID = () => {
  try {
    return async (dispatch) => {
      console.log(UUID_URL)
      const result = await fetch(UUID_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_UUID,
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

export const setUUID = (uuid) => (dispatch) => {
  dispatch({
    type: SET_USER_UUID,
    payload: uuid,
  });
};
