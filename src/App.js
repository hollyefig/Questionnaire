import "./App.css";
import { useState } from "react";
import { questionData } from "./questionData";
import Fixedarrow from "./components/fixedArrow/Fixedarrow";
import Fixedtop from "./components/fixedTop/Fixedtop";
import Header from "./components/header/Header";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import Question4 from "./components/questions/Question4";
import Bluroverlay from "./components/blurOverlay/Bluroverlay";
import Answermsg from "./components/blurOverlay/Answermsg";

function App() {
  const [combo, setCombo] = useState(["-", "-", "-", "-"]);
  const [arrowShow, setArrowShow] = useState(true);
  const [blurOverlay, setBlurOverlay] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [answerMsg, setAnswerMsg] = useState();
  // dictate question number
  const [num, setNum] = useState(0);

  // remove blur overlay
  const removeBlurOverlay = () => {
    setBlurOverlay(false);
  };

  const scrollDown = () => {
    if (num < 4) {
      setNum(num + 1);
    } else {
      setNum(1);
    }
    removeBlurOverlay();
  };

  // when answer is clicked
  const answerClicked = (e) => {
    setBlurOverlay(true);

    e.isTrue
      ? setAnswerMsg("Correct! Press the arrow to proceed!")
      : setAnswerMsg("Sorry! Try again! ");
  };

  return (
    <div className="App">
      <Fixedtop combo={combo} />
      <Header />
      <Question1 answerClicked={answerClicked} />
      <Question2 />
      <Question3 />
      <Question4 />
      <Fixedarrow scrollDown={scrollDown} num={num} />
      {blurOverlay && <Bluroverlay blurOverlay={blurOverlay} />}
      <Answermsg
        blurOverlay={blurOverlay}
        answerMsg={answerMsg}
        removeBlurOverlay={removeBlurOverlay}
      />
    </div>
  );
}

export default App;
