import { Button } from '@shared-components';
import HeaderSmall from '../../shared/components/header-small';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Typewriter from "typewriter-effect";

export default function Landing(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80
  };
    const router = useRouter();
  return (
    <>
      <img
        src="/images/vectors/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
      />
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="block md:hidden absolute right-1/3 top-28 w-1/4 md:w-16 animate-spin pointer-events-none"
      />
      <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: "0.2s" }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-12">
          <div className="col-span-12  md:ml-16 md:col-span-7 lg:col-span-7 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-full">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="hidden md:block absolute -right-8 -top-16 w-2/3 md:w-24 animate-spin"
              />
              <h1 className="text-xl font-light ml-4 text-white text-justify">
                Hey there!
              </h1>

              <h1 className="text-2xl text-orange-500 ml-4 sm:text-2xl xl:text-8xl font-extrabold leading-none mb-3">
                <Typewriter
                  options={{
                    strings: ["Harshith Mente here."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <h5 className="text-7xl ml-4 font-light text-white text-justify">
                Full Stack Developer and an UI/UX Designer
              </h5>

              <div className="align-middle justify-center grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-12">
                <div className="sm:col-span-1 lg:ml-4 ">
                  <Button
                    type="solid"
                    text="Know More"
                    onClickHandler={() => router.push("#skills")}
                  />
                </div>
                {/* <div className="sm:col-span-1 ">
                  <Button
                    type="outlined"
                    text="Download Resume"
                    eslint-disable-next-line
                    no-return-assign
                    onClickHandler={() => ""}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="md:flex -mt-32 hidden col-span-full md:col-span-5 lg:col-span-5 text-justify text-white justify-end items-end ">
            <img
              src="/images/joey.png"
              alt="Harshith Mente"
              className=" md:w-full w-60 lg:w-4/5 pointer-events-none text-right"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
