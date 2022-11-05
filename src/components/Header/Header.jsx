import logo from "../../assets/images/logo.png"
import {  Link } from "react-router-dom";
const Header =()=>{
    return(
        <div>
            <nav className="py-8 flex justify-between">
                <ul>
                    <Link to={"/"}><li className="w-32">
                    <img src={logo} alt="logo" />
                    </li>
                    </Link>
                </ul>
                <ul className="flex items-center">
                    <li className="mr-8 border-b cursor-pointer border-gray-700 font-bold">OPEN MENU</li>
                    <li className="mr-8 border-b cursor-pointer border-gray-700 hidden lg:block font-bold">PRODUKTE  </li>
                    <li className="mr-8 border-b cursor-pointer border-gray-700 hidden lg:block font-bold">INFO@EFATEC.DE</li>
                    <div className="flex items-center">
                    <li className="mr-8 font-bold">
                    <Link to ={"/Worker"}>KONTAKT</Link>
                    </li>
                    <li className="w-8 flex justify-center items-center text-white h-8 bg-green-600 rounded-full"> > </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
export default Header;