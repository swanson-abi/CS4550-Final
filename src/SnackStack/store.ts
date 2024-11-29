import { configureStore } from "@reduxjs/toolkit";
import cookBookReducer from "./CookBooks/Recipes/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    cookBookReducer,
    accountReducer,
  },
});
export default store;