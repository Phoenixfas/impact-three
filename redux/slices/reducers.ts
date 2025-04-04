import { combineReducers } from "@reduxjs/toolkit";
import blogModalToggleReducer from "./cliBlogModalToggleSlice";
import blogAddModalToggleReducer from "./blogAddModalToggleSlice";
import activeBlogReducer from "./activeBlogSlice";
import sortBlogsReducer from "./sortBlogsSlice";
import loginReducer from "../auth/loginSlice";
import activeUserReducer from "./activeUserSlice";
import activeRegReducer from "./activeRegSlice";
import regModalToggleReducer from "./regModalToggleSlice";
import cliblogModalToggleReducer from "./cliBlogModalToggleSlice";

export const rootReducer = combineReducers({
  blogModalToggle: blogModalToggleReducer,
  blogAddModalToggle: blogAddModalToggleReducer,
  activeBlog: activeBlogReducer,
  sortBlogs: sortBlogsReducer,
  login: loginReducer,
  activeUser: activeUserReducer,
  activeReg: activeRegReducer,
  regModalToggle: regModalToggleReducer,
  cliblogModalToggle: cliblogModalToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
