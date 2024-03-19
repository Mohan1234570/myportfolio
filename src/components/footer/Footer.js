import React from 'react'
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaCity, FaHome } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {

  const phoneNumber = '+919182549398';

  const handlebtn = () => {
    window.location.href = 'tel:${phoneNumber}'
    
  }
  return (
    <div className="w-full py-8 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
        <span className="bannerIcon">
           <a href='https://www.facebook.com/profile.php?id=100021623928983&mibextid=ZbWKwL'> <FaFacebookF /></a> 
          </span>
          <span className='bannerIcon'>
           <a href='https://web.whatsapp.com/9182549398'><FaWhatsapp /> </a> 
          </span>
          <span className="bannerIcon">
          <a href='https://www.linkedin.com/in/mohan-krishna-gudumala-802474248/'> <FaLinkedinIn /> </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <button onClick={handlebtn}> Contact</button>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h1 className="text-xl uppercase text-designColor tracking-wider">
          ADDRESS
        </h1>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
             <FaHome /> Ameerpet
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              <FaCity /> Hyderabad
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-sm relative hover:text-designColor duration-300 group cursor-pointer">
              Telangana, India.
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        
      </div>
    </div>
  );
}

export default Footer