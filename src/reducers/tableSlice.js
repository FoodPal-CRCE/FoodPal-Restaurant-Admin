import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { restaurantService } from "../services/restaurant.service";

export const addTable = createAsyncThunk(
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

export const updateTable = createAsyncThunk(
  "restaurant/updateTable",
  async(values, {rejectWithValue}) => {
    try{
      const update = await restaurantService.TableUpdate(values._id, values.capacity, values.tableNumber);
      return update;
    }
    catch(err){
      if(!err.response){
      throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTables = createAsyncThunk(
  "restaurant/getTables",
  async(values, {rejectWithValue}) => {
    console.log("Inside Thunk")
    try{
      const tableData = await restaurantService.tablesGet();
      console.log(tableData);
      return tableData;
    }
    catch(err){
      if(!err.response){
      throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
)

export const deleteTable = createAsyncThunk(
  "restaurant/deleteTable",
  async(values, {rejectWithValue}) => {
    console.log("Inside Delete Thunk", values);
    try{
      await restaurantService.tableDelete(values);
      return true;
    }
    catch(err){
      if(!err.response){
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
)

const tableSlice = createSlice({
  name: "table",
  initialState: {
    tables: null
  },
  reducers: {
    
  },
  extraReducers: {
    [getTables.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.tables = action.payload;
    },
    [deleteTable.fulfilled]: (state, action) => {
      window.location.reload();
    }
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default tableSlice.reducer;
// export const selectLogged = state;

export const { changeRefreshed } = tableSlice.actions;
