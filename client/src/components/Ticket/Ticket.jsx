import React, { useState, useEffect } from "react";
import fiverun from "../../assets/images/Gallery/fiverun.jpg";
import tenrun from "../../assets/images/Gallery/tenrun.jpg";
import Pdffile from "../Pdf/Pdffile.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { BASE_URL } from "../../config";

const Ticket = ({ data }) => {
  const token = localStorage.getItem("token");
  const [pay, setPay] = useState();
  useEffect(() => {
    handleTicket();
  }, []);

  const handleTicket = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/getpayinfo`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        bookingId: data._id,
      });

      const payinfo = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setPay(payinfo.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="h-[410px] w-[300px] bg-[#DBF5F7] rounded-xl shadow-2xl border-t-[6px] border-[#39ADB5]-500">
        <div className="h-5/6 w-full flex justify-center items-center border-0 border-b-4 border-dashed border-red-300">
          <div className="h-5/6 w-5/6 bg-[#DFF6F8] justify-around">
            <div className="items-center text-gray-900 font-bold">
              <img
                src={data.category === "5 KM" ? fiverun : tenrun}
                alt="logo"
              />
            </div>
            <div className="text-[14px] ml-2 mt-[30px]">
              <div className="flex justify-center items-center">
                <div className="">
                  <h1 className="font-bold">Date:</h1>
                  <p>2024-01-70</p>
                  <h1 className="font-bold">Venue:</h1>
                  <p>Ahmedabad</p>
                </div>
                <div className="ml-4">
                  <h1 className="font-bold">Your Booking Details: </h1>
                  <p>{data.name}</p>
                  <h1 className="font-bold">Booking ID:</h1>
                  <p>{data._id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/6 w-full font-extrabold flex justify-center items-center ">
          <PDFDownloadLink
            document={<Pdffile data={data} pay={pay} />}
            fileName="Ticket"
          >
            {({ loading }) =>
              loading ? (
                <button>Loading..</button>
              ) : (
                <button className="border-solid border-2 border-red-300 p-2 rounded-md hover:bg-red-300 hover:text-white">
                  Download
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
};

export default Ticket;
