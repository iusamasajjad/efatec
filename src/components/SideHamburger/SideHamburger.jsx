import { useState } from "react";
import bar from "../../assets/images/bar.png";
import ExpandMenu from "../expandMenu/ExpandMenu";
import { useRef } from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};

const SideHamburger =(props)=>{
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    const [menuClicked,setMenuClicked] = useState(false)

    const HandleMenuClicked = ()=>{
        setMenuClicked(!menuClicked)
        console.log(menuClicked)
        if(menuClicked === false){
            blockScroll()
        }else{
            allowScroll()
        }
    }
    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) return;
    
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight =
          parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
        html.style.position = 'relative'; /* [1] */
        html.style.overflow = 'hidden'; /* [2] */
        body.style.position = 'relative'; /* [1] */
        body.style.overflow = 'hidden'; /* [2] */
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    
        scrollBlocked.current = true;
      };
      const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) return;
    
        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
    
        scrollBlocked.current = false;
      };
    
    
    return (
        <>
        <ExpandMenu toggle={menuClicked} />
        <div className="relative z-40 hidden lg:block">
            <div className="border-r h-screen flex justify-center items-center">
                <div className="cursor-pointer" onClick={HandleMenuClicked}>
                <img src={bar} alt="bar" />
                </div>
            </div>
        </div>
        </>
    )
}
export default SideHamburger;