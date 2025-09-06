import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ShowCaseProductSlice = createSlice({
  name: "showCaseProduct",
  initialState,
  reducers: {
    showCaseProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showCaseProduct } = ShowCaseProductSlice.actions;
export default ShowCaseProductSlice.reducer;
