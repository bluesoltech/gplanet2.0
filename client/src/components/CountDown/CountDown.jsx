import React, { useState, useEffect, useRef } from "react";

const CountDown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinuts, setTimerMinuts] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const setTimer = () => {
        const countdownDate = new Date('april 07, 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinuts(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        setTimer();
        return () => {
            clearInterval(interval.current);
        }
    },)

    return (

        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 text-white text-center auto-cols-max">
                <div className="w-[105px] bg-green-800 rounded-full m-2 sm:m-5">
                    <span className="text-white-600 font-bold text-xl sm:text-5xl">
                        <span style={{ "--value": 15 }}>{timerDays}</span>
                    </span>
                    days
                </div>
                <div className="w-[100px] bg-green-800 rounded-full m-2 sm:m-5">
                    <span className="text-white-600 font-bold text-xl sm:text-5xl">
                        <span style={{ "--value": 10 }}>{timerHours}</span>
                    </span>
                    hours
                </div>
                <div className="w-[100px] bg-green-800 rounded-full m-2 sm:m-5">
                    <span className="text-white-600 font-bold text-xl sm:text-5xl">
                        <span style={{ "--value": 24 }}>{timerMinuts}</span>
                    </span>
                    min
                </div>
                <div className="w-[100px] bg-green-800 rounded-full m-2 sm:m-5">
                    <span className="text-white-600 font-bold text-xl sm:text-5xl">
                        <span style={{ "--value": 50 }}>{timerSeconds}</span>
                    </span>
                    sec
                </div>
            </div>
        </div>

       
            // <div class="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            //     <h2 class="text-4xl lg:text-5xl text-white font-bold mb-8">       </h2>
            //     <p class="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">      </p>
            //     <div class="flex flex-wrap items-center justify-center gap-4 p-2">
            //         <div class="bg-red rounded-full px-6 py-2 min-w-[120px]">
            //             <div id="days" class="font-bold text-xl text-gray-800">{timerDays}</div>
            //             <div class="text-xs uppercase text-gray-500">days</div>
            //         </div>
            //         <div class="bg-white rounded-full px-6 py-2 min-w-[120px]">
            //             <div id="hours" class="font-bold text-xl text-gray-800">{timerHours}</div>
            //             <div class="text-xs uppercase text-gray-500">hours</div>
            //         </div>
            //         <div class="bg-white rounded-full px-6 py-2 min-w-[120px]">
            //             <div id="minutes" class="font-bold text-xl text-gray-800">{timerMinuts}</div>
            //             <div class="text-xs uppercase text-gray-500">minutes</div>
            //         </div>
            //         <div class="bg-white rounded-full px-6 py-2 min-w-[120px]">
            //             <div id="seconds" class="font-bold text-xl text-gray-800">{timerSeconds}</div>
            //             <div class="text-xs uppercase text-gray-500">seconds</div>
            //         </div>
            //     </div>
            // </div>
        

    )
}

export { CountDown };