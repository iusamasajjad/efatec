import logo from "../../assets/images/white-logo.png";
import insta from "../../assets/images/linkedIn.png";
import fb from "../../assets/images/fb.png";
import efatec from "../../assets/images/efatec.png";
const Footer = ()=>{
    return(
       <div style={{backgroundColor:"#202330"}}>
         <div  className=" flex justify-center">
            <div className="flex flex-col lg:flex-row py-28">
                <div className="w-32 mr-10">
                    <img src={logo} alt="logo" />
                </div>
                <div className="ml-10">
                    <div>
                        <ul className="flex flex-col lg:flex-row mt-7 lg:mt-0 text-xl font-extrabold text-white">
                            <li>HOME</li>
                            <li className="lg:ml-4">PRODUCTS</li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row text-xl font-extrabold text-white">
                            <li>PROJECT  MANAGEMENT</li>
                            <li className="lg:ml-4">CREDENTIALS</li>
                        </ul>
                        <p className="text-xl font-extrabold text-white">CONTACT</p>
                    </div>
                    <div>
                        <div className="flex flex-col lg:flex-row my-6">
                            <p className="text-sm text-gray-500">CATEGORY</p>
                            <div>
                                <ul className="text-sm text-white flex flex-col lg:flex-row">
                                    <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">TRANSPORT CAR</li>
                                    <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">TRANSPORTER</li>
                                    <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">STAND AND SIT TRACTORS</li>
                                </ul>
                                <ul className="text-sm text-white flex flex-col lg:flex-row">
                                <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">TOW TRACKTER WITH LIFTING FUNCTION</li>
                                    <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">TRACTOR UPTO 10 T</li>
                                    <li className="lg:ml-4 mt-3 lg:mt-0 text-xs">TRACTOR FROM 10 T</li>
                                </ul>
                                <p className="text-sm text-white lg:ml-4 mt-3 lg:mt-0 text-xs">PLATFORM TRUCK</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row my-7">
                            <p className="text-sm text-gray-500">PAGES</p>
                            <div className="lg:ml-4">
                                <ul className="text-sm text-white flex">
                                    <li className="lg:ml-4 text-xs">PRIVACY</li>
                                    <li className="ml-4 text-xs">IMPRINT</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className="text-white px-8 py-3 bg-green-700">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="border-b">

            </div>
            <div className="flex items-center justify-between">
                <div className="flex ml-36 py-5">
                    <img className="w-6 h-6" src={fb} alt="facebook" />
                    <img className="ml-4 w-6 h-6" src={insta} alt="instagram" />
                </div>
                <div className="w-32 pr-10">
                    <img src={efatec} alt="efatec" />
                </div>
            </div>
       </div>
    )
}
export default Footer;