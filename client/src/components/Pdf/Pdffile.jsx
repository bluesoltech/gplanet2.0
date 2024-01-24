import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import Img from "../../assets/images/pdf_bg.png";
import { BASE_URL } from "../../config";

const styles = StyleSheet.create({
  body: {
    // background: `url(${Img}) no-repeat center center fixed`,
    // backgroundImage: `url(${Img})`,
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    position: "absolute",
    top: 120,
    left: 80,
    fontSize: 18,
    marginBottom: 20,
    color: "black",
  },
  subheader: {
    position: "absolute",
    top: 100,
    left: 80,
    fontSize: 15,
    color: "grey",
  },
  date: {
    position: "absolute",
    top: 160,
    left: 80,
    fontSize: 15,
    color: "black",
  },
  time: {
    position: "absolute",
    top: 180,
    left: 80,
    fontSize: 8,
    color: "grey",
  },
  venue: {
    position: "absolute",
    top: 260,
    left: 270,
    fontSize: 15,
    textAlign: "center",
    color: "black",
  },
  venue_detail: {
    position: "absolute",
    top: 280,
    left: 80,
    fontSize: 10,
    color: "grey",
  },
  details: {
    position: "absolute",
    top: 340,
    left: 80,
    fontSize: 15,
    color: "black",
  },
  content: {
    position: "absolute",
    left: "0px",
    right: "0px",
    marginHorizontal: "auto",
    textAlign: "center",
    justifyContent: "center",
  },
  pageBackground: {
    zIndex: -1,
    position: "fixed",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  booking: {
    position: "absolute",
    top: 360,
    left: 80,
    height: 75,
    width: 435,
    backgroundColor: "#F0F0F1",
  },
  subbooking: {
    position: "absolute",
    top: 365,
    left: 85,
    height: 65,
    width: 425,
    backgroundColor: "white",
  },
  name: {
    position: "absolute",
    top: 380,
    left: 115,
    fontSize: 10,
    color: "grey",
  },
  bookingId: {
    position: "absolute",
    top: 400,
    left: 115,
    fontSize: 10,
    color: "grey",
  },
  category: {
    position: "absolute",
    top: 380,
    left: 400,
    fontSize: 10,
    color: "grey",
  },
  phone: {
    position: "absolute",
    top: 400,
    left: 400,
    fontSize: 10,
    color: "grey",
  },
  payment_divider: {
    position: "absolute",
    top: 460,
    left: 80,
    width: 435,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    // color: "grey",
  },
  payment: {
    position: "absolute",
    top: 480,
    left: 80,
    fontSize: 15,
    color: "black",
  },
  payment_status: {
    position: "absolute",
    top: 500,
    left: 80,
    fontSize: 10,
    color: "grey",
  },
  payment_price: {
    position: "absolute",
    top: 530,
    left: 80,
    fontSize: 10,
    color: "grey",
  },
  payment_price_val: {
    position: "absolute",
    top: 530,
    left: 400,
    fontSize: 10,
    color: "grey",
  },
  payment_discount: {
    position: "absolute",
    top: 550,
    left: 80,
    fontSize: 10,
    color: "green",
  },
  payment_discount_val: {
    position: "absolute",
    top: 550,
    left: 400,
    fontSize: 10,
    color: "green",
  },
  payment_transaction: {
    position: "absolute",
    top: 650,
    left: 80,
    fontSize: 10,
    color: "grey",
  },
});

const Pdffile = ({ data, setLoader }) => {
  const token = localStorage.getItem("token");
  // console.log(data);

  const [amount, setAmount] = useState(0);
  const [id, setId] = useState("");
  const timestamp = data.createdAt;
  const dateObject = new Date(timestamp);

  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth() + 1;
  const date = dateObject.getUTCDate();

  useEffect(() => {
    handleTicket();
  }, []);

  const handleTicket = async () => {
    try {
      const res = await fetch(`${BASE_URL}/cart/getpayinfo/${data._id}`, {
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

      setAmount(payinfo.data[0].amount);
      setId(payinfo.data[0].razorpay_payment_id);
      setLoader(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Image src={Img} style={styles.pageBackground} />
        </View>
        <View style={styles.content}>
          <Text style={styles.subheader} fixed>
            You are attending
          </Text>
          <Text style={styles.header} fixed>
            Green Planet Run - Marching Green 2.0
          </Text>
          <Text style={styles.date} fixed>
            7th Apr, 2024, Sun
          </Text>
          <Text style={styles.time} fixed>
            05:00 AM {"(GMT+05:30)"}
          </Text>
          <Text style={styles.venue} fixed>
            Venue
          </Text>
          <Text style={styles.venue_detail} fixed>
            River Front Event Centre, Sabamati Riverfront Walkaway W, Narayan
            Nagar Society, Kocharab,
            {"\n"}
            Paldi, Ahmedabad, Gujarat 380007, India
          </Text>
          <Text style={styles.details} fixed>
            Your Booking Details
          </Text>
          <View style={styles.booking} />
          <View style={styles.subbooking} />

          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.bookingId}>Booking ID: {data._id}</Text>
          <Text style={styles.category}>Category: {data.category}</Text>
          <Text style={styles.phone}>Contact: {data.phone}</Text>

          <View style={styles.payment_divider} />
          <Text style={styles.payment} fixed>
            Payment Summary
          </Text>
          <Text style={styles.payment_status} fixed>
            Status: Completed | {year}-{month}-{date}
          </Text>
          <Text style={styles.payment_price} fixed>
            Ticket price
          </Text>
          <Text style={styles.payment_price_val} fixed>
            INR {data.category === "5 KM" ? "300.00" : "350.00"}
          </Text>
          <Text style={styles.payment_discount} fixed>
            Paid Amount
          </Text>
          <Text style={styles.payment_discount_val} fixed>
            INR {amount}
          </Text>
          <Text style={styles.payment_transaction} fixed>
            Transaction ID: {id}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdffile;
