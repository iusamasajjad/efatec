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
import Hamburger from "../../components/hamburger/hamburger";
import { useRef } from "react";


const LandingPage = () => {

  
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView()
  }
    return (
      <div>
        <div className="fixed hidden lg:block left-0 top-0 bottom-0 w-32">
            <SideHamburger />
        </div>
        <div className="container mx-auto lg:w-11/12 ">
        <div className="lg:ml-12 lg:pl-12 overflow-hidden">
        <div className="lg:block hidden">
        <Header />
        </div>
       <div className="lg:hidden block">
       < Hamburger />
       </div>
        <Contact executeScroll={executeScroll} />
        <Location  myRef={myRef}/>
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