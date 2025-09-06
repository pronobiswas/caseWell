import { configureStore } from "@reduxjs/toolkit";
import showCaseProductReducer from "./features/ShowCaseProductSlice";
import  languageSlice from "./features/LanguagaeSlice";


export const store = configureStore({
  reducer: {
    showCaseProduct: showCaseProductReducer, 
    languageSlice: languageSlice,
  },
});
