import { combineReducers } from "@reduxjs/toolkit";
import creatorsReducer from "./creators";
import gamesReducer from "./games";

const rootReducer = combineReducers({
  creators: creatorsReducer,
  games: gamesReducer
});

export default rootReducer;
