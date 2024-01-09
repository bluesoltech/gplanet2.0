import React, { useState, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../config";
import Checkout from "../components/Registration/Checkout";
import Form from "../components/Registration/Form";
import img from "../assets/images/pay_logo.png";

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

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get(`${BASE_URL}/cart/getkey`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // const {
    //   data: { order },
    // } = await axios.post(`${BASE_URL}/cart/checkout`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: amount,
    // });

    const temp = {
      data: data,
      amount: amount,
    };

    const res = await fetch(`${BASE_URL}/cart/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(temp),
    });

    const { order } = await res.json();

    console.log(order);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Green Planet Run 2.0",
      description: data.category,
      image: img,
      order_id: order.id,
      callback_url: `${BASE_URL}/cart/paymentverify`,
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: "razorpay official",
      },
      theme: {
        color: "#273775",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
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
      {verify && <Checkout data={data} checkoutHandler={checkoutHandler} />}
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
