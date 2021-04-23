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
function TableUpdate(_id, capacity, tableNumber){
  const url = Routes.UPDATE_TABLE;
  const payload = makePayload({_id, tableNumber, capacity});
  return HttpHelper.patchWithAuthParam(url, payload).then(()=>console.log("Table Updated"))
}
function tablesGet(){
  const url = Routes.GET_TABLES;
  return HttpHelper.get(url).then((tables)=>{
    return tables
  });
}
function tableDelete(_id){
  const url = Routes.DELETE_TABLE;
  const payload = makePayload({_id});
  console.log("Payload: ", payload);
  return HttpHelper.patchWithAuthParam(url, payload).then(()=> console.log("Table Deleted"))
}
export const restaurantService = {
  getRestaurantById,
  addTable,
  TableUpdate,
  tablesGet,
  tableDelete
};
