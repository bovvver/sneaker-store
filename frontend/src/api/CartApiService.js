import { apiClient } from "./ApiClient";

export const executeCartFetch = async () => {
  return await apiClient
    .get("/users/cart", {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const executeItemAddition = async (pieces, item) => {
  return await apiClient
    .post(`/users/cart/${item.id}/${pieces}`, null, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const executeItemDeletion = async (sneakerId) => {
  return await apiClient
    .post(`/users/cart/delete/${sneakerId}`, null, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const executeCartClear = async () => {
  return await apiClient
    .post(`/users/clear-cart`, null, {
      withCredentials: true,
    })
    .then((res) => res.data);
};
