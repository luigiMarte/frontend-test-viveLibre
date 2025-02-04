import axios from "axios";
import { loginBaseURL } from "@/helpers/constants";

const apiClient = axios.create({
  baseURL: loginBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
