import "./App.css";
import { useState, useRef, useEffect } from "react";
import Fixedarrow from "./components/fixedArrow/Fixedarrow";
import Fixedtop from "./components/fixedTop/Fixedtop";
import Header from "./components/header/Header";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import Question4 from "./components/questions/Question4";

function App() {
  const [combo, setCombo] = useState(["-", "-", "-", "-"]);

  return (
    <div className="App">
      <Fixedtop combo={combo} />
      <Header />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Fixedarrow />
    </div>
  );
}

export default App;
