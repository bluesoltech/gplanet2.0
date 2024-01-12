import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Dropdown1 = () => {
    const showToast = () => {
        toast.info('Coming Soon!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Close the toast after 3 seconds
        });
    };
    return (
        <div className=" mx-auto max-w-md">
            <section className="bg-white rounded-md p-4 shadow-md m-4 hover:bg-gray-100 ">
                <div>
                    <button>
                        <Link
                            to="https://racetecresults.com/Search.aspx?CId=19898&RId=3123"
                            className="text-green-500 font-bold "
                        >
                            <p className="text-lg"><b>Green Planet Run 2022</b></p>
                        </Link>
                    </button>
                </div>
            </section>
            <section className="bg-white rounded-md p-4 shadow-md m-4 hover:bg-gray-100 ">
                <div>
                    <button onClick={showToast}>
                        <Link
                            to="#"
                            className="text-green-500 font-bold"
                        >
                            <p className="text-lg"><b>Green Planet Run 2024</b></p>
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Dropdown1;
