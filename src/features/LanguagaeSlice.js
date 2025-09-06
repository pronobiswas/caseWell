import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    language: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { language } = languageSlice.actions;
export default languageSlice.reducer;
