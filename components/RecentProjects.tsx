/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/Pin';
import { FaLocationArrow } from 'react-icons/fa6';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of my <span className="text-purple">projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[30vh] sm:w-[570px]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute bottom-0 z-10"
                />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {project.title}
              </h1>
              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {project.des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Read more
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
