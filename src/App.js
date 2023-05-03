import "./App.css";
import { useState } from "react";
import { questionData } from "./questionData";
import Fixedarrow from "./components/fixedArrow/Fixedarrow";
import Fixedtop from "./components/fixedTop/Fixedtop";
import Header from "./components/header/Header";
import Question from "./components/questions/Question";
import Bluroverlay from "./components/blurOverlay/Bluroverlay";
import Answermsg from "./components/blurOverlay/Answermsg";

function App() {
  const [combo, setCombo] = useState({
      0: "-",
      1: "-",
      2: "-",
      3: "-",
    }),
    [arrowShow, setArrowShow] = useState(true),
    [blurOverlay, setBlurOverlay] = useState(false),
    [answerMsg, setAnswerMsg] = useState(),
    // dictate question number
    [num, setNum] = useState(-1),
    [endQuestion, setEndQuestion] = useState(false),
    [isCorrect, setIsCorrect] = useState(false);

  // remove blur overlay

  const removeBlurOverlay = () => {
    if (isCorrect === false) {
      setBlurOverlay(false);
    }
  };

  // scroll
  const scrollDown = () => {
    setIsCorrect(false);

    if (num < questionData.length) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
    if (num === questionData.length - 1) {
      setEndQuestion(true);
    }

    setBlurOverlay(false);
    setArrowShow(false);
  };

  // when answer is clicked
  const answerClicked = (e, qd) => {
    setBlurOverlay(true);

    // if answer is correct
    if (e.isTrue) {
      setIsCorrect(true);
      setAnswerMsg(
        <>
          <h2>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h2>
          <p>Correct! Press the arrow to proceed!</p>
        </>
      );
      setArrowShow(true);

      if (qd.id === 0) {
        setCombo({ ...combo, 0: e.number });
      } else if (qd.id === 1) {
        setCombo({ ...combo, 1: e.number });
      } else if (qd.id === 2) {
        setCombo({ ...combo, 2: e.number });
      } else if (qd.id === 3) {
        setCombo({ ...combo, 3: e.number });
      }
    }
    // if answer is wrong
    else {
      setAnswerMsg(
        <>
          <h2>(◡︵◡)</h2>
          <p>Sorry! Try again!</p>
        </>
      );
    }
  };

  return (
    <div className="App">
      <Fixedtop combo={combo} endQuestion={endQuestion} />
      <Header />
      {questionData.map((e) => {
        return <Question answerClicked={answerClicked} data={e} />;
      })}

      <Fixedarrow scrollDown={scrollDown} num={num} arrowShow={arrowShow} />
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
