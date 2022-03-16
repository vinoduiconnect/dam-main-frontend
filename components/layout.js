import Navbar from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

