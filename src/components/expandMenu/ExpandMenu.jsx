import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const ExpandMenu = (props) => {

    const menu = useRef()
    const tl= useRef()
    const toggle = props.toggle

    useEffect (()=>{
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current.to(menu.current,{
            right:0,
            duration:0.7
        })
    },[])

    useEffect(()=>{
        toggle ? tl.current.play() : tl.current.reverse()
    },[toggle])
   
    return(
        <>
            <div ref={menu} className="ExpandMenu z-40">
                
            </div>
        </>
    )
}
export default ExpandMenu;