import { createSlice } from "@reduxjs/toolkit";

const Loginslicer = createSlice({
  name: "login",
  initialState: {
    loginflag: false,
    flag: "",
    userdata: {},
  },
  reducers: {
    logindata: (state, action) => {
      state.loginflag = action.payload;
    },
    logoutdata: (state, action) => {
      state.loginflag = action.payload;
    },
    flag: (state, action) => {
      state.flag = action.payload;
    },
    confidential: (state, action) => {
      state.userdata = action.payload;
    },
  },
});
export const { logindata, logoutdata, flag, confidential } =
  Loginslicer.actions;
export default Loginslicer.reducer;
