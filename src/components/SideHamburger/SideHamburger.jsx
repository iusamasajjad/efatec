import bar from "../../assets/images/bar.png";

const SideHamburger =()=>{

    return (
        <div className="relative hidden lg:block">
            <div className="border-r h-screen flex justify-center items-center">
                <img src={bar} alt="bar" />
            </div>
        </div>
    )
}
export default SideHamburger;