import React from "react";
import Header from "../../components/Header/Header";
import SideHamburger from "../../components/SideHamburger/SideHamburger";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Technise from "../../components/Technise/Technise";
import Option from "../../components/Option/Option";
const Worker = () =>{
    return(
        <div>
            <div className="">
            <div className="fixed hidden lg:block left-0 top-0 bottom-0 w-32">
            <SideHamburger />
        </div>
        <div className="container mx-auto">
        <div className="lg:ml-12 lg:pl-12">
        <Header />
        </div>
        </div>
        <Hero />
        < Technise />
        <div className="container mx-auto">
        < Option />
        </div>
        < Footer />
      </div>
        </div>
    )
}

export default Worker;