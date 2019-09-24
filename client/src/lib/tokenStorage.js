export function setToken(token) {
  window && window.localStorage && localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function tokenAxiosConfig() {
  return {
    headers: {
      "x-access-token": getToken()
    }
  };
}
