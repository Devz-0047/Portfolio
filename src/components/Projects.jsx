import React, { useState } from "react";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
 

  const projects = [
    {
      id: 1,
      title: "The Today's Herald",
      description: "The Today's Herald is a React-based news aggregator web application designed to offer users an engaging and dynamic way to stay updated with the latest news.",
      img: "/TTH.png",
      url: "https://the-todays-herald.vercel.app/"
    },
    {
      id: 2,
      title: "Let's Binge",
      description: "Let'sBinge is a movie management and library web application that allows users to explore, manage, and save their favorite movies and TV shows.",
      img: "/LB.png",
      url:"https://letsbinge.vercel.app/"
    },
    {
      id: 3,
      title: "Event Management REST API",
      description: "This project is a RESTful API for managing events and user registrations. It is built with GIN (Golang) and utilizes the Gin framework for routing, along with SQL for database management.",
      img: "/go.svg",
      url:"https://event-management-rest-api.onrender.com"
    },
    {
      id: 4,
      title: "Newsletter Landing Page",
      description: "React Animated Webpage with Framer Motion ",
      img: "/NLP.png",
      url: "https://newsletter-landing-page-seven.vercel.app/"
    },
    {
      id: 5,
      title: "Health Firm Landing Page",
      description: "HTML, CSS, Tailwind and Web Animations",
      img: "/HFP.png",
      url: "https://devz-0047.github.io/HealthFirmLandingPage/"
    },
    {
      id: 6,
      title: "WarmBooks",
      description: "This project is a React-based web application that allows users to search for books using the Open Library API, display a list of selected books, and manage the list with features such as pagination, book removal, and animations using Framer Motion. Book details, including the cover, title, author, and description, are fetched and stored locally in the browser.",
      img: "/WB.png",
      url: "https://warm-books.vercel.app/"
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-6xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] font-semibold text-xl lg:text-2xl mx-auto text-[#939191]">
        Featured Work
        </p>
        <div className="flex justify-center items-center gap-4 mt-2 mb-2 "> 
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {
            projects.map((item, i) => <ProjectCard key={i} item={item} />)
            }
        </div>
       
       
      </div>
    </>
  );
}

export default Projects;
