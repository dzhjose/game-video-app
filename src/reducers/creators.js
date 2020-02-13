import { FETCH_ITEMS, GET_ITEM } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loader: false,
  video_search: ""
};

export const CreatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.pyload,
        loader: false
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.pyload,
        loader: false
      }
    default:
      return state;
  }
};
