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

  const q1ref = useRef(null),
    [q1Visible, setQ1Visible] = useState(false),
    q2ref = useRef(null),
    [q2Visible, setQ2Visible] = useState(false),
    q3ref = useRef(null),
    [q3Visible, setQ3Visible] = useState(false),
    q4ref = useRef(null);

  const observeCallback = (ent) => {
    if (ent[0].target.id === "question1Wrapper") {
      setQ1Visible(ent[0].isIntersecting);
    } else if (ent[0].target.id === "question2Wrapper") {
      setQ2Visible(ent[0].isIntersecting);
    } else if (ent[0].target.id === "question3Wrapper") {
      setQ3Visible(ent[0].isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observeCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const q1 = q1ref.current,
      q2 = q2ref.current,
      q3 = q2ref.current,
      q4 = q2ref.current;

    if (q1ref.current) observer.observe(q1ref.current);
    if (q2ref.current) observer.observe(q2ref.current);
    if (q3ref.current) observer.observe(q3ref.current);
    if (q4ref.current) observer.observe(q4ref.current);

    return () => {
      if (q1) observer.unobserve(q1);
      if (q2) observer.unobserve(q2);
      if (q3) observer.unobserve(q3);
      if (q4) observer.unobserve(q4);
    };
  }, [q1ref, q2ref, q3ref, q4ref]);

  return (
    <div className="App">
      <Fixedtop combo={combo} />
      <Header />
      <Question1 q1ref={q1ref} />
      <Question2 q2ref={q2ref} />
      <Question3 q3ref={q3ref} />
      <Question4 q4ref={q4ref} />
      <Fixedarrow
        q1ref={q1ref}
        q2ref={q2ref}
        q3ref={q3ref}
        q4ref={q4ref}
        q1Visible={q1Visible}
        q2Visible={q2Visible}
        q3Visible={q3Visible}
      />
    </div>
  );
}

export default App;
