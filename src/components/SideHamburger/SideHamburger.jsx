import React, { useEffect, useRef, useState } from "react";
import bar from "../../assets/images/bar.png";
import { gsap } from "gsap";
const SideHamburger =()=>{

    return (
        <div className="relative hidden lg:block">
            <div className="border-r h-screen flex justify-center items-center">
                <img className="che" src={bar} alt="bar" />
            </div>
        </div>
    )
}
export default SideHamburger;