import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import { Overlay, OverlayColor } from "./styles";

const Layout = ({ children, deleteSession, loggedIn }) => {
  return (
    <>
      {loggedIn ? <SideNav deleteSession={deleteSession} /> : <Header />}
      <Overlay />
      <OverlayColor />
      <BackgroundVideo />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
