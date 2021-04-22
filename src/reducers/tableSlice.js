import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { restaurantService } from "../services/restaurant.service";

export const getMenu = createAsyncThunk(
  "restaurant/add_table",
  async (values, { rejectWithValue }) => {
    try {
      const tableData = await restaurantService.addTable(values.tableNumber, values.capacity);
      return tableData;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState: {

  },
  reducers: {
    
  },
  extraReducers: {
    
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default tableSlice.reducer;
// export const selectLogged = state;

export const { changeRefreshed } = tableSlice.actions;
