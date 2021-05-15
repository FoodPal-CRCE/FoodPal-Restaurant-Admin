const Constants = {
  Urls: {
    apis: {
      BASE_URL:
        "http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com",
      // BASE_URL: "http://localhost:5000",
      Routes: {
        // USER: "/user",
        // USERS: "/users",
        LOGIN: "/restaurant/signin",
        GET_RESTAURANT: "/restaurant/get",
        ORDER_ALL: "/orders/restaurant",
        UPDATE_ORDER: "/orders/update",
        // LOGOUT: "/users/sign_out",
        // REGISTER: "/student/register",
        // FORGOT_PASSWORD: "/users/password",
        ADD_TABLE: "/restaurant/table/add",
        UPDATE_TABLE: "/restaurant/table/update",
        GET_TABLES: "/restaurant/table/get",
        DELETE_TABLE: "/restaurant/table/delete",
        ADD_MENU_ITEM: "/restaurant/menu/add",
        UPDATE_MENU_ITEM: "/restaurant/menu/update",
        DELETE_MENU_ITEM: "/restaurant/menu/delete",
      },
    },
  },
};

export default Constants;
