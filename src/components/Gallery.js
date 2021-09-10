import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Gallery.scss";

const mapStateToProps = ({ gallery }) => {
    return {
        gallery: gallery
    }
}

const Gallery = ({ gallery }) => {
    let galleryEl = useRef(null);
    let imgGroup = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to(imgGroup, {
            y: 300,
            duration: 2,
            scrollTrigger: {
                trigger: imgGroup,
                start: "top center",
                end: "top top",
                scrub: true,
                id: "scrub"
            }
        })
    }, [])
    return (
        <div className="gallery" ref={el => { galleryEl = el }}>
            {console.log(gallery)}
            <p>Gallery</p>
            <div className="img-group" ref={el => { imgGroup = el }}>
                {gallery ? gallery.map((item, i) => (<span>
                    <img src={item} alt="Gallery" className={`gallery-img-${i + 1}`} />
                </span>)) : ""}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Gallery);