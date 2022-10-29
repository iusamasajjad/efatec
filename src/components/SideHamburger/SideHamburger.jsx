import { useState } from "react";
import bar from "../../assets/images/bar.png";
import ExpandMenu from "../expandMenu/ExpandMenu";

const SideHamburger =(props)=>{

    const [menuClicked,setMenuClicked] = useState(false)

    const HandleMenuClicked = ()=>{
        setMenuClicked(!menuClicked)
        console.log(menuClicked)
    }
    return (
        <>
        <ExpandMenu toggle={menuClicked} />
        <div className="relative z-40 hidden lg:block">
            <div className="border-r h-screen flex justify-center items-center">
                <div onClick={HandleMenuClicked}>
                <img src={bar} alt="bar" />
                </div>
            </div>
        </div>
        </>
    )
}
export default SideHamburger;