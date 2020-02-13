import { FETCH_GAMES } from "../actions/types";

const initialState = {
  game_items: [],
  game_item: {},
  game_search: "",
  loader: false
};

export const GamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        game_items: action.pyload
      };
    default:
      return state;
  }
};
