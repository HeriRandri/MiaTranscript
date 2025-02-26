"use client";

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
  // const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "signup") {
      if (formData.password !== formData.confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      const data = await signup(formData);
      console.log(data);
      if (data && !data.error) {
        location.assign("/login");
      } else {
        alert(data.error || "Erreur d'inscription");
      }
    } else if (type === "login") {
      const data = await signin(formData);

      if (data && !data.error) {
        console.log(data.user_id);
        location.assign(`/dashboard/${data.user_id}`);
      } else {
        console.log(data.error);
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-500">
          {type === "signup" ? "MiaTranscrit" : "Welcome to MiaTranscrit"}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          {type === "signup" ? "Create an account" : ""}
        </p>

        {type === "login" && (
          <div className="space-y-2 mb-4">
            <button className="w-full flex items-center justify-center border p-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
            <button className=" bg-primary w-full flex items-center justify-center border p-2 rounded-md text-gray-700  hover:bg-gray-200">
              <FaFacebook className="mr-2" /> Login with Facebook
            </button>
          </div>
        )}

        {type === "login" && <hr className="my-4" />}

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
          {type === "login" && (
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-gray-900" />{" "}
                <span className="text-gray-900">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 text-sm">
                Forgot Password?
              </a>
            </div>
          )}
          <button className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600">
            {type === "signup" ? "Sign up" : "Login"}
          </button>
        </form>
        {/* <br />
        {type === "signup" && (
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center border p-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
          </div>
        )} */}

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
