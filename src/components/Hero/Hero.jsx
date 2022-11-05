import tyre from "../../assets/images/tyre.png";
import bettery from "../../assets/images/battery.png";
import weight from "../../assets/images/Icon-9.png";
import machine from "../../assets/images/machine.png";
import tyre_2 from "../../assets/images/tyre-2.png";
import tool from "../../assets/images/tool.png";
import arrow from "../../assets/images/arrow-up.png";
import bike from "../../assets/images/bike.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
const Hero = ()=>{
    const flip =useRef(false);

    useEffect(()=>{
        gsap.to(flip.current,.8,{
            y:50,
            zIndex: 2,
            ease:Power3.easeOut
        })
    },[])
    return(
        <div className="bg-black relative z-negative">
             <div className="lg:ml-12 lg:pl-12 z-negative container mx-auto">
             
                <div className="lg:ml-12">
                    <div className="flex flex-col lg:flex-row items-center justify-around">
                    <div>
                    <div className="z-negative" style={{ fontSize: "50px" }} >
                    <p data-aos="fade-right" className="font-extrabold z-inhrt text-white">IN ZAHLEN</p>
                </div>
                    <div data-aos="fade-down" className="mt-8">
                        <img src={tyre} alt="tyre" />
                        <p className="font-bold text-white text-5xl my-6">10 KM</p>
                        <p className="text-gray-400 text-lg">Reichweite</p>
                    </div>
                    <div data-aos="fade-down" className="mt-10">
                        <img src={bettery} alt="bettery" />
                        <p className="font-bold text-white text-5xl my-4">120 AH</p>
                        <p className="text-gray-400 text-lg">Batterie Kapazität</p>
                    </div>
                    </div>
                    <div className="z-inhrt" ref={ flip}>
                        <img   className="mx-auto" src={machine} alt="machine" />
                    </div>
                    </div>
                    <div  className="flex flex-col lg:flex-row items-center justify-between">
                    <div data-aos="fade-down" className="lg:ml-16 mt-3 lg:mt-0">
                        <img src={weight} alt="bettery" />
                        <p className="font-bold text-white text-5xl my-4">200 kg</p>
                        <p className="text-gray-400 text-lg">Zuladung</p>
                    </div>
                    <div data-aos="fade-down" className="mt-5 lg:mt-0">
                        <img src={tyre_2} alt="bet" />
                        <p className="font-bold text-white text-5xl my-4">1500 kg</p>
                        <p className="text-gray-400 text-lg">Anhängelast</p>
                    </div>
                    <div data-aos="fade-down" className="mt-5 lg:mt-0">
                        <img src={tool} alt="tool" />
                        <p className="font-bold text-white text-5xl my-4">6 KM/H</p>
                        <p className="text-gray-400 text-lg">Geschwindigkeit</p>
                    </div>
                    <div className="bg-green-600 relative py-5 lg:w-1/4 ">
                        <div className="px-7">
                            <img src={bike} alt="bike" />
                            <p className="font-bold text-white text-3xl my-2">180 KG</p>
                        <p className="text-white text-sm">Eigengewicht</p>
                        <div className="flex justify-center my-3">
                        <button className="bg-white font-bold w-full text-center px-5 py-2 text-green-600">REQUEST</button>
                        </div>
                        </div>
                        <div className="bg-white absolute top-0 right-0 flex justfiy-center items-center h-10 py-4 px-4">
                                <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Hero;