import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [strongpass, setStrongpass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleVerification = (e) => {
    e.preventDefault();
    console.log("verifying..");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      if (err.message == "Password is not strong enough") {
        setStrongpass(true);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="hero_section h-[80vh] xl:h-[800px] flex flex-col items-center justify-around max-h-screen sm:justify-center sm:pt-0 bg-gray-50">
          <div className="w-full px-6 overflow-hidden sm:max-w-lg sm:rounded-lg">
            <form onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-2 block w-full mt-1 border-[1px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-row items-center justify-between">
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-2 block w-full mt-1 border-[1px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                {strongpass ? (
                  <p className="text-textColor text-[10px]">
                    Password should contain at least one digit, one special
                    character, one lowercase letter, and one uppercase letter,
                    with a minimum length of 8 characters
                  </p>
                ) : (
                  <p></p>
                )}
                <div className="flex flex-col items-start">
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="px-2 block w-full mt-1 border-[1px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium  text-gray-700 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    required
                    type="password"
                    name="cpassword"
                    value={formData.cpassword}
                    onChange={handleInputChange}
                    className="px-2 block w-full mt-1 border-[1px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide flex justify-center text-white transition-colors duration-200 transform bg-greenColor rounded-md hover:bg-primaryColor focus:outline-none focus:bg-purple-600"
                >
                  {loading ? (
                    <HashLoader size={25} color="#ffffff" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
              <div className="mt-4 text-grey-600">
                Already have an account?{" "}
                <span>
                  <Link
                    to="/login"
                    className="text-primaryColor hover:underline"
                    href="#"
                  >
                    Log in
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
