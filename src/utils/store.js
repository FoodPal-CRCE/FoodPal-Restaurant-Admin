import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../reducers/restaurantSlice";
import signinReducer from "../reducers/signinSlice";
import menuSlice from "../reducers/menuSlice";
import orderSlice from "../reducers/orderSlice";

export default configureStore({
  reducer: {
    signin: signinReducer,
    restaurant: restaurantSlice,
    menu: menuSlice,
    order: orderSlice
  },
});
