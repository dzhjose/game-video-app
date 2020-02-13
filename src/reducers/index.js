import { combineReducers } from "redux";
import { CreatorReducer } from "./creators";
import { GamesReducer } from "./games";

const rootReducers = combineReducers({
  creators: CreatorReducer,
  games: GamesReducer
});

export default rootReducers;
