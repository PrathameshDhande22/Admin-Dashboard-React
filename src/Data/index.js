import axios from "axios";

export const getOrder = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenueData = () => {
  return axios.get("https://dummyjson.com/carts").then((res) => res.data);
};

export const getInventory = () => {
  return axios.get("https://dummyjson.com/products").then((res) => res.data);
};

export const getCustomers = () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data);
};

export const getComment = () => {
  return axios.get("https://dummyjson.com/comments").then((res) => res.data);
};
