import { useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import { Overlay, OverlayColor } from "./styles";

const Layout = ({ children, deleteSession }) => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch("dashboard");

  return (
    <>
      {location.pathname == "/dashboard" ? (
        <SideNav deleteSession={deleteSession} />
      ) : (
        <Header />
      )}
      <Overlay />
      <OverlayColor />
      <BackgroundVideo />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
