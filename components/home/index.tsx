import Landing from './landing';
import Skills from './skills';
import Projects from './projects';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default HomePage;
