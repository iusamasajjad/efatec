import React from "react";
import Smiling_girl from "../../assets/images/smilling-girl.png";
import Laptop_girl from "../../assets/images/laptop-girl.png";
import men from "../../assets/images/men.png";
const Employees =()=>{
    return(
        <div className="mt-28 z-negative">
            <div className="flex justify-center items-center">
                    <div>
                    <p className="text-5xl font-black text-center">Employees</p>
                    <p className="text-xs mt-4">We have all Professionals and you can contact with them personaly</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-col lg:flex-row md:flex-col justify-center mt-12">
                    <div data-aos="fade-right" className="z-inhrt">
                        <div>
                            <img className="mx-auto" src={Smiling_girl} alt="smilling" />
                        </div>
                        <div className="mt-8 text-center lg:text-start">
                            <p className="text-xl font-bold">Planning</p>
                            <p className="text-gray-500 mx-auto lg:mx-0 w-64 text-sm">We plan, we strategize, we sketch, we do research.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mx-8 z-inhrt">
                        <div>
                            <img className="mx-auto" src={Laptop_girl} alt="smilling" />
                        </div>
                        <div className="mt-8 text-center lg:text-start">
                            <p className="text-xl font-bold">Designing</p>
                            <p className="text-gray-500 mx-auto lg:mx-0 w-64  text-sm">We plan, we strategize, we sketch, we do research..</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="z-inhrt">
                        <div>
                            <img className="mx-auto" src={men} alt="smilling" />
                        </div>
                        <div className="mt-8 text-center lg:text-start">
                            <p className="text-xl font-bold">Executing</p>
                            <p className="text-gray-500 mx-auto lg:mx-0 w-64  text-sm">We plan, we strategize, we sketch, we do research.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Employees;