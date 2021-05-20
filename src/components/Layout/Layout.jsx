import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Overlay, OverlayColor } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Overlay />
      <OverlayColor />
      <BackgroundVideo />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
