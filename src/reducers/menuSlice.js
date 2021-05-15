import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";
import { restaurantService } from "../services/restaurant.service";

export const getMenu = createAsyncThunk(
  "restaurant/get_menu",
  async (_, { rejectWithValue }) => {
    try {
      const restaurantData = await restaurantService.getRestaurantById();
      return restaurantData;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const addMenuItem = createAsyncThunk(
  "restaurant/add_menu_item",
  async (values, { rejectWithValue }) => {
    try {
      // const menuData = await restaurantService.addTable(
      //   values.tableNumber,
      //   values.capacity
      // );
      const menuData = await restaurantService.addMenuItem(values);
      return menuData;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateMenuItem = createAsyncThunk(
  "restaurant/update_menu_item",
  async (values, { rejectWithValue }) => {
    try {
      const update = await restaurantService.updateMenuItem(values);
      return update;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteMenuItem = createAsyncThunk(
  "restaurant/delete_menu_item",
  async (values, { rejectWithValue }) => {
    console.log("Inside Delete Thunk", values);
    try {
      var payload = JSON.stringify(values);
      await axios({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": JSON.parse(localStorage.getItem("me")),
        },
        data: payload,
        url: "http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/restaurant/menu/delete",
      });
      return true;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    status: "idle",
    error: null,
    refreshed: true,
    menu: [],
  },
  reducers: {
    changeRefreshed: (state) => {
      state.refreshed = false;
    },
  },
  extraReducers: {
    [getMenu.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMenu.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.menu = action.payload.menu;
    },
    [getMenu.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
      console.log("failed");
      window.location.reload();
    },
    [addMenuItem.fulfilled]: (state, action) => {
      window.location.reload();
    },
    [updateMenuItem.fulfilled]: (state, action) => {
      window.location.reload();
    },
    [deleteMenuItem.fulfilled]: (state, action) => {
      window.location.reload();
    },
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default menuSlice.reducer;
// export const selectLogged = state;

export const { changeRefreshed } = menuSlice.actions;
