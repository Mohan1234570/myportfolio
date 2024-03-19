import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PERSONAL BLOG APPLICATION"
          des=" 
          A personal blog application is a software platform or web application that allows individuals to create and publish their own blogs or online journals. 
          It provides users with a platform to share their thoughts, opinions, experiences, and expertise on various topics with a wider audience."
          src={projectOne}
        />
        <ProjectsCard
          title="FRONT OFFICE TEAM PORTAL"
          des="  This is Enquiry Portal for a Institute , In this admin access and normal user access 
          both functionalties there, this is using to register enquiry candidates details."
          src={projectTwo}
        />
        <ProjectsCard
          title="INDEED CLONE"
          des="This is Indeed's clone version, In this app we can post the jobs, and when login to app, 
          it will display all availabale jobs in home page, and will search for the jobs, also we can apply for a jobs."
          src={projectThree}
        />
        <ProjectsCard
          title="INTEGRITY ELIGIBILITY SYSTEM APP"
          des="I was Developed Integrity Eligibility system application. Using this Application we can provide lot of health plans,
           insurance plans, and children’s nutrition programs this all are get based on citizens eligibilities.."
          src={projectFive}
        />
        <ProjectsCard
          title="Weather Dashboard Application"
          des="This is developed using react js, it is usefull to display the weather 
          based on user entered location, for this development I was communicated with 
          open Weathermap RestAPI to get the weather details."
          src={projectFour}
        />
       
      </div>
    </section>
  );
}

export default Projects