import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import SideBar from "../Common/SideBar";

const Home = () => {
  return (
    <React.Fragment>
        <div className="container">
            <Header />
            <SideBar />
            <Footer />
        </div>
    </React.Fragment>
  )
}
export default Home