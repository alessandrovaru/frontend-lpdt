import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import { Overlay, OverlayColor, Background } from "./styles";

const Layout = ({ children, deleteSession, loggedIn }) => {
  return (
    <>
      {loggedIn === "LOGGED_IN" ? (
        <SideNav deleteSession={deleteSession} />
      ) : (
        <Header />
      )}
      <Overlay />

      {loggedIn === "LOGGED_IN" ? <></> : <OverlayColor />}

      {loggedIn === "LOGGED_IN" ? (
        <Background>
          <p>sjshhshs</p>
        </Background>
      ) : (
        <BackgroundVideo />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
