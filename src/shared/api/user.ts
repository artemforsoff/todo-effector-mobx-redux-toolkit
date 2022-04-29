import { axios } from "shared/lib/axios";

const getUser = (id: app.User["id"]) => axios.get(`users/${id}`);

export const userApi = {
  getUser,
};
