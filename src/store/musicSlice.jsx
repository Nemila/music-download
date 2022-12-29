import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchMusic = createAsyncThunk("search", async (term) => {
  const options = {
    method: "GET",
    url: "https://soundcloud-scraper.p.rapidapi.com/v1/search/tracks",
    params: { term },
    headers: {
      "X-RapidAPI-Key": "62a9a53c6amshb2ad2069b69b6e1p11e5d7jsn23ac0ee0092d",
      "X-RapidAPI-Host": "soundcloud-scraper.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);
  return res.data.tracks.items;
});

const musicSlice = createSlice({
  name: "music",
  initialState: {
    musics: [],
    loading: false,
  },
  reducers: {
    reinitialize: (state, action) => {
      state.musics = [];
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMusic.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchMusic.fulfilled, (state, action) => {
      state.loading = false;
      state.musics = action.payload;
    });
  },
});

export const { reinitialize } = musicSlice.actions;
export default musicSlice;
