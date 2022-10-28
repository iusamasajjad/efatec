import Header from "../../components/Header/Header";
import SideHamburger from "../../components/SideHamburger/SideHamburger";
import Contact from "../../components/Contact/Contact";
import Location from "../../components/Location/Location";
import ContactUs from "../../components/ContactUs/ContactUs";
import React from "react";
import Founder from "../../components/Founder/Founder";
import Employees from "../../components/Employees/Employees";
import Promotion from "../../components/Promotion/Promotion";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
    return (
      <div className="">
        <div className="fixed hidden lg:block left-0 top-0 bottom-0 w-32">
            <SideHamburger />
        </div>
        <div className="container mx-auto">
        <div className="lg:ml-12 lg:pl-12">
        <Header />
        <Contact />
        <Location />
        <ContactUs />
        <Founder />
        <Employees />
        <Promotion />
        
        </div>
        </div>
        < Footer />
        
      </div>
    );
  };
  
  export default LandingPage;