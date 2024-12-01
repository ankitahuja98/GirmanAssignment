import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    searchInput: "",
  },
  reducers: {
    addsearchInput: (state, action) => {
      return { ...state, searchInput: action.payload };
    },
  },
});

export default cartSlice.reducer;

export let { addsearchInput } = cartSlice.actions;
