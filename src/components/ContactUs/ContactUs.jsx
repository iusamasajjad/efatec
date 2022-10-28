import React from "react";
import Arrow from "../../assets/images/arrow.png"
import Upload from "../../assets/images/upload.png"
const ContactUs = () => {
    return (
        <div className=" mt-28">
            <div>
                <div className="flex justify-center items-center">
                    <p className="text-5xl font-black text-center">CONTACT US</p>
                    <img data-aos="flip-left" className="w-20 relative bottom-5 left-4" src={Arrow} alt="arrow" />
                </div>
                <div className="flex justify-center">
                    <p className="text-xs">We offer solutions for every requirement. Contact us and see for yourself!</p>
                </div>
               <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center mt-10">
               <div className="mx-8">
                    <div className="border-b border-gray-600 z-10 relative mt-5">
                        <div style={{ top: "-13px" }} className="absolute bg-white top-0 z-30 left-3">
                            <p className="bg-white px-2">Name</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-600">
                        <input className="outline-none font-bold ml-3" type="Name" placeholder="Jonny Depp" />
                    </div>
                    <div className="py-4 border-b border-gray-400">
                        <input className="outline-none font-bol ml-3" type="email" placeholder="Email" />
                    </div>
                    <div className="py-4 border-b border-gray-400">
                        <input className="outline-none font-bol ml-3" type="text" placeholder="Company" />
                    </div>
                    <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row">
                        <div className="py-4 border-b border-gray-400">
                            <input className="outline-none font-bol ml-3" type="text" placeholder="City" />
                        </div>
                        <div className="py-4 border-b lg:ml-4 border-gray-400">
                            <input className="outline-none font-bol ml-3" type="text" placeholder="Postcode" />
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-400">
                        <textarea className="outline-none font-bol ml-3 w-full" type="text" placeholder="Message" />
                    </div>
                    <div className="flex items-center py-3 px-2">
                        <div class="containerr ">
                            <p className="font-bold">I agree that my data will only be used in connection with an order</p>
                            <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark"></span>
                        </div>
                    </div>
                </div>
                <div className="mx-8"> 
                    <div className="border border-dashed ">
                        <p className="text-xl text-center py-5 font-extrabold">UPLOAD FILE</p>
                        <div className="flex justify-center py-5">
                        <img src={Upload} alt="upload" />
                        </div>
                        <div className="flex justify-center py-5">
                            <input type="file" className="custom-file-input2"/>
                        </div>
                        <p className="text-center pb-4 text-xs text-gray-500">File size should be less than 500mbs</p>
                    </div>
                    <div>
                        <button className="w-full bg-green-600 py-4 text-white mt-4">SEND</button>
                    </div>
                </div>
               </div>
            </div>

        </div>
    )
}
export default ContactUs;