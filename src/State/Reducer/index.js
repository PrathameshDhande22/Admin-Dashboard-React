import { createSlice } from "@reduxjs/toolkit";

export const showmenuSlice = createSlice({
  name: "showSideMenu",
  initialState: true,
  reducers: {
    show: (state, action) => {
      return (state = true);
    },
    hide: (state, action) => {
      return (state = false);
    },
  },
});

export const { hide, show } = showmenuSlice.actions;
export default showmenuSlice.reducer;
