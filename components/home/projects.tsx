import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import TextCards from '../../shared/components/text-cards';
import HeaderSmall from "../../shared/components/header-small";
import Button from "../../shared/components/buttons";
import ProjectCard from "../../shared/components/project-card";
import project from '@utils/projects';
type Props = {};


export default function Projects({}: Props): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="relative h-auto py-10 lg:py-20">
          <img
            src="/images/vectors/heart.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
          />
          <div className=" grid grid-cols-12 gap-6 h-auto place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center px-12  relative">
                <img
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <div className="md:-ml-0 -ml-24">
                  <HeaderSmall text="Let’s walk the talk!" />
                </div>
                {/* TODO Add dynamic taglines */}

                <h1 className="hidden md:block mb-3 md:mt-0 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Projects I <span className="text-pink font-bold">built.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="#projects">
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* FIXME Make thie cards of this page dyanmic */}
            <div className="relative col-span-12 md:mr-32 md:col-span-5 lg:col-span-6 flex flex-col">
              <div className="w-64 text-white h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="Websites"
                  text=" Adding certain special hidden recipes and making his websites look enticing."
                  color="black"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using Flutter."
                  color="pink"
                />
              </div>
              <div className="w-64 text-white h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="UI/UX"
                  text="Using my design abilities to provide users an awesome interface and experience"
                  color="black"
                />
              </div>
              <h1 className="md:hidden -ml-4 mt-36 md:mt-0 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Projects I <span className="text-pink font-bold">built.</span>
              </h1>
            </div>
          </div>
        </div>

        <div
          className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16"
          id="projects"
        >
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {/* {projectDetails.map((project: Project) => (
              <ProjectCard
                project={project}
                key={project.slug}
                filter={{ key: 'featured', value: true }}
              />
            ))} */}
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
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button
              type="solid"
              text="All Skills & Projects"
              onClickHandler={() => router.push("/projects")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
