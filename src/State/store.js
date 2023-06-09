import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./Reducer/index";

export default configureStore({
  reducer: {
    showSideMenu: showReducer,
  },
});
