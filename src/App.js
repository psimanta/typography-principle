import './App.scss';
import Intro from "./components/Intro";
import Gallery from './components/Gallery';
import Fonts from './components/Fonts';
import { useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getIntroImage, getGalleryImage } from "./redux/actionCreators";
gsap.registerPlugin(ScrollTrigger);


const mapDispatchToProps = dispatch => {
  return {
    getIntroImage: () => dispatch(getIntroImage()),
    getGalleryImage: () => dispatch(getGalleryImage())
  }
}

function App({ getIntroImage, getGalleryImage }) {
  useEffect(() => {
    getIntroImage();
    getGalleryImage();
    let sections = gsap.utils.toArray(".panel");
    function directionalSnap(increment) {
      let snapFunc = gsap.utils.snap(increment);
      return (raw, self) => {
        let n = snapFunc(raw);
        return Math.abs(n - raw) < 1e-4 || ((n < raw) === self.direction && self.direction < 0) ? n : self.direction < 0 ? n - increment : n + increment;
      };
    }
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".app",
        pin: true,
        scrub: 1,
        snap: directionalSnap(1 / (sections.length - 1)),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500"
      }
    });
  }, [])

  return (
    <div class="app">
      <section className="panel">
        <Intro />
      </section>
      <section className="panel">
        <Gallery />
      </section>
      <section className="panel">
        <Fonts />
      </section>
    </div>

  );
}

export default connect(null, mapDispatchToProps)(App);
