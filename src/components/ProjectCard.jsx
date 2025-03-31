import React from 'react'

function ProjectCard({item}) {
  return (
    <a href={`${item?.url}`} target='_blank'>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-xl">
              <img src={item.img} alt="" className='w-[30rem] h-[20rem]' />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            </div>
    </a>
  )
}

export default ProjectCard