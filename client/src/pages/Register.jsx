import React, { useState, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";
import Checkout from "../components/Registration/Checkout";
import Form from "../components/Registration/Form";

const Register = () => {
  const { user, token } = useContext(authContext);
  const [verify, setVerify] = useState(false);
  const [data, setData] = useState({
    user: user,
    name: "",
    email: "",
    phone: "",
    bgroup: "",
    tshirt: "",
    dob: new Date(),
    gender: "",
    category: "",
    city: "",
    street: "",
    state: "",
    pin: "",
    ePhone: "",
    eName: "",
    eRelation: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    // console.log(user);
    e.preventDefault();
    // console.log(data);
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      setVerify(true);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <section>
      {verify && <Checkout data={data} />}
      {!verify && (
        <Form
          submitHandler={submitHandler}
          handleInputChange={handleInputChange}
          setData={setData}
          data={data}
        />
      )}
    </section>
  );
};

export default Register;
