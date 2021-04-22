import Constants from "../utils/Constants";
// import Me from "../utils/Me";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

// function getUserPayload(user) {
//   return JSON.stringify(user);
// }
function makePayload(data){
  return JSON.stringify(data)
}
function getRestaurantById() {
  const url = Routes.GET_RESTAURANT;

  // console.log(url);
  return HttpHelper.get(url).then((restaurant) => {
    return restaurant;
  });
}
function addTable(tableNumber, capacity){
  const url = Routes.ADD_TABLE;
  const payload = makePayload({tableNumber, capacity})
  return HttpHelper.postWithAuthParam(url, payload).then(()=>{console.log("Added Table")});
}

export const restaurantService = {
  getRestaurantById,
  addTable,
};
