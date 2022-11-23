import React from "react";
import Footer from "../Common/Footer";
import Header from "../Components/AboutHeader";
import AboutSection from "../Components/AboutSection";
import SideBar from "../Components/SideBarAbout";

const Home = () => {
  return (
    <React.Fragment>
        <div className="container">
            <Header />
            <SideBar />
            <AboutSection />
            <Footer />
        </div>
    </React.Fragment>
  )
}
export default Home