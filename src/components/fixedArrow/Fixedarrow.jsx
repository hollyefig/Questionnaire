import React from "react";
import "./fixedArrow.css";
import { useState } from "react";

export default function Fixedarrow() {

const [num, setNum] = useState(0);

const scrollDown = (e) => {
  if (num < 4) {
  setNum(num + 1)
  }
}

  return (
    <div className='fixedArrowWrapper'>
      <div className='fixedArrowContent'>
      <a href={`#q${num}`}>
        <div className='arrowButton' onClick={scrollDown}>
          <span class='material-symbols-outlined'>arrow_downward</span>
        </div>
      </a>

      </div>
    </div>
  );
}
