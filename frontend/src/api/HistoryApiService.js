import { apiClient } from "./ApiClient";

export const executeHistoryFetch = async () => {
  return await apiClient
    .get("/users/history", {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const executeHistoryCleaning = async () => {
  return await apiClient
    .post("/users/history/clear", null, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const executeHistoryItemDeletion = async (sneakerId) => {
  return await apiClient
    .post(`/users/history/clear/${sneakerId}`, null, {
      withCredentials: true,
    })
    .then((res) => res.data);
};
