import HeaderSmall from "../../shared/components/header-small";
import SkillsIcons from "./skills-icon";
import SkillsAll from "components/home/skills-all";

export default function Skills(): JSX.Element {
  return (
    <>
      {/* FIXME Make this whole page dyanmic */}

      <div className="relative h-auto py-10 lg:py-20" id="skills">
        <div className="ml-8 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-full md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className=" md:ml-16 p-4 relative">
              <HeaderSmall text="What Do I Do?" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-md sm:text-5xl md:text-7xl lg:text-lg font-normal tracking-wide text-white leading-normal lg:leading-7">
                I dance with pixels and logic, sculpting digital masterpieces
                that blend artistry and functionality, breathing life into code.
                In my free time, I design or play F1.
              </h1>
              <h1 className=" md:block mt-20 md:mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Think. <span className="text-pink">Code.</span> Debug.
              </h1>
              {/* <h1 className="md:hidden mt-16 gradient-text md:mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                 Skills I bring to the table:
              </h1> */}
            </div>
          </div>
          <div className="hidden md:block col-span-12 md:col-span-5 lg:col-span-6 md:ml-20 flex flex-col justify-center items-center my-6 sm:mt-0">
            <SkillsIcons />
          </div>
          <div className="md:hidden col-span-12 md:col-span-5 lg:col-span-6 md:ml-20 flex flex-col justify-center items-center my-6 sm:mt-0">
            <SkillsAll />
          </div>
        </div>
        <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
        />
        <img
          src="/images/vectors/l-vector.svg"
          alt="L Vector"
          className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
        />
      </div>
    </>
  );
}
