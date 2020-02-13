import {FETCH_GAMES} from './types';

import axios from "axios";

export const fetchGames = () => dispatch => {
    axios
    .get("https://api.rawg.io/api/games")
    .then(rs => {
      console.log(rs.data);
      dispatch({ type: FETCH_GAMES, pyload: rs.data.results });
    })
    .catch(e => {
      console.log(e);
    });
}