import React from "react";
import Footer from "../Common/Footer";
import Header from "../Components/AboutHeader";
import AboutSection from "../Components/AboutSection";
import SideBar from "../Components/SideBarAbout";
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <React.Fragment>
      <Fade right duration={1000}>

        <div className="container-sm AboutSection">
          <Header />
          <div className="d-flex justify-content-between">
            <SideBar />
            <AboutSection />
          </div>
          <Footer />
        </div>
      </Fade>
    </React.Fragment>
  )
}
export default Home