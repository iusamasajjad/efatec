import Arrow from "../../assets/images/arrow.png"
import battery from "../../assets/images/car-battery.png"
import electric from "../../assets/images/electric.png"
import arrow from "../../assets/images/arrow-up.png";
const Option = () => {
    return (
        <div className="lg:h-screen z-negative">
            <div className="flex justify-center items-center mt-12">
                <p className="text-5xl font-black text-center">OptioNEN</p>
                <img data-aos="fade-right" className="w-20 relative bottom-5 left-4" src={Arrow} alt="arrow" />
            </div>
            <div className="flex justify-center">
                <p className="text-xs">Stellen Sie Ihr Fahrzeug nach Ihren Anforderungen zusammen.</p>
            </div>
            <div className="lg:ml-12 lg:pl-12">
                <div className="lg:ml-12 border-b flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <img src={battery} alt="battery" />
                        <p className="font-bold border-b-2 border-gray-700">Batterien</p>
                    </div>
                    <div>
                        <p className="mt-6 ml-6">Rader und Rollen</p>
                    </div>
                    <div>
                        <p className="mt-6 ml-6">LED</p>
                    </div>
                    <div>
                        <p className="mt-6 ml-6">Kupplungsoptionen</p>
                    </div>
                    <div>
                        <p className="mt-6 ml-6">Sonstige Optionen</p>
                    </div>
                    <div>
                        <p className="mt-6 ml-6">Anhanger</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div data-aos="flip-right" className=" ml-8">
                        <img src={electric} alt="battery" />
                    </div>
                    <div className="w-full px-4 py-4">
                       <div data-aos="fade-left">
                       <p className="text-sm font-bold">Erweiterte Batteriekapazität 195 Ah, anstatt 120 Ah</p>
                        <p className="text-sm">Erhöhen Sie die Arbeitsdauer mit einer größeren Batteriekapazität</p>
                       </div>
                        <div className="border-b mt-4">

                        </div>
                       <div className="flex border-b justify-between">
                        <div data-aos="fade-right">
                        <div>
                            <p className="text-lg font-bold">Select Option to add in Request</p>
                        </div>
                        <form className="mt-4">
                            <div>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label className="ml-3 font-bold" for="html">Standard 120 Ah</label>
                            </div>
                            <div>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label className="ml-3" for="css">195 Ah, Anstatt 120 Ah</label>
                            </div>
                            <input type="radio"  name="fav_language" value="JavaScript" />
                            <label className="ml-3" for="javascript">230 Ah, anstatt 120 Ah</label>
                        </form>
                        </div>
                        <div>
                        <div data-aos="flip-right">
                        <button className="bg-green-600 font-bold flex flex-col items-center  w-32 text-center px-5 py-2 text-white">
                        <div className="bg-white flex justify-center w-full items-center h-20 mb-8 py-4 px-2">
                                <img src={arrow} alt="arrow" />
                        </div>
                        Request TO ADD</button>
                        </div>
                     
                        
                    </div>
                        </div>
                       </div>
                    </div>
                    <div className="flex">
                    <div data-aos="flip-right" className="lg:w-1/5 flex flex-col justify-center items-center lg:ml-8">
                        <img width={"130px"} src={electric} alt="electric" />
                        <p className="text-black text-center text-xs font-bold">Erweiterte Batteriekapazität 195 Ah, anstatt 120 Ah</p>
                    </div>
                    <div data-aos="flip-right" className="border-r pr-5">
                    <img width={"130px"} src={electric} alt="electric" />
                    </div>
                    </div>
                </div>
            </div>
        
    )
}
export default Option;