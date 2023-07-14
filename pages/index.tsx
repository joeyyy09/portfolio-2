import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar, SocialBar } from '../shared/components';
const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <HomePage />
      <SocialBar />
      <Footer />
    </>
  );
};

export default Home;

