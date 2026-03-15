import { createSlice } from "@reduxjs/toolkit";
import { fetchGames, getGame } from "../actions/GamesAction";

const initialState = {
  game_items: [],
  game_item: {},
  game_search: "",
  loader: false
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.game_items = action.payload;
        state.loader = false;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.loader = false;
      })
      .addCase(getGame.pending, (state) => {
        state.loader = true;
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.game_item = action.payload;
        state.loader = false;
      })
      .addCase(getGame.rejected, (state) => {
        state.loader = false;
      });
  }
});

export default gamesSlice.reducer;
