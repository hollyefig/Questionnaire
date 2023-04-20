import React from "react";
import "./fixedArrow.css";
import { useState } from "react";

export default function Fixedarrow({num, scrollDown}) {


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
