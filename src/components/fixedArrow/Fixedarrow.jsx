import React from "react";
import "./fixedArrow.css";

export default function Fixedarrow() {
  let scrollNum = 0;

  const arrowClicked = () => {
    console.log("arrow clicked");
    window.scrollTo({
      top: (scrollNum += 760),
      behavior: "smooth",
    });
  };

  return (
    <div className='fixedArrowWrapper'>
      <div className='fixedArrowContent'>
        <div className='arrowButton' onClick={arrowClicked}>
          <span class='material-symbols-outlined'>arrow_downward</span>
        </div>
      </div>
    </div>
  );
}
