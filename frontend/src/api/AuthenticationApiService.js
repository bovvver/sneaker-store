import { apiClient } from "./ApiClient";

export const executeAuthentication = async (data) => {
  await apiClient.post("/auth/authenticate", data, {
    withCredentials: true,
  });
};

export const executeLogout = async () => {
  await apiClient.post("/auth/logout", null, {
    withCredentials: true,
  });
};

export const executeRegistration = async (data) => {
  await apiClient.post("/auth/register", data);
};
