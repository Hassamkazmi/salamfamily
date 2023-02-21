import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import SideBar from "../Common/SideBar";
import LeftSideBar from "../Common/LeftSideBar";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid main">

        <SideBar />
        <LeftSideBar />
        <Footer />
      </div>
    </React.Fragment>
  )
}
export default Home