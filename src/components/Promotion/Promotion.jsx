import React from "react";
import Email from "../../assets/images/pro-email.png";
const Promotion = () => {
    return (
        <div className="mt-28" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <div className="flex justify-center text-center">
                <div>
                    <p className="text-green-400 text-sm">PROMOTIONAL</p>
                    <p className="text-indigo-900 text-xl my-3 font-extrabold">Subscribe To Our Newsletter</p>
                    <div className="flex justify-center">
                    <p className="text-sm text-gray-400 w-2/3">Our free newsletter provides you with the latest news and products about efatec</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-6">
                <div className="border mx-2 lg:w-1/2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <img className="mx-3" src={Email} alt="email" />
                        <input className="outline-none w-full" type="Email" placeholder="Enter Your email address"/>
                        </div>
                        <button className="py-2 bg-green-700 text-white mx-3 my-2 px-4">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion;