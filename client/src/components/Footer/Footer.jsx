import React, { useEffect, useState, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";

import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/@GreenPlanetRun",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/GreenPlanetRunAhmedabad",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/company/greenplanetrun/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/green_planet_run/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://twitter.com/Greenplanetrun",
    icon: <RiTwitterXFill className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/results",
    display: "Results",
  },
];
const quickLinks02 = [
  {
    path: "/about",
    display: "Past Sponsors",
  },
  {
    path: "/about",
    display: "About Event",
  },
  {
    path: "/about",
    display: "About Organizer",
  },
];
const quickLinks03 = [
  {
    path: "https://allevents.by/23422580",
    // path: "/register",
    display: "Register Now",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const quickLinks04 = [
  {
    display: "Privacy Policy",
    content: `<ul>
    <li style={{color: "red"}}>⦿ Last updated on Jan 12th 2024</li>
    <li>⦿ This privacy policy details how Green Planet Run. and its associate companies (Authority) process Data of an Individual that gets collected in the course of doing its business. Clause 2 details the way this process of data collection is done. If an individual/company (You) is not in agreement with our method of processing data collection and storage, please do not share your details with us. We request ‘You ’ not use our company website when we are asking for your contact information and personal details. </li>
     </ul>
     <br>
    <ul>
    <h4><b><u> 1.DEFINITIONS:</u></b></h4>
    <li>⦿ 1.1
    "Authority" is defined as a company, public authority, legal or natural individual, or person, that jointly or singularly decides on the means and purposes in which the collected data is going to be processed.
    </li>
    <li>⦿ 1.2
    "Planner" is defined as a company, public authority, legal or natural individual, or person, that jointly or singularly decides to use this website to promote, publish, or organize events.
    </li>
    <li>⦿ 1.3
    "Individual Data" means any fact or figures related to a company, public authority, legal or natural individual, or person, that jointly or singularly can be identified in any way.
    <li>
    <li>⦿ 1.4
    "Organizing or processing" is defined as any changes or modifications done, deletion or erasing, dissemination, recording, retrieval, use, and adaptation, etc. for the collected ‘Individual Data’.  
    </li>
    <li>⦿ 1.5
    "Organizer" is defined as a means a company, public authority, legal or natural individual, or person, that jointly or singularly processes Individual/Personal Data on behalf of the ‘Authority’. 
    </li>
    <li>⦿ 1.6
    "User" is a company, public authority, legal or natural individual, or person, that jointly or singularly uses/accesses the Platform on which information about the company and events is presented.
    </li>
    <li>⦿ 1.7
    'Terms of Use' are the Terms of Use as detailed in the section Terms of Use.
    </li>
    <li>⦿ 1.8
    "Website"(s) means the company websites that we are operating.
    </li>
    <li>⦿ 1.9
    "Platform" is defined as per the meaning assigned to it in the ‘Terms of Use’.
    </li>
    <li>⦿ 1.10
    "Sensitive Personal Data" is that information as mentioned under rule 3 of the SPDI Rules.
    </li>
    <li>⦿ 1.11
    "SPDI Rules" means the Information Technology Rules, 2011 (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information).
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 2.Procedure followed while collecting and processing INDIVIDUAL DATA:</u></b></h4>
    <h2>⦿ 2.1   INDIVIDUAL DATA COLLECTION</h2>
    <table style="border: 2px solid black; font-size: 12px;">
  <tr style="border: 2px solid black;"> 
    <th style="border: 2px solid black;"><u>USER</u></th>
    <th style="border: 2px solid black;"><u>INDIVIDUAL DATA that we collect</u></th>
    <th style="border: 2px solid black;"><u>The way we use collected Data</u></th>
    <th style="border: 2px solid black;"><u>Sharing of collected Data</u></th>
  </tr>
  <tr style="border: 2px solid black;">
    <td >Anyone using/accessing the Platform for coupon code,<br> form filling, ticket buying, etc.</td><br>
    <td >
    1. Name<br>
    2. Address<br>
    3. Email <br>
    4. Website<br>
    5. Contact number, etc.<br>
    </td><br>
    <td >● Processing financial and other transactions.</td>
    <td >We share collected data with External partners who are<br> associated with us in maintaining and running this platform.<br><br>
    Third parties promoting our events and platform.  
    </td>
  </tr>
  <tr style="border: 2px solid black;">
    <td ></td>
    <td >6. Enquiry, Comments, Feedback, etc. 
    Business name, business portal,
    </td>
    <td >● Communicating updates to users.</td>
  </tr>
  <tr style="border: 2px solid black;">
    <td >Our associates and partners using our Platform </td>
    <td ></td>
    <td >● Marketing events, etc.</td>
  </tr>
  <tr style="border: 2px solid black;">
    <td ></td>
    <td >7. Details of bank account, UPI details, etc. for payments and billing.</td>
    <td >•	Improving customer/Individual experience.</td>
  </tr>
  <tr style="border: 2px solid black;">
    <td ></td>
    <td >8. Details of website usage </td>
    <td >● Verification and creation of User account, confirming the identity of the user, aiding the user in accessing our Platform.  </td>
  </tr>
  <tr style="border: 2px solid black;">
     <td ></td>
     <td >9. IP addresses and other such information like Internet service provider, browser type, Duration, date, time stamp, exit pages, number of clicks, etc.  <br>● As per clause 9.</td><br>
    <td >
    •	To promote our business.<br>
    •	Creation of event pages, other promotional pages. 
    </td>
  </tr>
  <tr style="border: 2px solid black;">
     <td ></td>
     <td >10. Type of type, and the operating system version.<br>
     ●     Details of usage on our Platform and content that you engage with or view. All online statistics concerning your usage.  
     </td>
     <td ></td>
  </tr>
</table>
    <li>⦿ 2.2
    In case an INDIVIDUAL or user enters data pertaining to anyone other than him/her, it is understood that the Individual doing so has the authority for doing it; and it does not violate the privacy policy. 
    </li>
    <li>⦿ 2.3
    In following cases, we might share your data to third party or individuals: <br>  
    - To an organization / individual with whom we are having a collaboration, or they have bought a stake in our company or in case of liquidation of our business. <br>
    - Government agencies 
    - Advisors associated with us for enforcing policies, disputes, etc.
    </li>
    <li>⦿ 2.4
    Our company website has been created and launched using software, widgets, and media features that are owned by a third party. Interacting with these features, and widgets are governed by the privacy laws of the companies that provide or own them. It is advisable that you check the privacy settings on these third-party services.     
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 3.INDIVIDUAL DATA RETENTION:</u></b></h4>
    <li>
    Only if necessary due to one reason or the other, do we retain INDIVIDUAL Data. If not needed, we isolate such data. 
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 4.SECURITY OF PERSONAL DATA:</u></b></h4>
    <li>Our company takes all necessary steps to protect your Data.</li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 5.RIGHTS of Website visitors:</u></b></h4>
    <li>⦿ 5.1
    Modifying, verifying, etc. of your Data.
    </li>
    <li>⦿ 5.2
    Withdrawing consent for storing, sharing of your data.
    </li>
    <li>⦿ 5.3
    Right to raise a concern with a data protection authority. 
    </li>
    <li>⦿ 5.4
    Opting out of marketing communication. Unsubscribing is one easy way of opting out.     
    </li>
    <li>⦿ 5.5
    If you are a non-resident Indian or a foreigner, you can exercise all the above-mentioned rights.      
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 6. COOKIE POLICY:</u></b></h4>
    <li>⦿ 6.1
    Cookies help us collect your Data.    
    </li>
    <li>⦿ 6.2
    <u>Essential Cookies:</u> These types of cookies help to secure the website, ease accessibility, and help network management. You have the option to opt out of the cookies by disabling them in your browser settings. However, doing this may compromise the website usage experience. 
    </li>
    <li>⦿ 6.3
    <u>Analytics, Customisation, and Advertising Cookies:</u> These cookies help us improve our website and ultimately improve the user experience; by helping us collect the visitor's information which includes how one is interacting with our website.
    </li>
    <li>⦿ 6.4
    As per the applicable laws governing websites, you have an option to opt out of non-essential cookies. A cookie banner is displayed about these cookies to help you opt out. 
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 7. CHILDREN’S PRIVACY:</u></b></h4>
    <li>
    Children's privacy and safety is of utmost importance. We do not collect data on children below 16 years of age; unless consent is given by an authorized guardian or parent. The consent can be revoked at any time. 
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 8. NOTICE TO USER AND OTHER EXCLUSIONS:</u></b></h4>
    <li>⦿ 8.1
    In the case where the Individual Data of Users is collected by an Organiser; that Organiser will be the Controller of that Individual’s Data. Thus, data privacy-related matters should be addressed to the Organiser and not us. Organizers using our Platform bear all the responsibility for ensuring all statutory compliances relating to the collection of Personal/Individual Data. This also applies to other websites that you are visiting through links provided on our website. 
    </li>
    <li>⦿ 8.2
    This Policy is not applicable in a scenario where collected information summarises statistical information about groups of members, and not including their names or any contact or other information that can identify an individual. 
    </li>
    <li>⦿8.3
    <u>Google API Services User Data Policy governs</u> Website and information use.
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 9. HANDLING GRIEVANCE:</u></b></h4>
    <li> We have appointed a Grievance officer to take care of issues as and when they arise.
    <li>Green Planet Run</li>
    <li>ask@greenplanetrun.com</li>
    </li>
    </ul>
    <br>
    <ul>
    <h4><b><u> 10. POLICY CHANGES:</u></b></h4>
    <li>Policy is subject to changes at any point of time. A timely notification about the changes will be communicated. 
    </li>
    </ul>
    `,
  },
  {
    display: "Terms & Conditions",
    content: `<ul>
    <h4><b><u>TERMS OF USE</u></b></h4>
    <li>⦿ A legally binding agreement is created with the ‘terms of use’ (TOU) when you avail of services of Green Planet Run (GPR) We (GPR) provide an online portal for ticket buying, promotion, and presenting events. Your registration, browsing, or accessing our website/platform (USER) or as an “organizer” that promotes, publishes, or sells tickets through our platform necessitates that you are in agreement and are bound by the stated Terms and conditions. It also means that you have read our privacy policy and will abide by the same ("Privacy Policy"). It also is understood that you are competent and have the legal capacity to enter into this agreement. In a scenario where you are participating on behalf of any third party/entity/company or its associates, you agree that you have the needed authorization to do so. If you do not accept our Terms, do not use our platform. </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>RIGHTS OF USERS:</u></b><h4>
    <li>⦿ Bound under the terms,  GPR grants you or the User a revocable, non-exclusive, non-sublicensable right to browse through our Platform and do the actions needed like registration for an event, viewing the contents published, tickets purchase or even publishing on the platform. </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>RIGHTS OF ORGANISER:</u></b><h4>
    <li>⦿ Bound under the terms,  GPR grants ORGANIZERS a revocable, non-exclusive, non-sublicensable right to promote, publish, and create any current and upcoming events on specified page/s. You may collect sale proceeds of events, manage and sell tickets, and track your published events through the Page created for the purpose.</li>
    </ul>
    <br>

    <ul>
    <h4><b><u>ACCOUNT OF USER:</u></b><h4>
    <li>⦿ When you register as a user on our platform, you can access the features and benefits available on our platform. You can easily create your account by signing in with a username and a password or by signing in using your third-party sign-on services or social media. </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>BRAND AND EVENT PAGE FOR ORGANIZER:</u></b><h4>
    <li>⦿ As an organizer, you have access to create your page on our platform and present information or publish details on your events. Post the creation of your page, you will be allowed to sell tickets for your events. All you need to do is to sign in with your business name and the URL of your business. For verification purposes, we might collect information from you. The collection of the information of an organizer helps us to establish their authenticity, legality, and whether the necessary criteria to publish events are fulfilled. As an Organiser, you undertake that all the information provided by you is authentic, timely, correct, and complete and you will also ensure to maintain and update information at the right time. <br>
    <u>Guidelines for usage:</u> You being a user or an Organiser should not do the following:<br>
    - Hacking the platform/website or changing and adapting the content, unauthorized access, etc.<br> 
    - Resell, sell, lease, rent, distribute, assign, license, sublicense, transfer, distribute, reverse engineer, timeshare, decompile, disassemble, or make our Platform accessible to others except than for intended and agreed purposes as per the terms and conditions.<br> 
    - Transmit, store, etc. anything that is causing an infringement upon intellectual property rights of any person or entity or in nature it is hateful, racist, insulting, discriminatory, obscene, etc.<br> 
    - Upload, transmit, and link to, any malware, time bombs, viruses, trojan horses like harmful software.<br>
    - Through the use of any means ‘Scrape’, "crawl," "scrape," or "spider" any page, data, or portion of Platform.
    </li>
    <h4><b>You as a user/organizer agree that:</b></h4>
    <li>- Promotion or publishing of sexually explicit or Pornographic, sexually suggestive content, or sexually explicit videos will not be done through this Platform.<br>
    - Promotion or publishing of events of a political nature, violent events, or religious extremism will not be done through this platform<br>
    - Any data stored or shared by our users and organizers will not be shared, transmitted, or stored and is in violation of applicable laws and regulations.<br>
    - You have the needed permission to organize the event and you are abiding by all the laws and regulations applicable.<br>
    - In case the event gets canceled or postponed or there are any changes to the event profile, you will notify the people concerned via public notice and <b>  GPR </b> separately and immediately.<br>
    <b>  GPR  reserves the right to change rules and regulations depending on the nature of the event and will inform users and organizers about the changes. </b>
    </li>
    </ul>
    <br>

    <ul>
    <h1><b><u>TICKET SALES:</u></b><h1>
    <li>⦿ No re-selling of tickets or re-publishing of events of the principal organizer is allowed without the original organizers' permission to do so. Tickets for events can be purchased through the relevant Event Page of the Organiser. <br>
    Although we ensure the authenticity of the events published on our platform, it is the User's responsibility to verify the authenticity of an event, etc. It is mandatory to comply with the terms and conditions listed on the Event Page and website/platform. <br>
    <b>  GPR </b> is not accountable for: <br>
    - Anything that the organizers are publishing on GPR'S  website/platform. <br>
    - Any changes, cancellations, postponements, or restrictions on entry to the events published by organizers <br>
    - Selling and Purchasing tickets or promotion of events through any platform or media. <br>
    On purchase of ticket/s by a user, <b>  GPR </b> confirms the same via message with a unique QR code. Physical tickets are provided by the Organiser at the event venue.
    It is the Organiser's sole responsibility to accept and honor the ticketing commitments confirmed by <b>  GPR </b> through their Platform. 
    The responsibility of verifying QR code at the venue of the event is the sole responsibility of the Organiser.<br>
    Any changes in events, tickets, etc., and communication with the users regarding the same is the responsibility of the organizer.
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>WEBSITES owned by THIRD-PARTY:</u></b><h4>
    <li>⦿ Users and Organizers agree and acknowledge that our website/ Platform might have links to external or other websites referred to as third-party websites. In such cases, the terms and conditions and privacy policy of such third-party websites are applicable. 
    <b>  GPR </b> is not in any way responsible for the content published on third-party websites. We do not endorse claims made on third-party websites.
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>PAYMENT AND REFUNDS:</u></b><h4>
    <li>⦿ Fixing the price of tickets is the responsibility of the organizer.  GPR does not fix ticket rates. <b>  GPR </b> is a medium to collect the ticket charges with any applicable transaction fees which together are referred to as ‘Registration fee for Event’.<br>
    Publishing an event on our website/platform by the organizer authorizes  GPR to collect the Event Registration Fee through its associated payment gateways. All Parties involved are subject to the terms and conditions of such third-party payment gateways.<br> 
    Event Registration Fee collected on behalf of the organizers gets paid by  GPR to the organizer of the event after 3 days of the conclusion of the event for which the fees have been collected. This <b>"Withholding Period"</b> is aimed at ensuring the User’s safety and to ensure that the commitments made by the organizer to the user are delivered. In case the event is not organized as per the commitments made by the organizer/s,  GPR reserves the right to refund the Base Price to the Users without giving any prior notice to the organizer. <br>
    Publishing an event on our website/platform by the organizer authorizes  GPR to collect the Event Registration Fee through its associated payment gateways. All Parties involved are subject to the terms and conditions of such third-party payment gateways.<br><br>
     GPR transfers the Base Price amount to the Organiser’s bank account as submitted by the organizer at the time of creating their Event Page when there are no complaints from the users. <br><br>
    After the 3 days of withholding time is over,  GPR bears no responsibility to make any refunds to users. The users need to contact the event organizer who will ensure the processing as per their refund policy detailed on their Event Page.<br><br>
    In case of events not in control of   GPR , like strikes, natural calamities, violation of event cancellation terms, overbooking, force majure, etc.  GPR will be entitled to the Handling and Booking Fee charged to the user. It is the responsibility of the organizer to raise objections against the payments from  GPR within 30 days, if any. In case of no objections coming from the organizer within the stipulated time frame, such payment received by  GPR shall be considered to be waived by the Organiser. <br><br>
     GPR is not responsible for refund requests where the organizer/s have collected the payments directly.
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>SPECIAL PLANS:</u></b></h4>
    <li>⦿ Organizers can subscribe to   GPR'S  special plans for promoting events. For such plans, the organizer has to pay relevant fees to  GPR as specified.
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>MARKETING FEE:</u></b></h4>
    <li>⦿ For promoting their events,  GPR offers the Organisers various marketing plans. These plans can be subscribed to by paying the fees specified on the website. 
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>INTELLECTUAL PROPERTY RIGHTS:</u></b></h4>
    <li>⦿ Any trademark rights, intellectual rights, trade secret rights, patent rights, copyright rights, database rights, etc., and other industrial property rights applicable across the globe belong to   GPR . Some limited rights are granted to the organizer/s and user/s.<br> 
    For the content and material which is created by the Organiser,  GPR does not claim any right. This includes the logo, symbols, etc. owned by the organizer.<br><br>  
    Logos and communication created for an event by the organizer or by  GPR can be used freely by the organizer for publishing events and promoting events only.<br><br>  
     GPR reserves the perpetual right and license to re-use know-how techniques, and communication involved while providing the services to the Organiser/s and the User/s.  GPR is authorized to collect and store data, queries, etc. relating to the events, etc..
    All rights reserved.
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>TERMINATION of ACCOUNT OR ASSOCIATION:</u></b></h4>
    <li>⦿ Organizers and Users can terminate their Account or Event Page anytime. To do the same, just send an email to  GPR at <u>ask@greenplanetrun.com</u>, requesting the deletion of their Event Page or Account respectively. With the deletion of the Event page, all rights offered by  GPR to organizer shall cease.<br><br> 
    When  GPR is sure that a User or an Organiser is violating the terms and conditions of  GPR or violates any law or regulations applicable;  GPR can terminate their access to   GPR'S  Platform/Website at any time. <br><br> 
     GPR reserves all rights to make changes to its website/platform at any time. The organizers of events and users will be informed about changes affecting them within a reasonable time. <br><br> 
    In case of termination of services offered to organizers or users, their access to   GPR'S  website/Platform shall cease.  GPR has the right to retain all data of events, users, and the Organisers till they wish so.     
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>POLICY FOR SECURITY, DATA PRIVACY and CONFIDENTIALITY:</u></b></h4>
    <li>⦿ All information including User names, login passwords, etc. must be treated as confidential. This information is not to be disclosed to anyone for everyone’s safety.  GPR reserves the right to delete or disable codes, passwords, user identification code/name, etc. where  GPR has a reason to believe that the organizer or User has not complied with terms and conditions of   GPR .  GPR is not responsible for any data loss that comes as a result of non-compliance to   GPR'S  policies and terms. <br><br> 
    Every party involved;   GPR , Event organizer, or User is bound to safeguard Confidential Information to prevent from misuse. Confidential Information can be disclosed to perform respective obligations and exercise respective rights. It can be shared to individuals and organizations where there is no risk of compromising the safety of any party involved. <br><br>  
    Information or content labeled as "confidential" is to be considered Confidential Information. Example: User database, certain information on Event pages or website. 
    Any information made available to the public, information that is already present with the parties, information or content obtained willingly or is developed individually without marking it ‘confidential’ is non-confidential information or content. <br><br> 
     GPR has in place all the needed measures to protect data. In case of a breach of data security,  GPR shall notify the affected parties with immediate effect.<br><br> 
     GPR and its associate companies will have access to the data of Users and Organisers that is needed to comply with the law of the land. In case any party is committing an unlawful activity,  GPR will promptly inform the law enforcers. 
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>USER DATA FOR THE ORGANISER:</u></b></h4>
    <li>⦿ Event organizer bears the responsibility for the security of data collected from users relevant to their event. The integrity and confidentiality of all User data relevant to the event organizer rests with the organizer. <br><br> 
    On request from the user/  GPR , or if the data is no more required; the organizer will delete all data collected through the Platform/Our website. <br><br> 
    It is mandatory for the Organiser to permanently delete all information and data upon termination or expiration of terms for the event. Any other information that the Organiser has stored while using our website/platform also has to be deleted if it does not violate any laws in force. <br><br> 
    </li>
    </ul>
    <br>

    <ul>
    <h4><b><u>INDEMNIFICATION:</u></b></h4>
    <li>⦿ All parties like Users or Organisers will indemnify  GPR and hold  GPR harmless if any claim is brought against  GPR and their employees, agents, directors, etc. by a third party; where issues are arising out of organizers/users' access to the website/Platform. <br><br> 
     GPR shall notify the User or the Organiser promptly of any threat or notice.
    If need be, the right of selecting defense attorneys, etc. lies with the Users/Event Organisers to defend any claims against them. <br><br> 
    The users and Event Organizers will receive total cooperation from  GPR in connection with any legal issues. When  GPR is at fault, Users/ Organisers will be free from any liability arising out of wilful misconduct or gross negligence.
    </li>
    </ul>
    <br>

    <ul>
    <h2><b><u>WARRANTIES DISCLAIMER:</u></b></h2>
    <li>ALL IMPLIED OR EXPRESS WARRANTIES AND REPRESENTATIONS INCLUSIVE OF FITNESS, MERCHANTABILITY FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, ARE HEREBY EXCLUDED.</li><br>
    THE PLATFORM IS PROVIDED ON AN "AS AVAILABLE" AND "AS IS" BASIS. <br>
    ALL PARTIES ACCEPT THAT  GPR DOES NOT WARRANT THAT THEIR ACCESS TO THE WEBSITE/PLATFORM, IS FREE FROM MALWARE OR CYBER SECURITY THREAT AS THE PLATFORM IS ON THE INTERNET AND OTHER MEDIA WHICH ARE BEYOND   GPR'S  CONTROL.
    </ul>
    <br>
    
    <ul>
    <h2><b><u>LIABILITY LIMITS</u></b></h2>
    <li>⦿  GPR AND IT’S EMPLOYEES AND AFFILIATES INCLUDING DIRECTORS ARE NOT LIABLE FOR ANY DAMAGES OF ANY NATURE FOR LOST REVENUE, PROFITS, BUSINESS, INTERRUPTION, ETC. WITHOUT LIMITATION. 
    THE LIABILITY RELATING TO THE PLATFORM WILL BE LIMITED: <br><br>
    <b>FOR ORGANIZER OF EVENTS: </b> <br><br>
    - TO AN AMOUNT THE ORGANISER HAS PAID TO THE PLATFORM IN 12 MONTHS PRECEDING THE CLAIM. <br><br>
    - THE AMOUNT PAID FOR MARKETING AND PLATFORM USAGE. <br><br>
    <b>FOR USER:</b> <br><br>
    -	AN AMOUNT PAID TOWARDS THE BOOKING FEE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. <br><br>
    IN CASE WHERE THE JURISDICTIONS DO NOT PERMIT LIMITATION OF LIABILITY OR THE EXCLUSION OF IMPLIED WARRANTIES FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE PLATFORM LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
    </li>
    </ul>
    <br>

    <ul>
    <h2><b><u>MISCELLANEOUS</u></b></h2>
    <li>⦿ <u>Relationship amongst the Parties:</u> Being independent contractors, the terms do not create an agency, partnership, fiduciary, employment relationship, franchise, or joint venture, amongst the Parties. <br><br>
    <u>Revisions and Entire Agreement:</u> These Terms supersede all earlier negotiations, communications, agreement proposals, etc. whether written or oral. These terms with all policies and schedules form the complete agreement and understanding between the Parties. Only through written and signed agreement between the parties, these Terms may be amended. <br><br>
    <u>Force Majeure:</u>  GPR shall not be held liable for the unavailability of the Website/Platform because of acts of God, civil unrest, terror acts, acts of government, internet failure, technical failures that are not in the control of   GPR , and other such happenings that are beyond the control of   GPR . <br><br> 
    <u>Dispute Resolution:</u> The law of the land governs the terms that are final and binding. All disputes arising between parties are to be first solved with discussions. In case of disputes unsolved by discussions, a sole arbitrator mutually appointed by the Parties will be hired for the resolution of disputes. The arbitration is to be conducted per the Arbitration and Conciliation Act, 1996, as amended from time to time. The language of the arbitration shall be English and the place of arbitration shall be Ahmedabad, India. <br><br> 
    <u>Notices:</u> The notices amongst parties are to be in writing through: <br><br>
    - A recognized Courier or speed post to registered addresses of the parties involved. <br>
    - E-mail address provided by parties. <br>
    -   GPR'S  address for a notice : <br>
    Green Planet Run , Shilp Corporate Park B” - 206,207,208 Rajpath Rangoli Main Road, behind Rajpath Club, off. S.G. Highway Bodakdev Ahmedabad-380054." 
    - Electronic mail is <u>ask@greenplanetrun.com</u>
    
    The effective delivery for all notices shall be considered as follows:<br><br>
    -	By email: Delivery to the account/email address <br><br>
    -	In two business days after the physical copy of the communication is deposited in the mailbox or to the address given by a Courier as mentioned above.<br><br>
    <u>Publicity Rights:</u> To conduct the promotion and offer visibility to the events of the organizer, the organizer grants permission to  GPR to use their trademark or logo on a royalty-free, worldwide basis.<br><br> 
    <u>Severability; No Waiver:</u> 
    In case the court finds terms or some terms unenforceable, the terms are subject to modification by the court. The sole purpose of modification of terms is to accomplish the purpose of solving the dispute. The other terms will remain unchanged. Not exercising any right under this Agreement by   GPR'S  does not constitute a waiver by   GPR .<br><br>
    <u>Survival:</u> 
    All clauses which, by their nature are intended to survive, including Effect of Termination, without limitation Clauses Intellectual Property Rights, Indemnification, Confidentiality; Disclaimer of Warranties, Security and Data Privacy; Limitation of Liability, and Miscellaneous shall survive any termination of these Terms concerning use of the Platform by the user or the Organiser. In case of Termination, the Party’s liability for obligations accrued as of or before such termination still is applicable.
    </li>
    </ul>
    <br>
    `,
  },
  {
    display: "Cancellation",
    content: `
    <ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ No cancellations & Refunds are entertained</li>
    </ul>
    `,
  },
  {
    display: "Refund Policy",
    content: `
    <ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ No cancellations & Refunds are entertained</li>
    </ul>
    `,
  },
];

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleLinkClick = (display, content) => {
    setPopupOpen(true);
    setSelectedLink({ display, content });
  };
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedLink(null);
  };

  // const year = new Date().getFullYear;
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopupOpen(false);
          setSelectedLink(null);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-nowwrap gap-[30px]">
          <div>
            <img className="max-w-[200px]" src={logo} alt="logo" />
            {/* <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Blue Soltech PVT. LTD. ALL rights
              reserved.
            </p> */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Privacy & Security
            </h2>
            <ul>
              {quickLinks04.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    key={index}
                    onClick={() => handleLinkClick(item.display, item.content)}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
            {isPopupOpen && (
              <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-[99999] shadow-xs">
                <div
                  ref={wrapperRef}
                  className="bg-gray-100 rounded-md w-[1000px] xsm:w-[250px] md:w-[850px] max-h-[600px] h-auto overflow-y-auto overflow-x-hidden"
                >
                  <div className="flex w-full p-2 m-0 items-center bg-white text-black shadow-lg">
                    <div className="justify-center justify-items-center w-full ">
                      <h2 className="flex text-xl font-bold !justify-center justify-self-center">
                        {selectedLink.display}
                      </h2>
                    </div>
                    <div className="flex justify-end justify-items-end text-end">
                      <button
                        className="justify-end justify-items-end"
                        onClick={closePopup}
                      >
                        <IoCloseCircle className="h-8 w-8" />
                      </button>
                    </div>
                  </div>
                  <div className="px-3 mt-2 mb-3">
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: selectedLink.content }}
                    ></p>
                  </div>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
