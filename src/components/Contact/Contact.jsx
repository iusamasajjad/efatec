import React from "react";
import contact_img from "../../assets/images/contact.png"
import mouse_img from "../../assets/images/mouse-line.png"
const Contact = () => {
    return (
        <div>
            <div  className="flex mt-12 relative justify-center">
                <img className="z-30" src={contact_img} alt="contact" />
                <div  style={{ fontSize: "120px" }} className="flex absolute hidden lg:flex left-28 top-0">
                    <p className="font-extrabold leading-6">K</p>
                    <p className="font-extrabold z-40 leading-6">O</p>
                    <p className="font-extrabold leading-6">N</p>
                </div>
                <div style={{ fontSize: "120px" }} className="flex absolute hidden lg:flex right-36 bottom-0">
                    <p className="font-extrabold z-40 leading-6">T</p>
                    <p className="font-extrabold  leading-6">A</p>
                    <p className="font-extrabold z-40 leading-6">K</p>
                    <p className="font-extrabold leading-6">I</p>
                </div>
            </div>
            <div className="mt-20 pt-12">
                <div data-aos="fade-down" className="border-b relative flex justify-center items-center w-full">
                <button  className="border text-sm bg-white absolute flex items-center  px-2 py-2">
                   <img className="w-6" src={mouse_img} alt="mouse" /> Scroll for More</button>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;