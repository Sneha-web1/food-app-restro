import { createSlice } from "@reduxjs/toolkit";

const CategrorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = CategrorySlice.actions;
export default CategrorySlice.reducer;
