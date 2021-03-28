import Constants from "../utils/Constants";

import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

function getAllOrders() {
    const url = Routes.ORDER_ALL;
  
    // console.log(url);
    return HttpHelper.get(url).then((order) => {
      return order;
    });
  }

  export const orderService = {
    getAllOrders,
  };
  