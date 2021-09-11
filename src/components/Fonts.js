import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Fonts.scss";
import img from "../assets/bg1.jpg";
gsap.registerPlugin(ScrollTrigger);

const Fonts = () => {
    let bgImg = useRef(null);
    useEffect(() => {
        // gsap.from(bgImg, {
        //     scrollTrigger: {
        //         trigger: bgImg,
        //         start: "top center",
        //         end: "bottom bottom",
        //         scrub: true,
        //         id: "scrub",
        //         toggleActions: "restart pause reverse pause"
        //     },
        //     opacity: 0,
        //     duration: 3,
        //     delay: 0.5,
        // })
    })
    return (
        <div className="fonts">
            <div>
                <img src={img} alt="Background" ref={el => { bgImg = el }} />
            </div>
        </div>
    )
}

export default Fonts;