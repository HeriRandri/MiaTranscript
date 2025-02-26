import axios from "axios";

export const signup = async (formData) => {
  try {
    const response = await axios.post("/api/addUsers", formData);
    return response.data;
  } catch (error) {
    console.error("Erreur serveur :", error.response?.data);
    if (error.response) {
      return { error: error.response.data.error || "Signup failed" };
    } else if (error.request) {
      return { error: "No response from server" };
    } else {
      return { error: error.message };
    }
  }
};

export const signin = async (formData) => {
  try {
    const response = await axios.post("/api/signing", formData);
    localStorage.setItem("access_token", response.data.token);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      return { error: error.response.data.error || "Signin failed" };
    } else if (error.request) {
      return { error: "No response from server" };
    } else {
      return { error: error.message };
    }
  }
};
