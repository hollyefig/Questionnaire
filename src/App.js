import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("Hello There");

  setTimeout(() => {
    setWord("General Kenobi");
  }, 2000);
  return (
    <div className="App">
      <header className="App-header">
        <p>{word}</p>
      </header>
    </div>
  );
}

export default App;
