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
function makePayload(order) {
  return JSON.stringify(order);
}
function updateOrder(order_id, _id, update_code) {
  const url = Routes.UPDATE_ORDER + `/${order_id}`;
  console.log(url);
  const payload = makePayload({ _id, update_code });
  console.log(payload);
  return HttpHelper.patchWithAuthParam(url, payload).then(
    console.log("God Knows")
  );
}
function updateIsPaid(order_id) {
  const url = Routes.UPDATE_IS_PAID + `${order_id}`;
  return HttpHelper.patchWithAuth(url);
}

function getChart() {
  const url = Routes.GET_CHART;
  return HttpHelper.getWithAuthParam(url).then((orders) => {
    return orders;
  });
}

export const orderService = {
  getAllOrders,
  updateOrder,
  updateIsPaid,
  getChart,
};
