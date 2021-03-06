import Constants from "../utils/Constants";

import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

function getUserPayload(user) {
  return JSON.stringify(user);
}

async function handleAuthenticate(me) {
  if (!!me) {
    const { accessToken } = me;
    await localStorage.setItem("me", JSON.stringify(accessToken));
  }
  return me;
}

async function login(email, password) {
  const payload = getUserPayload({ email, password });
  console.log(payload);
  //email: email
  //password: password
  return await HttpHelper.postWithoutAuth(Routes.LOGIN, payload).then(
    handleAuthenticate
  );
}

export const authService = {
  login,
};
