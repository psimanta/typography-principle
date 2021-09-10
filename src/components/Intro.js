import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import "./Intro.scss";

const mapStateToProps = ({ introImageUrl }) => {
    return {
        introImageUrl: introImageUrl
    }
}

const Intro = ({ introImageUrl }) => {
    let heading1Box = useRef(null);
    let heading2Box = useRef(null);
    let heading1 = useRef(null);
    let introLower = useRef(null);
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
            .to(introLower, {
                opacity: 1,
                duration: 2
            }, "4")
    }, []);

    return (
        <div className="intro">
            <div className="heading">
                <p className="heading2">PRINCIPLES</p>
                <div className="heading2-box" ref={el => { heading2Box = el }}></div>
                <p className="heading1" ref={el => { heading1 = el }}>TYPOGRAPHY</p>
                <div className="heading1-box" ref={el => { heading1Box = el }}></div>
            </div>
            <div className="intro-lower" ref={el => { introLower = el }}>
                <div className="intro-img-container">
                    {introImageUrl ? <img src={introImageUrl} alt="Intro" width="90%" /> : ""}
                </div>
                <div className="intro-lower-text">
                    <p>
                        More complex work with typography is becoming popular in web and web design is becoming more like posters and graphic design.
                        <br />
                        <br />
                        Obys agency is pleased to share with you some of our principles of working with typography that will help improve your experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Intro);