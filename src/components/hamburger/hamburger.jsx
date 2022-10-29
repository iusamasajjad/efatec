import bar from "../../assets/images/bar.png";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
const Hamburger = () => {
    return (
        <>
            <nav className="py-5 px-3 bg-white flex justify-between items-center">
                <div>
                    <img src={bar} alt="bar" />
                </div>
                <ul>
                    <li className="w-32">
                        <img src={logo} alt="logo" />
                    </li>
                </ul>
                <ul className="flex items-center">
                    <div className="flex items-center">
                        <li className="mr-3 font-bold">
                    <Link to ={"/Worker"}>KONTAKT</Link>
                    </li>
                        <li className="w-8 flex justify-center items-center text-white h-8 bg-green-600 rounded-full"> > </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Hamburger;