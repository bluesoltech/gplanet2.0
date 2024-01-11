import { useState, useEffect } from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
const PaySuccs = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [time,setTime] = useState(10);

  const location = useLocation();
  const reference = new URLSearchParams(location.search).get('reference');

  // const {reference} = useParams();
  setTimeout(() => {
    setTime(time - 1)

  },1000)


  setTimeout(function() {
    window.location.replace('/');
  }, 10000)
  
  
  useEffect(() => {
    // Use a timeout to mimic a delay in showing the animation (for demonstration purposes)
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className=" relative items-center justify-center  ">
      <div className="fixed flex items-center justify-center"></div>
      <div className={`bg-white rounded-lg  p-8  w-full h-auto ${showAnimation ? 'bounce-in' : ''}`}>
        <svg className="w-16 h-16 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.293 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 13.086l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <p className="text-center mt-4 text-gray-800 text-lg font-semibold">Payment Successful!</p>
        <p className="text-center text-gray-600 mt-2">Thank you for your purchase. Your transaction ID is {reference}.</p>
        <p className="text-center text-gray-600 mt-2">You can download your tickets from your profile.</p>
        <div className="flex justify-center mt-6">
         <Link to="/">
         <p className="text-center mt-2"><span className='underline px-2 decoration-sky-600 gap-2 text-sky-500 hover:text-sky-800'>click here</span>to redirect. You will be redirected to the home page in <span className='text-medium text-black '> {time}</span></p>

          </Link>
        
        </div>

      </div>
    </div>
   </>
  );
};

export default PaySuccs;


