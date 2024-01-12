import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { discounts } from "../../assets/data/coupon";

function roundup(number) {
  const factor = 10 ** 2;
  return Math.ceil(number * factor) / factor;
}
function GST(num) {
  return roundup(num + 0.18 * num);
}


const Checkout = ({ data, checkoutHandler }) => {
  const [dis, setDis] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [valid, setValid] = useState(false);
  let mrp = data.category === "5 KM" ? 300 : 350;
  const [total, setTotal] = useState(GST(mrp));

  const handleCoupon = (e) => {
    // e.prevent.default();
    setCoupon(e.target.value);
  };

  const handleCouponClear = () => {
    // console.log("Clear");
    setValid(false);
    setDis(0);
    setCoupon("");
    setTotal(roundup(GST(mrp)));
  };

  const handleCouponSubmit = async () => {
    if (valid) {
      toast.error("Coupon Aready Applied");
    }
    // console.log("Coupon");
    const discount = discounts.find((d) => coupon === d.code && !valid);

    if (discount) {
      // console.log(valid);
      setValid(true);
      // console.log(valid);
      toast.success("Valid Coupon");
      if (discount.type === "value") {
        setDis(roundup(discount.value));
        let price = GST(mrp - discount.value);
        setTotal(roundup(price));
        // console.log(total);
      } else {
        setDis(roundup(mrp * discount.value));
        setTotal(roundup(GST(mrp - mrp * discount.value)));
      }
    } else {
      toast.error("Invalid Coupon");
    }
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div className>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>
            <div className="mt-2">
              <a
                href="/home"
                className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
              >
                Back to Home
              </a>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Order Details
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Name: <span class="text-textColor">{data.name}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Email: <span class="text-textColor">{data.email}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Phone Number: <span class="text-textColor">{data.phone}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Address:{" "}
                <span class="text-textColor">
                  {data.street}, {data.pin}
                </span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Gender: <span class="text-textColor">{data.gender}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Date of Birth:{" "}
                <span class="text-textColor">
                  {data.dob.getFullYear()}-{data.dob.getMonth() + 1}-
                  {data.dob.getDate()}
                </span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                T-shirt size: <span class="text-textColor">{data.tshirt}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Blood Group: <span class="text-textColor">{data.bgroup}</span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Emergency Contact:{" "}
                <span class="text-textColor">
                  {data.eName}-{data.ePhone}-{data.eRelation}
                </span>
              </div>
              <div className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-1 w-full">
                Category:{" "}
                <span class="text-textColor">
                  {data.category} -{" "}
                  {data.category === "5 KM"
                    ? "Ticket Price: 300"
                    : "Ticket Price: 350"}
                </span>
              </div>
            </div>
            <button
              onClick={() => checkoutHandler(total)}
              className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
            >
              Proceed to payment
            </button>
            <div className="mt-4 flex justify-start items-center w-full">
              <a
                href="/register"
                className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
              >
                Something Wrong? Register Again
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Category</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {data.category}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Ticket Charge</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ₹{mrp}
                </p>
              </div>
              {valid && (
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">
                    Total Discount
                  </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    -₹{dis}
                  </p>
                </div>
              )}
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ₹{roundup(mrp - dis)}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">GST</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ₹{roundup((mrp - dis) * 0.18)}
                </p>
              </div>
            </div>
            <div className="flex mt-10 flex justify-between w-full items-center">
              <input
                type="text"
                className=" text-lg font-semibold leading-4 text-gray-800 border-[3px] h-10 p-3"
                placeholder="Coupon"
                value={coupon}
                onChange={handleCoupon}
              ></input>
              {!valid ? (
                <button onClick={handleCouponSubmit}>Submit</button>
              ) : (
                <button onClick={handleCouponClear}>Clear</button>
              )}
            </div>

            <div className="flex justify-between w-full items-center mt-10">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                ₹{total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
