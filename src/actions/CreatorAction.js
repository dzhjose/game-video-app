import { FETCH_ITEMS, GET_ITEM } from "./types";

import axios from "axios";

export const fetchCreators = () => dispatch => {
  axios
    .get("https://api.rawg.io/api/creators")
    .then(rs => {
      console.log(rs.data);
      dispatch({ type: FETCH_ITEMS, pyload: rs.data.results });
    })
    .catch(e => {
      console.log(e);
    });
};

export const getItem = id => dispatch => {
  axios
    .get(`https://api.rawg.io/api/creators/${id}`)
    .then(rs => {
      console.log(rs.data);
      dispatch({ type: GET_ITEM, pyload: rs.data });
    })
    .catch(e => {
      console.log(e);
    });
};
