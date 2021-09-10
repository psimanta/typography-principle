import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Gallery.scss";
gsap.registerPlugin(ScrollTrigger);
const mapStateToProps = ({ gallery }) => {
    return {
        gallery: gallery
    }
}

const Gallery = ({ gallery }) => {
    let galleryEl = useRef(null);
    let imgGroup = useRef(null);
    let tl = gsap.timeline();
    useEffect(() => {
        tl
            .from(imgGroup, {
                scrollTrigger: {
                    trigger: imgGroup,
                    start: "top center",
                    end: "top top",
                    scrub: true,
                    id: "scrub",
                    toggleActions: "restart pause reverse pause"
                },
                y: 300,
                duration: 2,
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