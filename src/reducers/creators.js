import { createSlice } from "@reduxjs/toolkit";
import { fetchCreators, getItem } from "../actions/CreatorAction";

const initialState = {
  items: [],
  item: {},
  loader: false
};

const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreators.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchCreators.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loader = false;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loader = false;
      });
  }
});

export default creatorsSlice.reducer;
