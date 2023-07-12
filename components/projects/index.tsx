import project from '@utils/projects';
import { ProjectCard } from '../../shared/components/index';
import { useContext, useEffect, useState } from 'react';

const ProjectsPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28 pb-20">
        <div className="overflow-x-hidden">
          <div className="pt-10 sm:mx-12 md:mx-16">
            <div className="mb-10">
              <h1 className="text-center text-3xl sm:text-2xl xl:text-3xl font-extrabold text-white leading-none mb-6">
                Something that he has build
              </h1>
              <p className="text-center text-sm sm:text-7xl font-light text-white leading-none mb-6">
                with love, expertise and pinch of magical ingredients
              </p>
            </div>
         
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
