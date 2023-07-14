/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import project from "@utils/projects";
import Image from "next/image";


type Props = {};

const ProjectCard = (props: {
  description2: ReactNode;
  description1: ReactNode;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  img: any;
  url: string;
}): JSX.Element => {
  return (
    <>
      <div
        className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl"
      >
        <a href={props.url}>
          <Image src={props.img} alt="" className="rounded-2xl" />
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
