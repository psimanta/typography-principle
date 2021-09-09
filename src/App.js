import './App.css';
import Intro from "./components/Intro";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getIntroImage } from "./redux/actionCreators";

const mapDispatchToProps = dispatch => {
  return {
    getIntroImage: () => dispatch(getIntroImage())
  }
}

function App({ getIntroImage }) {
  useEffect(() => {
    getIntroImage();
  }, [])

  return (
    <div>
      <Intro />
    </div>

  );
}

export default connect(null, mapDispatchToProps)(App);
