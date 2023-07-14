import project from '@utils/projects';
import { ProjectCard } from '../../shared/components/index';
import { useContext, useEffect, useState } from 'react';
import SkillsIcons from 'components/home/skills-all';

const ProjectsPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28 pb-20">
        <div className="overflow-x-hidden">
          <div className="pt-10 sm:mx-12 md:mx-16">
            <div className="mb-4">
              <h1 className=" md:block ml-4 md:mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Skills & <span className="text-pink font-bold">Projects</span>
              </h1>
              <h5 className="text-7xl md:text-xl p-4 font-light text-white md:w-2/3">
                Like a painter with a keyboard, I merge colors of logic and
                creativity, crafting immersive digital experiences that leave a
                lasting impact on users with using my paintbrush of skills.
              </h5>
            </div>
            <div className="col-span-full flex flex-col justify-center items-center mb-16 sm:mt-0">
              <SkillsIcons />
            </div>
            <h2 className="md:ml-12 ml-4 mt-32 md:mt-32 text-6xl mb-2 sm:text-2xl md:text-xl lg:text-6xl p-2 xl:text-1xl font-extrabold text-white leading-none ">
              All <span className="text-pink font-bold">Projects</span>:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 place-items-center">
              {project.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description1={project.description1}
                  description2={project.description2}
                  img={project.img}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
