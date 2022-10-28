import React, { useEffect, useRef, useState } from "react";
import bar from "../../assets/images/bar.png";
import { gsap } from "gsap";
const SideHamburger =()=>{
    const menu = useRef()
    const tl=useRef()

    useEffect(()=>{
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current.to(menu.current,{
            top:0,
            duration:0.7
        })
    },[])
   
    const [menuClicked,setMenuClicked] = useState(false)
    const handleMenuClicked =()=>{
        setMenuClicked(!menuClicked)
        console.log(menuClicked);
    }
    useEffect (()=>{
        menuClicked ? tl.current.play() : tl.current.reverse()
    },[menuClicked])
    return (
        <div className="relative hidden lg:block">
            <div className="border-r h-screen flex justify-center items-center">
                <img className="che" src={bar} alt="bar" 
               onClick={handleMenuClicked} />
            </div>
        </div>
    )
}
export default SideHamburger;