import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async () => {
    const rs = await axios.get("https://api.rawg.io/api/games");
    return rs.data.results;
  }
);

export const getGame = createAsyncThunk(
  "games/getGame",
  async (id) => {
    const rs = await axios.get(`https://api.rawg.io/api/games/${id}`);
    return rs.data;
  }
);
