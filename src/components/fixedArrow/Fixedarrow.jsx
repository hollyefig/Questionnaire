import React from "react";
import "./fixedArrow.css";

export default function Fixedarrow({q1ref, q2ref, q3ref, q4ref, q1Visible, q2Visible, q3Visible}) {

  const scrollDown = () => {
    q1ref.current?.scrollIntoView({ behavior: "smooth" });
    if (q1Visible) {
      q2ref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (q2Visible) {
      q3ref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (q3Visible) {
      q4ref.current?.scrollIntoView({ behavior: "smooth" });
    }

  }

  return (
    <div className='fixedArrowWrapper'>
      <div className='fixedArrowContent'>
        <div className='arrowButton' onClick={scrollDown}>
          <span class='material-symbols-outlined'>arrow_downward</span>
        </div>
      </div>
    </div>
  );
}
