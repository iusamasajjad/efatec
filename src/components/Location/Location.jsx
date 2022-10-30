import React from "react";
import map from "../../assets/images/map.png"
import address from "../../assets/images/address.png"
import phone from "../../assets/images/phone.png"
import email from "../../assets/images/email.png"
const Location = (props) => {
    return (
        <div ref={props.myRef} className="mt-20 z-negative">
            <div   className="mx-auto z-negative">
                <img  data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full z-inhrt" src={map} alt="map" />
            </div>
            <div  className="flex flex-col sm:flex-col md:flex-col lg:flex-row mx-auto justify-between w-4/5">
                <div data-aos="fade-right" className="border z-inhrt lg:w-1/4 mt-3 flex justify-center text-center">
                    <div>
                        <div className="border w-fit mx-auto mt-4 px-6 py-6 flex justify-center items-center">
                            <img src={address} alt="address" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold pt-8">ADDRESS</p>
                            <p className="text-sm text-gray-500 py-5">455 West Orchard Street Kings Mountain, NC 28086</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="border z-inhrt lg:w-1/4 mt-3 flex justify-center text-center">
                    <div>
                        <div className="border w-fit mx-auto mt-4 px-6 py-6 flex justify-center items-center">
                            <img src={phone} alt="address" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold pt-8">Phone</p>
                            <div className="text-sm text-gray-500 py-5">
                            <p>+94 [0] 2104</p>
                            <p>+94 [0] 1388-40</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="border z-inhrt lg:w-1/4 mt-3 flex justify-center text-center">
                    <div>
                        <div className="border w-fit mx-auto mt-4 px-6 py-6 flex justify-center items-center">
                            <img src={email} alt="address" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold pt-8">Email</p>
                            <p className="text-sm text-gray-500 py-5">INFO@EFATEC.DE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;