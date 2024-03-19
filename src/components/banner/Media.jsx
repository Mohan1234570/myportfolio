import React from 'react'
import {  FaReact, FaJava, FaHtml5 } from "react-icons/fa";
import {  SiMysql, SiBootstrap, SiSpringboot, SiDocker, SiAmazonaws } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className='bannerIcon'>
              <FaJava />
            </span>
            <span className='bannerIcon'>
              <FaHtml5 />
            </span>
            <span className='bannerIcon'>
              <SiBootstrap />
            </span>
            
            <span className='bannerIcon'>
              <SiMysql />
            </span>
            <span className='bannerIcon'>
              <SiSpringboot />
            </span>
            <span className='bannerIcon'>
              <SiDocker />
            </span>
            
            <span className='bannerIcon'>
               <SiAmazonaws />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media