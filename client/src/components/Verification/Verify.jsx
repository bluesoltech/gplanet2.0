import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../config.js";
import axios from "axios";
const Verify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      // console.log(param.id)
      try {
        const url = `${BASE_URL}/auth/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <div>
      {validUrl ? (
        <div>
          <h1>Email Verified Succesfully</h1>
          <Link to="/login">
            <button> Login</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>404 Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default Verify;
