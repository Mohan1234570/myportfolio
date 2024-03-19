import React from 'react'
import { FaFacebookF,  FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiGmail } from 'react-icons/si';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-6 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-60 object-cover rounded-lg mb-1"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Gudumala Mohan Krishna</h3>
        <p className="text-lg font-normal text-gray-400">
          Java Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Java full stack developer is a software developer who has expertise in both front-end and back-end development 
        using Java technologies. They are proficient in building web applications 
        that encompass the entire software stack, from the user interface to the server-side logic and database interactions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 918 254 9398</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mk4400320@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
           <a href='https://www.facebook.com/profile.php?id=100021623928983&mibextid=ZbWKwL'> <FaFacebookF /></a> 
          </span>
        
          <span className='bannerIcon'>
            <a href='https://www.instagram.com/mr_g.mkrishna/'><FaInstagram /></a>
          </span>
          <span className="bannerIcon">
           <a href='https://www.linkedin.com/in/mohan-krishna-gudumala-802474248/'> <FaLinkedinIn /> </a>
          </span>
          <span className='bannerIcon'>
           <a href='https://web.whatsapp.com/9182549398'><FaWhatsapp /> </a> 
          </span>
          <span className='bannerIcon'>
           <a href='https://mail.google.com/mail/'><SiGmail /></a> 
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft