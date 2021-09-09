import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "./Intro.css";

const Intro = () => {
    let heading1Box = useRef(null);
    let heading2Box = useRef(null);
    let heading1 = useRef(null);
    let heading2 = useRef(null);
    let tl = gsap.timeline()
    useEffect(() => {
        tl
            .from(heading1Box, {
                height: 170,
            })
            .to(heading1Box, {
                height: 0,
                duration: 1.5
            })
            .to(heading1, {
                opacity: 0,
                duration: 1
            }, "1.8")
            .to(heading2Box, {
                height: 0,
                duration: 1.5
            }, "3")
    }, [])
    return (
        <div className="intro">
            <div className="heading">
                <h1 className="heading2" ref={el => { heading2 = el }}>PRINCIPLES</h1>
                <div className="heading2-box" ref={el => { heading2Box = el }}></div>
                <h1 className="heading1" ref={el => { heading1 = el }}>TYPOGRAPHY</h1>
                <div className="heading1-box" ref={el => { heading1Box = el }}></div>
            </div>
            <div className="intro-lower">
                <p>H</p>
            </div>
        </div>
    )
}

export default Intro;