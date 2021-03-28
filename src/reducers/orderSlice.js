import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  import { authService } from "../services/auth.service";
  import {orderService} from '../services/order.service';
  
  export const getOrder = createAsyncThunk(
    "order/getall",
    async (values, { rejectWithValue }) => {
      console.log("inside thunk");
      try {
        // const me = await authService.login(values.email, values.password);
        const orders = await orderService.getAllOrders();
        return orders;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const getOrderById = createAsyncThunk(
    "order/getById",
    async (values, { rejectWithValue }) => {
      console.log("inside thunk");
      try {
        // const me = await authService.login(values.email, values.password);
        const orders = await orderService.getAllOrders();
        return orders;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],      
    },
    reducers: {},
    extraReducers: {
      [getOrder.fulfilled]: (state, { payload }) => {
      //  state.orders.push
      console.log(payload);
      state.orders.push(payload);
      },
      [getOrder.rejected]: (state, action) => {
       console.log("Bhaag Yahan Se");
    //    window.location.reload();
      },
    },
  });
  
  export default orderSlice.reducer;
  // export const selectLogged = state;
  