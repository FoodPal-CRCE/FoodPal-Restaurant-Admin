import axios from "axios";

import Constants from "./Constants";
import Me from "./Me";

function getAuthHeader() {
  const authToken = Me.getToken();

  return authToken;
}

function handleResponse(response) {
  const { status, data } = response;
  // if (status === 'success') Toast.success(message);
  console.log("aduyg");
  return data;
}

async function handleError(error) {
  console.log(error);
  // if (error.response?.status === 401) {
  //   localStorage.removeItem("me");

  //   // actions.unauthenticate()();
  // }
  console.log(error);
  return Promise.reject(error.response?.data?.error);
}

const instanceWithAuthHeader = axios.create({
  baseURL: Constants.Urls.apis.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ...getAuthHeader(),
  },
});

const instanceWithoutAuthHeader = axios.create({
  baseURL: Constants.Urls.apis.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instanceWithoutAuthHeader.interceptors.response.use(res => {
//   console.log(res.request._header)
//   return res;
// });

const HttpHelperUtil = {
  get: function (url) {
    return instanceWithAuthHeader
      .get(`${url}`)
      .then(handleResponse)
      .catch(handleError);
  },
  getParam: function (url, body) {
    return instanceWithAuthHeader
      .get(`${url}`, {
        params: body,
      })
      .then(handleResponse)
      .catch(handleError);
  },
  getWithAuthParam: function (url, body) {
    return instanceWithAuthHeader
      .get(`${url}`, {
        params: body,
        headers: {
          ...getAuthHeader(),
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  //   post: function (url, payload) {
  //     return instanceWithAuthHeader
  //       .post(`${url}`, payload)
  //       .then(handleResponse)
  //       .catch(handleError);
  //   },
  postWithoutAuth: function (url, payload) {
    return instanceWithoutAuthHeader
      .post(`${url}`, payload)
      .then(handleResponse)
      .catch(handleError);
  },
  postWithAuthParam: function (url, payload) {
    return instanceWithAuthHeader
      .post(`${url}`, payload, {
        headers: {
          ...getAuthHeader(),
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  patchWithAuthParam: function (url, payload) {
    return instanceWithAuthHeader
      .patch(`${url}`, payload, {
        headers: {
          ...getAuthHeader(),
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  patchWithAuth: function(url){
    return instanceWithAuthHeader
    .patch(`${url}`,{
      headers: {
        ...getAuthHeader(),
      },
    })
    .then(handleResponse)
    .catch(handleError);
  },
  deleteWithAuthParam: function (url, payload) {
    console.log("Inside Delete With Auth Param");
    return instanceWithAuthHeader
      .delete(`${url}`, payload, {
        headers: {
          ...getAuthHeader(),
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  //   putWithAuthParam: function (url, body) {
  //     return instanceWithAuthHeader
  //       .put(`${url}`, body, {
  //         headers: {
  //           ...getAuthHeader(),
  //         },
  //       })
  //       .then(handleResponse)
  //       .catch(handleError);
  //   },
  //   deleteWithAuth: function (url) {
  //     return instanceWithAuthHeader
  //       .delete(`${url}`, {
  //         headers: {
  //           ...getAuthHeader(),
  //         },
  //       })
  //       .then(handleResponse)
  //       .catch(handleError);
  //   },
  // deleteWithAuthParam: function (url, body) {
  //   return instanceWithAuthHeader
  //     .delete(`${url}`, body, {
  //       headers: {
  //         ...getAuthHeader(),
  //       },
  //     })
  //     .then(handleResponse)
  //     .catch(handleError);
  // },
};

export default HttpHelperUtil;
