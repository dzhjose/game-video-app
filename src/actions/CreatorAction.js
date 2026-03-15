import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreators = createAsyncThunk(
  "creators/fetchCreators",
  async () => {
    const rs = await axios.get("https://api.rawg.io/api/creators");
    return rs.data.results;
  }
);

export const getItem = createAsyncThunk(
  "creators/getItem",
  async (id) => {
    const rs = await axios.get(`https://api.rawg.io/api/creators/${id}`);
    return rs.data;
  }
);
