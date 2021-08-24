import axios from "axios";

// Create instance of axios for Apis
export const publicApi = axios.create({
  baseURL: "https://api.ibanfirst.com/PublicAPI",
  headers: { "Content-Type": "application/json" },
});

export const platformApi = axios.create({
  baseURL: "https://platform.ibanfirst.com/js",
  headers: { "Content-Type": "application/json" },
});

// Interceptors for platformApi
platformApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.error(error.response);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// Interceptors for publicApi
publicApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.error(error.response);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
