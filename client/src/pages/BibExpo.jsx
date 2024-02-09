import React from "react";

const BibExpo = () => {
  return (
    <section className="hero_section flex justify-center items-center">
      <div className="w-[90%] md:w-[60%]">
        <h1 className="w-full text-center mb-3 text-[35px] font-bold">
          BIB EXPO Details
        </h1>
        <div className="flex justify-end">
          <div className="flex flex-col">
            <p>
              <strong>Date:</strong> Thursday 4th and Friday 5th April
            </p>
            <p>
              <strong>Time:</strong> 12 PM to 7 PM
            </p>
            <p>
              <strong>Venue:</strong> Science City Thaltej Ahmedabad
            </p>
          </div>
        </div>
        <div>
          <p className="mt-8">
            <strong>1:</strong> Participants have to show the Email OR SMS which
            have their BIB number. Alternatively please show registration
            information SMS/email while collecting the BIB.
          </p>
          <p>
            <strong>2: </strong>At the time of bib collection participants are
            requested to carry original ID proof (ID Proof which have a Photo
            and Date of Birth)
          </p>
          <p>
            <strong>3: </strong>No race category changes will be allowed.
          </p>
          <p>
            <strong>4: </strong>No t-shirt exchange will be allowed.
          </p>
          <p>
            <strong>5: </strong>Participants will not be allowed on the Race Day
            without BIB.
          </p>
          <p>
            <strong>6: </strong> If unavailable for the BIB Collection? Assign
            someone with an authorization Letter signed by the registered
            runner.
          </p>
          <p className="mt-4">
            ⦿ He/She must carry a soft copy of the Registration Confirmation
            [With BIB Details] email / SMS.
          </p>
          <p>⦿ Soft Copy of their ID Proof.</p>
          <p className="mt-4">
            <strong className="text-blue-600/100">Note:</strong> BIBs will not
            be distributed on race day
          </p>
        </div>
      </div>
    </section>
  );
};

export default BibExpo;
