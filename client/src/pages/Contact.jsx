import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import { FaSquareFacebook,FaSquareInstagram,FaSquareYoutube,FaSquareXTwitter} from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const SERVICE_ID = "service_vdl3qqo";
const TEMPLATE_ID = "template_o1sa2dp";
const PUBLIC_KEY = "YB-8iyD85SFekj-DS";



  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };



const Contact = () => {
  return (
    <div className="hero_section">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
  
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <Form onSubmit={handleOnSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                   fluid
                   type="name"
                   id="input-name"
                   control={Input}
                   label='Email'
                   name='user_name'
                   placeholder='Name'
                   required
              
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    fluid
                    type="email"
                    id="input-email"
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email'
                    required
               
                
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <TextArea
                 id='input-textarea'
                 control={TextArea}
                 label='Message'
                 name='user_message'
                 placeholder='Message…'
                 required
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Field>
              <Button
              type='submit'
                fluid
                color="indigo"
                className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded m-0 text-lg"
              >
               Send
              </Button>
            </Form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
             <div className='mb-5 h-auto'> 
             <a className="text-indigo-500 cursor-pointer" href="mailto:ask@greenplanetrun.com ?">ask@greenplanetrun.com</a>
              </div>
              <span className="inline-flex gap-3">
           <Link to="https://www.facebook.com/GreenPlanetRunAhmedabad/">  <FaSquareFacebook className='w-7 h-7 '></FaSquareFacebook> </Link>
           <Link to="https://www.instagram.com/green_planet_run/">   <FaSquareInstagram className='w-7 h-7'></FaSquareInstagram>     </Link>  
           <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FGreenplanetrun" >   <FaSquareXTwitter className='w-7 h-7'></FaSquareXTwitter>   </Link> 
           <Link to="https://www.youtube.com/@GreenPlanetRun" >   <FaSquareYoutube className='w-7 h-7'></FaSquareYoutube>   </Link>
              </span>
            </div>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Contact;
