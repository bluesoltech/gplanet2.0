import React from 'react';

const EventDetails = () => {
    return (
        <div>
            <h2 className='w-full text-center mb-8 text-[35px] font-bold'>Event Details</h2>
            <div className='flex justify-end'>
                <div className='flex flex-col grid grid-cols-1 flex justify-center items-center md:grid-cols-2 gap-2'>
                    <p><strong>Date:</strong> 7th April 2024 | Sunday | 5:00 AM to 9:00 AM</p>
                    <p><strong>Event Venue:</strong> Sabarmati River Front Event Centre Paldi Ahmedabad</p>
                    <p><strong>Category:</strong> 10KM (Timed Run) & 5KM Fun Run</p>
                    <p><strong>Registration Fees:</strong> <strong className='text-red-600/100'>300/-</strong> INR for 5KM Category and <strong className='text-red-600/100'>350/-</strong> INR for 10KM Category</p>
                </div>
            </div>
            <p className='mt-6'><strong className='text-blue-600/100'>Note:</strong> Last date of registration: 25th March 2024 | 11:59 PM</p>
        </div>
    );
}

const EligibilityCriteria = () => {
    return (
        <div>
            <h2 className='text-start mb-4 mt-3 text-[28px] font-normal'>Eligibility Criteria:</h2>
            <p><strong>10 KM Time Run:</strong> Only for <strong className='text-red-600/75'>12 years</strong> and above (born on or before April 7, 2012)</p>
            <p><strong>5 KM Fun Run:</strong> Only for <strong className='text-red-600/75'>8 years</strong> and above (born on or before April 7, 2016)</p>
        </div>
    );
}

const RunnerAmenities = () => {
    return (
        <div>
            <h2 className='text-start mb-4 mt-3 text-[28px] font-normal'>Runner Amenities:</h2>
            <ul className='flex flex-col gap-1 list-disc ml-6'>
                <li>Official Race T-Shirt</li>
                <li>Goodie Bag</li>
                <li>An official race BIB (RFID Tagged) for 10KM Run and BIB (without RFID Tagged) for 5KM Run</li>
                <li>Water, energy drinks, and refreshments along the course</li>
                <li>Medical Support</li>
                <li>Post-race refreshments</li>
                <li>Finisher's medal</li>
                <li>Timing SMS & Timing Certificate (Soft Copy) for 10KM Run</li>
            </ul>
        </div>
    );
}

const PrizeMoney = () => {
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-start mb-4 mt-3 text-[28px] font-normal'>Prize Money:</h2>
            <p>- Will be announced soon for 10KM Marathon</p>
            <p><strong className='text-blue-600/100'>Note:</strong> The prize money is applicable to Indian participants only.</p>
            <p>- On Race Day, a victory ceremony will be conducted for the fastest 10K winners for men & women.<br></br> (Results announced on race day are Provisional)</p>
            <p>- All winners will be announced on our website and on our Social Media Channels 7 working days post the event after verification of the document. They will be provided with their winner’s prizes 45 days from the finish of the event.</p>
            <p>- Prize winners declared may be required to submit further proof of identity/age as may be required by the Promoter for the cash prize which the Event Promoter may at its sole discretion withhold disbursement or disqualify the said participant from the competition.</p>
            <p>- On Investigation If the runners are found to have interchanged their running number bib and/or bib tag with others will not be entitled to any timing or prize money (where applicable). Such runners shall also be disqualified from future competitions.</p>
        </div>
    );
}

const RulesAndRegulations = () => {
    return (
        <div >
            <h2 className='text-start mb-4 mt-3 text-[28px] font-normal'>Rules & Regulations</h2>
            <ul className='flex flex-col gap-1.5'>
                <li><strong>1: </strong>Participants must register on or before the closing date of the registration no new entry will be accepted post 25th March 2024.</li>
                <li><strong>2: </strong>Once registration is confirmed the fee is non-refundable IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS THE REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE YOU WILL NOT BE ELIGIBLE FOR A REFUND.</li>
                <li><strong>3: </strong>Please save the confirmation email received after registration as a reference for future communications.</li>
                <li><strong>4: </strong>Runners found to have interchanged their running number BIB and/or timing BIB tag with another individual will be disqualified from the event and shall not be allowed to apply or participate in the subsequent edition of the event.</li>
                <li><strong>5: </strong>Please note if you don't wear your timing BIB tag as instructed you won't be able to get an official finish time and thereby the official Certificate recording your finish times. No BIB tag No Entry - No Timing - No Prize.</li>
                <li><strong>6: </strong>No vehicles are allowed on the course. Anyone bringing wheeled vehicles will be disqualified from the race; you will be asked to leave the course.</li>
                <li><strong>7: </strong>Only those confirmed participants wearing the running number BIB's will be allowed on the route. Any person found wearing the incorrect BIB or no BIB will be disqualified and removed by the course security.</li>
                <li><strong>8: </strong>Further every runner must wear his/her running number BIB on the front of the vest. Any mutilation fold alteration or damage to the BIB will amount to disqualification of the runner from the event.</li>
                <li><strong>9: </strong>Organizers reserve the right to stop any participant from participating who is found medically unfit to continue in the opinion of the medical personnel.</li>
                <li><strong>10: </strong>Baggage counters are available for all participants. It is strongly recommended that you do not leave valuables like mobile phone camera jewelry watch electronic gadgets etc. in the bag stored. Organizers are not responsible for any loss of baggage and/or its belongings.</li>
                <li><strong>11: </strong>Participants are requested to cooperate with the police and security personnel deputed at the event venue and on the route. Participants/supporters are liable to random checking on race day - this is for your own security.</li>
                <li><strong>12: </strong>Entry Cancellation:  Requests for cancellation & transfer will not be accepted and thereby a refund will not be entertained.</li>
                <li><strong>13: </strong>The right to participate in the event and the rights and benefits available to the applicant under this application form is at the sole discretion of the Event Organizing team and cannot be transferred to any other person under any circumstances and the applicant alone shall be entitled to the rights and benefits arising hereunder.</li>
                <li><strong>14: </strong>The rules listed are subject to change as per the discretion of the Event Heads and the Organizing Committee.</li>
                <li><strong>15: </strong>Please bear in mind that Green Planet Run events venues and timings are subject to change.</li>

            </ul>
        </div>
    );
}

const RacedayInfo = () => {
    return (
        <section className='hero_section flex justify-center items-center'>
            <div className='w-[60%]'>
                <EventDetails />
                <hr className='mt-2'/>
                <EligibilityCriteria />
                <hr className='mt-2'/>
                <RunnerAmenities />
                <hr className='mt-2'/>
                <PrizeMoney />
                <hr className='mt-2'/>
                <RulesAndRegulations />
            </div>
        </section>
    );
}

export default RacedayInfo;
