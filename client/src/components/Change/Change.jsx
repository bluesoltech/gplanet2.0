import { useState, useEffect, Fragment } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config.js";
import axios from "axios";
const Change = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  // const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  // useEffect(() => {
  //   const verifyEmailUrl = async () => {
  //     // console.log(param.id)
  //     try {
  //       const url = `${BASE_URL}/auth/${param.id}/change/${param.token}`;
  //       const { data } = await axios.get(url);
  //       console.log(data);
  //       setValidUrl(true);
  //     } catch (error) {
  //       console.log(error);
  //       setValidUrl(false);
  //     }
  //   };
  //   verifyEmailUrl();
  // }, [param]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${BASE_URL}/auth/${param.id}/change/${param.token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      // console.log(result);

      if (!res.ok) {
        throw new Error(result.message);
      }

      // console.log("result token ", result.token);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
        },
      });

      // console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="w-full md:h-[500px] flex flex-col justify-around items-center">
      <h1 className="text-3xl text-headingColor m-10">Change Password</h1>
      <form className="w-[40%] bg-white" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-textColor">New Password</label>
          <input className="border-[1px] border-textColor" />
        </div>
        <div className="flex flex-col">
          <label className="text-textColor">Rewrite New Password</label>
          <input className="border-[1px] border-textColor" />
        </div>
        <div className="flex justify-center mt-20">
          <button className="w-[20%] bg-yellow-200 rounded-xl hover:bg-yellow-300">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Change;
