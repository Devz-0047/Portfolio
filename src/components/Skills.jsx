import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white   p-10 rounded-[50px] lg:p-2">
          <h1 className="text-6xl font-bold">Skills</h1>
          <p className="text-2xl py-3 font-semibold">
            I am Full Stack Developer
          </p>
          <div className="box flex  justify-between  items-center  my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
             <SwiperSlide className="flex justify-center items-center">
            <div className="flex justify-center items-center w-full h-full">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"  alt="HTML" className="h-10 w-10 object-contain" />
            </div>
            </SwiperSlide>

              <SwiperSlide className=" ">
                {" "}
                <div >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" alt="" className="h-10 w-10"/>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide >
                {" "}
                <div >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="js logo" className="h-10 w-10"/>
                  
                </div>
              </SwiperSlide>

              <SwiperSlide >
               
                <div className=" ">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Logo" className="h-10 w-10"/>
                
                </div>
              </SwiperSlide>
              <SwiperSlide >
              
                <div >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="" className="h-10 w-10"/>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="" className="h-20 w-20"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
              <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"  alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"  alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"  alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div className="bg-slate-600 px-2 rounded-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              
              <div >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" alt="" className="h-10 w-10"/>
                
              </div>
            </SwiperSlide>
           

           

              
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
