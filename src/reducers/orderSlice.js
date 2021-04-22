import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  import { authService } from "../services/auth.service";
  import {orderService} from '../services/order.service';
  

  export const getOrderById = createAsyncThunk(
    "order/getById",
    async (values, { rejectWithValue }) => {
      console.log("inside thunk");
      try {
        // const me = await authService.login(values.email, values.password);
        const orders = await orderService.getAllOrders();
        console.log(orders);
        return orders;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data);
      }
    }
  );
  export const orderUpdate = createAsyncThunk(
    "order/update",
    async (values, { rejectWithValue }) => {
      console.log("inside thunk");
      try {
        // const me = await authService.login(values.email, values.password);
        const orders = await orderService.updateOrder(values.order_id, values.item_id, values.update_code);
        console.log(orders);
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
        orders: null,      
    },
    reducers: {},
    extraReducers: {
      [getOrderById.fulfilled]: (state, { payload }) => {
      //  state.orders.push
      console.log(payload);
      state.orders = payload;
      },
      [getOrderById.rejected]: (state, action) => {
       console.log("Bhaag Yahan Se");
    //    window.location.reload();
      },
      [orderUpdate.fulfilled]: (state, action) => {
        window.location.reload();
      }
    },
  });
  
  export default orderSlice.reducer;
  