import React from "react";
import Founder_img from "../../assets/images/Mask.png";
import co_founder from "../../assets/images/Oval.png";

const Founder = () =>{
    return(
        <div className="mt-24">
                <div data-aos="flip-down" data-aos-duration="2000" className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center mx-auto">
                    <div className="mx-10">
                        <img className="mx-auto" style={{height:"450px", width:"500px"}} src={Founder_img} alt="founder" />
                    </div>
                    <div className="flex items-center mx-10">
                       <div>
                       <p className="text-green-400 text-center sm:text-center md:text-center lg:text-start text-sm">Founder Asks</p>
                        <div className="my-5 lg:w-64">
                            <p className="text-indigo-800 text-xl font-bold">“We have worked with everyone from the very small to the largest companies and municipalities.”</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <img src={co_founder} alt="co-founder" />
                            </div>
                            <div className="mx-4">
                                <p className="text-black font-extrabold">JARO</p>
                                <p className="text-gray-500 my-3">Co-Founder</p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
        </div>
    )
}
export default Founder;