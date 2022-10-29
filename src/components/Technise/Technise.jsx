import engine from "../../assets/images/engine.png";
import padal from "../../assets/images/pedal.png";
import H from "../../assets/images/H.png";
import Suspension from "../../assets/images/Suspension.png";
import dable_bat from "../../assets/images/double-bat.png";
import Seatbelt from "../../assets/images/Seatbelt.png";
import wheel from "../../assets/images/wheel.png";
import meter from "../../assets/images/meter.png";
import screw from "../../assets/images/screw.png";
import download from "../../assets/images/download.png";
import envelop from "../../assets/images/envelop.png";
import call from "../../assets/images/call.png";
import arrow from "../../assets/images/white_arrow.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
const Technise = () => {

    const flip =useRef(false);

    useEffect(()=>{
        gsap.to(flip.current,.8,{
            rotation: "360",
            ease:Power3.easeOut
        })
    },[])
    return (
        <div>
            <div className="flex lg:flex-row flex-col justify-center">
                <div className="bg-yellow w-1/2">
                </div>
                <div className="lg:mx-10 py-10">
                    <div>
                        <p className="text-xl text-black font-extrabold">TECHNISCHE INFORMATIONEN</p>
                    </div>
                    <div>
                        <p data-aos="fade-left" className="text-gray-500 mt-3">Antrieb</p>
                        <div data-aos="fade-right" className="flex flex-row lg:flex-row justify-center lg:justify-start items-center">
                            <div className="text-center flex items-center">
                                <div ref={flip}>
                                    <img className="mx-auto" src={engine} alt="engine" />
                                    <p className="text-lg font-bold text-black">1200 WATT</p>
                                    <p className="text-sm text-gray-500">MOTOR</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div className="text-center flex bg-gray-100 px-8 py-4 mt-4 lg:mt-0 items-center ml-3">
                                <div>
                                    <img className="mx-auto" src={padal} alt="engine" />
                                    <p className="text-lg font-bold text-green-400 py-3">16:1</p>
                                    <p className="text-xs text-gray-500">GETRIEBE</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-12">
                        <p data-aos="fade-left" className="text-gray-500">Abmessungen</p>
                        <div data-aos="fade-right" className="flex flex-row justify-center lg:justify-start lg:flex-row items-center">
                            <div className="text-center flex items-center">
                                <div>
                                    <img className="mx-auto" src={H} alt="engine" />
                                    <p className="text-lg font-bold text-black">1100X700X1100 MM</p>
                                    <p className="text-sm text-gray-500">FAHRZEUG</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div className="text-center flex px-8 py-4 items-center lg:ml-3">
                                <div>
                                    <img className="mx-auto" src={Suspension} alt="engine" />
                                    <p className="text-lg font-bold text-black">180 KG</p>
                                    <p className="text-xs text-gray-500">GETRIEBE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p data-aos="fade-left" className="text-gray-500">Batteriesystem</p>
                        <div className="flex flex-col items-center lg:flex-row">
                            <div data-aos="fade-right" className="text-center flex items-center">
                                <div>
                                    <img className="mx-auto" src={dable_bat} alt="engine" />
                                    <p className="text-lg font-bold text-black">24V, 2X 12V</p>
                                    <p className="text-sm text-gray-500">SPANNUNG</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div data-aos="fade-right" className="text-center flex px-8 py-4 items-center mt-3 lg:mt-0 lg:ml-3">
                                <div>
                                    <img className="mx-auto" src={dable_bat} alt="engine" />
                                    <p className="text-lg font-bold text-black">120 AH</p>
                                    <p className="text-xs text-gray-500">KAPAZITÄT</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div data-aos="fade-left" className="text-center flex items-center mt-3 lg:mt-0 lg:ml-3">
                                <div>
                                    <img className="mx-auto" src={H} alt="engine" />
                                    <p className="text-sm font-bold text-black">WARTUNGSFREIE GEL BATTERIEN</p>
                                    <p className="text-sm text-gray-500">TYP</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div data-aos="fade-left" className="text-center flex px-8 py-4 items-center mt-3 lg:mt-0 lg:ml-3">
                                <div>
                                    <img className="mx-auto" src={Seatbelt} alt="engine" />
                                    <p className="text-lg font-bold text-black">24 V 25 A</p>
                                    <p className="text-xs text-gray-500">LADEGERÄT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p data-aos="fade-left" className="text-gray-500">Leistung</p>
                        <div className="flex">
                            <div data-aos="fade-right" className="text-center flex items-center">
                                <div>
                                    <img className="mx-auto" src={wheel} alt="engine" />
                                    <p className="text-lg font-bold text-black">6 KM/H</p>
                                    <p className="text-sm text-gray-500">GESCHWINDIGKEIT</p>
                                </div>
                                <div style={{ width: "2px" }} className="h-6 bg-gray-400 ml-8"></div>
                            </div>
                            <div data-aos="fade-right" className="text-center flex px-8 py-4 items-center ml-3">
                                <div>
                                    <img className="mx-auto" src={meter} alt="engine" />
                                    <p className="text-lg font-bold text-black">10 KM</p>
                                    <p className="text-xs text-gray-500">REICHWEITE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-b mt-8"> </div>
                    <div className="flex justify-center items-center">
                        <img src={screw} alt="screw" />
                        <p className="text-green-600 px-4 py-8">Download Technische Zeichnung</p>
                        <img src={download} alt="download" />
                    </div>
                    <div data-aos="fade-right" className="flex flex-col lg:flex-row justify-end">
                        <div className="border-t px-10 py-5 border-r">
                            <img src={envelop} alt="envolop" />
                        </div>
                        <div className="border-t px-10 py-5 border-r">
                            <img src={call} alt="envolop" />
                        </div>
                        <button className="flex justify-between items-center pl-12 bg-green-500 text-white">Produkt Anfragen
                            <img className="lg:px-8" src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Technise;