import { FETCH_GAMES, GET_GAME } from "../actions/types";

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
        game_items: action.payload
      };
      case GET_GAME:{
        return {
          ...state,
          game_item: action.payload
        }
      }
    default:
      return state;
  }
};
