import { configureStore } from "@reduxjs/toolkit";
import pastesReducer from "./redux/pasteSlice.js"

export const store = configureStore({
  reducer: {
    paste: pastesReducer,
    
  },
});