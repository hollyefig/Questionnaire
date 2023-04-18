import "./App.css";
import Fixedarrow from "./components/fixedArrow/Fixedarrow";
import Fixedtop from "./components/fixedTop/Fixedtop";
import Header from "./components/header/Header";
import Question1 from "./components/questions/Question1";
import { useState } from "react";

function App() {
  const [combo, setCombo] = useState(["-", "-", "-", "-"]);

  return (
    <div className="App">
      <Fixedtop combo={combo} />
      <Header />
      <Question1 />
      <Fixedarrow />
    </div>
  );
}

export default App;
