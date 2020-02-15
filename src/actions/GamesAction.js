import {FETCH_GAMES, GET_GAME} from './types';

import axios from "axios";

export const fetchGames = () => dispatch => {
    axios
    .get("https://api.rawg.io/api/games")
    .then(rs => {
      console.log(rs.data);
      dispatch({ type: FETCH_GAMES, payload: rs.data.results });
    })
    .catch(e => {
      console.log(e);
    });
}

export const getGame = id => dispatch => {
  axios
  .get(`https://api.rawg.io/api/games/${id}`)
  .then(rs => {
    console.log(rs.data);
    dispatch({ type: GET_GAME, payload: rs.data });
  })
  .catch(e => {
    console.log(e);
  });
}