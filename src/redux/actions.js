import { DEV_API_BASE, PROD_API_BASE } from '@env'

export const SET_USER_UUID = "SET_USER_UUID";
export const GET_CITIES = "GET_CITIES";
export const GET_IS_REGISTERED = "GET_IS_REGISTERED";

if (__DEV__) {
  var UUID_URL = DEV_API_BASE + "/is_registered";
} else {
  var UUID_URL = PROD_API_BASE + "/is_registered";
}

export const getUUID = () => {
  try {
    return async (dispatch) => {
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

export const getIsRegistered = (uuid) => {
  const url = UUID_URL + "/" + uuid+".json";
  console.log(url)
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: "GET",
        headers:{'Accept': 'application/json',
                  "Content-type": "application/json; charset=UTF-8" 
                },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_IS_REGISTERED,
          payload: json,
        });
      } else {
        console.log("unable to fectch get_uuid");
      }
    };
  } catch (error) {}
};

export const setUUID = (uuid) => (dispatch) => {
  dispatch({
    type: SET_USER_UUID,
    payload: uuid,
  });
};

// export const getCities = () => {
//   try {
//     return async (dispatch) => {
//       const result = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const json = await result.json();
//       if (json) {
//         dispatch({
//           type: GET_CITIES,
//           payload: json,
//         });
//       } else {
//         console.log("unable to fectch");
//       }
//     };
//   } catch (error) {
//     console.log();
//   }
// };

