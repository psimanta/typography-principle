import './App.scss';
import Intro from "./components/Intro";
import Gallery from './components/Gallery';
import { useEffect } from "react";
import { connect } from "react-redux";
import { getIntroImage, getGalleryImage } from "./redux/actionCreators";

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
  }, [])

  return (
    <div>
      <Intro />
      <Gallery />
      <div style={{ height: "1000px" }}>
        Hello
      </div>
    </div>

  );
}

export default connect(null, mapDispatchToProps)(App);
