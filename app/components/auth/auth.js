import { useState } from "react";
import { FaGoogle, FaFacebook, FaEnvelope, FaKey } from "react-icons/fa";
import Link from "next/link";
import { signup, signin } from "@/app/utils/auth";
// import { useRouter } from "next/router";

export default function AuthPage({ type = "signup" }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (type === "signup") {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Les mots de passe ne correspondent pas.");
        setLoading(false);
        return;
      }

      const data = await signup(formData);
      if (data && !data.error) {
        location.assign("/login");
      } else {
        setErrorMessage(data.error || "Erreur d'inscription");
      }
    } else if (type === "login") {
      const data = await signin(formData);

      if (data && !data.error) {
        location.assign(`/Dashboard/${data.user_id}`);
      } else {
        setErrorMessage(data.error || "Erreur de connexion");
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          {type === "signup" ? "MiaTranscrit" : "Welcome to MiaTranscrit"}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          {type === "signup" ? "Create an account" : ""}
        </p>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {type === "signup" && (
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-gray-900"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.username}
                name="username"
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email Address</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-100">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full bg-transparent outline-none text-gray-900"
                placeholder="example@gmail.com"
                onChange={handleChange}
                value={formData.email}
                name="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-100">
              <FaKey className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-transparent outline-none text-gray-900"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <span
                className="cursor-pointer ml-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>
          </div>
          {type === "signup" && (
            <div>
              <label className="block text-gray-700">
                Confirm Your Password
              </label>
              <div className="flex items-center border rounded-md p-2 bg-gray-100">
                <FaKey className="text-gray-500 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent outline-none text-gray-900"
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  name="confirmPassword"
                />
                <span
                  className="cursor-pointer ml-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </span>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-teal-600"
            disabled={loading}
          >
            {loading ? "Loading..." : type === "signup" ? "Sign up" : "Login"}
          </button>
        </form>

        {type === "signup" ? (
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Sign here
            </Link>
          </p>
        ) : (
          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
