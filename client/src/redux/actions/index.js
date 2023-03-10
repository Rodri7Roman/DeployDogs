import axios from "axios";
import {
  GET_DOGS,
  GET_DOG,
  GET_TEMPERAMENTS,
  SEARCH_DOGS,
  FILTER_BY_CREATION,
  ORDER_BY_LETTERS,
  FILTER_BY_TEMPERAMENTS,
  ORDER_BY_WEIGHT,
  CLEAN_DOG,
  CREATE_DOG,
} from "./types";




// export function getDogs() {
//   return function (dispatch) {
//     try {
//       setTimeout(() => {
//         return axios.get("/dogs").then((response) => {
//           dispatch({ type: GET_DOGS, payload: response.data });
//         });
//       }, 2000);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }


// me va a devolver una funcion
export const getDogs = () => {
  // recibe como parametro el dispatch
  return async (dispatch) => {
    try {
      const response = await axios.get("/dogs");
      const dogs = response.data;
      dispatch({
        type: GET_DOGS,
        payload: dogs,
      });
    } catch (error) {
      alert(error.message);
      // dispatch({
      //   type: ERROR,
      //   payload: error.message,
      // });
    }
  };
};

export const getDog = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/dogs/${payload}`);
      const dog = response.data;
      return dispatch({
        type: GET_DOG,
        payload: dog,
      });
    } catch (error) {
      alert(error.response.data);
      // dispatch({
      //   type: ERROR,
      //   payload: error.message,
      // });
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      return axios.get("/temperaments").then((response) => {
        dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const filterTemperaments = (payload) => {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_BY_CREATION,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_LETTERS,
    payload,
  };
};

// FILTRANDO DESDE EL FRONT
// export const searchDogs = (options) => {
//   return async (dispatch) => {
//     return dispatch({ type: SEARCH_DOGS, payload: options });
//   };
// };

export const searchDogs = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/dogs?name=${payload}`);
      const dogs = response.data;
      console.log(dogs);

      return dispatch({
        type: SEARCH_DOGS,
        payload: dogs,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};
export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};


/* 
return async function (dispatch) {
  try {
    return axios
      .post("/dogs", data)
      .then((response) => {})
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
};
*/

export const createDog = (payload) => {
  return async () => {
    try {
      const response = await axios.post("/dogs", payload);
      alert("Dog Created");
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export function cleanDog() {
  return async function (dispatch) {
    return dispatch({ type: CLEAN_DOG, payload: {} });
  };
}
