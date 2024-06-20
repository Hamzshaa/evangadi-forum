import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
