import HeaderSmall from '../../shared/components/header-small';
import { motion } from 'framer-motion';

export default function Landing(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80
  };
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
          <div className="col-span-10 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 -mt-24 relative">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
              />
              <h1 className="text-xl font-light text-violet text-justify">
                Hey there!
              </h1>

              <h1 className="text-3xl gradient-text sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
                Harshith Mente here
              </h1>
              <h5 className="text-7xl font-light text-violet text-justify">
                Full Stack Developer and an UI/UX Designer
              </h5>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end ">
            <img
              src="/images/joey.png"
              alt="Harshith Mente"
              className="ml-auto w-100 lg:w-4/5 pointer-events-none text-right"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
