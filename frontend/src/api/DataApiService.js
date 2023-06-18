import { apiClient } from "./ApiClient";

export const executeFetchSneakers = async () => {
  return await apiClient.get("/sneakers", {
    withCredentials: true,
  });
};