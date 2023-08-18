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
      <div className="min-w-full">
        <img
          src="/images/vectors/ellipse.svg"
          alt="Ellipse Vector"
          className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
        />
        <motion.div
          transition={config}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transitionDuration: "0.2s" }}
          exit={{ x: 0, opacity: 0 }}
        >
          <div className="grid p-2 md:p-0 grid-cols-12 md:gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-12">
            <div className="md:hidden col-span-full rounded-full md:col-span-6 text-justify text-white justify-end items-end ">
              <img
                src="/images/joey2.png"
                alt="Harshith Mente"
                className=" md:w-full w-80 ml-4 mt-4 rounded-full lg:w-4/5 pointer-events-none text-right"
              />
            </div>
            <div className="col-span-full -mt-32 md:mt-0 md:ml-16 md:col-span-6  lg:col-span-7 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-full">
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
                <h5 className="text-7xl ml-6 mr-4 font-light text-white text-justify">
                  Full Stack Developer and an UI/UX Designer
                </h5>

                <div className="flex justify-center lg:justify-start items-center flex-col lg:flex-row md:gap-6 lg:gap-8 gap-4 mt-12">
                  <Button
                    type="solid"
                    text="Know More"
                    onClickHandler={() => router.push("#skills")}
                  />
                  <a href="https://drive.google.com/file/d/1gs0JrXAP_jBVYdh7bN3iSaDGtoAFhSAP/view?usp=drive_link">
                    <Button
                      type="outlined"
                      text="Download Resume"
                      onClickHandler={() => {}} // Keep the onClickHandler empty or remove it
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex -mt-32 hidden col-span-full md:col-span-6 lg:col-span-5 text-justify text-white justify-end items-end ">
              <img
                src="/images/joey.png"
                alt="Harshith Mente"
                className=" md:w-full w-60 lg:w-4/5 pointer-events-none text-right"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
