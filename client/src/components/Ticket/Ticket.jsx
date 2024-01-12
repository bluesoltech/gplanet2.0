import React, { useState } from 'react';
import fiverun from "../../assets/images/Gallery/fiverun.jpg";
import tenrun from "../../assets/images/Gallery/tenrun.jpg";
// import { BASE_URL } from '../../config';
// import axios from 'axios';
import jsPdf from 'jspdf';
import 'jspdf-autotable'

const Ticket = ({ data }) => {
    // console.log(data);

    
    const fetchDataFromApi = async () => {
        try {
            // generateAndDownloadPdf(data);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const generateAndDownloadPdf = (data) => {
        const pdf = new jsPdf();
        pdf.setProperties({
            title: 'GreenTicket',
            subject: "API Data",
            author: "GreenPlanet",
            keywords: "pdf converter downloader"
        });
        pdf.setPage('a4');
        pdf.setFontSize(12);
        const columns = ['userId', 'id', 'title', 'body'];
        const rows = data.map(val => columns.map(col => val[col]));
        pdf.autoTable({
            head: [columns],
            body: rows,
            startY: 10
        })
        pdf.save('downloaded.pdf');
    }


    return (
        <>
            <div className='h-[410px] w-[300px] bg-[#DBF5F7] rounded-xl shadow-2xl border-t-[6px] border-[#39ADB5]-500'>
                <div className='h-5/6 w-full flex justify-center items-center border-0 border-b-4 border-dashed border-red-300'>
                    <div className='h-5/6 w-5/6 bg-[#DFF6F8] justify-around'>
                        <div className='items-center text-gray-900 font-bold'>
                            <img src={data.category === "5 KM" ? fiverun : tenrun} alt="logo" />
                        </div>
                        <div className='text-[14px] ml-2 mt-[30px]'>
                            <div className='flex justify-center items-center'>
                                <div className=''>
                                    <h1 className='font-bold'>Date:</h1>
                                    <p>2024-01-70</p>
                                    <h1 className='font-bold'>Venue:</h1>
                                    <p>Ahmedabad</p>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-bold'>Your Booking Details: </h1>
                                    <p>{data.name}</p>
                                    <h1 className='font-bold'>Booking ID:</h1>
                                    <p>{data._id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-1/6 w-full font-extrabold flex justify-center items-center '>
                    <button
                        className='border-solid border-2 border-red-300 p-2 rounded-md'
                        onClick={fetchDataFromApi}
                    >Download PDF</button>
                </div>
            </div>
        </>

    );
};

export default Ticket;