import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "one" },
  { id: 2, name: "Two" },
  { id: 3, name: "Dave" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.user;
export default usersSlice.reducer;
