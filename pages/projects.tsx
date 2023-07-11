import dynamic from 'next/dynamic';
import { PersonalDetails, Project } from '../shared/utils/types';
import { Footer, Loader, Navbar, SocialBar } from '../shared/components';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false,
  loading: () => <Loader />
});


const Projects = (): JSX.Element => {
  return (
    <>
          <Navbar />
          <ProjectsPage />
          <SocialBar />
          <Footer />
    </>
  );
};
export default Projects;
