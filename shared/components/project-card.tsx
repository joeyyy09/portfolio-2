/* eslint-disable react/require-default-props */
import { Project } from "../utils/types";
import Link from "next/link";
import Tilt from "react-tilt";

type Props = {
  project: Project;
  filter?: {
    key: string;
    value: string | boolean;
  };
};
const ProjectCard = ({ project, filter }: Props): JSX.Element => {
  return (
      <>
          <div
            className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl"
          >
            <Link href={`/project/${project.slug}`}>
              <img
                src={project.img}
                alt={project.name}
                className="rounded-2xl"
              />
            </Link>
          </div>
      </>
    )
};

export default ProjectCard;
