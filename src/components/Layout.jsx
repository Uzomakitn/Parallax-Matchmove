import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MenuShortcut from './MenuShortcut';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <Outlet />
      </main>
      <Footer />
      <MenuShortcut />
    </>
  );
};

export default Layout;
