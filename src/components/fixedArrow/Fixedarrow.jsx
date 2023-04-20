import React from "react";
import "./fixedArrow.css";

export default function Fixedarrow({num, scrollDown, arrowShow}) {


  return (
    <div className='fixedArrowWrapper' style={{visibility: arrowShow ?'visible' : 'hidden', opacity: arrowShow ? 1 : 0}}>
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
