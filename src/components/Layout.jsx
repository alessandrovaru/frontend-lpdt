import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, loggedIn, deleteSession }) => {
  return (
    <>
      <Header loggedIn={loggedIn} deleteSession={deleteSession} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
