import { Project } from '../../shared/utils/types';
import Landing from './landing';

type Props = {
  project: Project;
};

export default function ProjectDetailedPage({ project }: Props): JSX.Element {
  return (
    <>
      <div className="ml-4 sm:mx-12 md:mx-16">
        <Landing project={project} />
      </div>
    </>
  );
}
