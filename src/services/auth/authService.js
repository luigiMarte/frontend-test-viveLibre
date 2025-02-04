import apiClient from "./api";

const authService = {
  async userLogin(username, password) {
    try {
      const response = await apiClient.post("/auth/login", {
        username,
        password,
      });

      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  logout() {
    sessionStorage.removeItem("token");
  },
};

export default authService;
