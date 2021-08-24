import axios from "axios";

// Create instance of axios for Apis
export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API,
  headers: { "Content-Type": "application/json" },
});

export const platformApi = axios.create({
  baseURL: process.env.REACT_APP_PLATFORM_API,
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
