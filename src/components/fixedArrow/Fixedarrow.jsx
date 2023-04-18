import React from 'react';
import './fixedArrow.css';
import { useEffect } from 'react';

export default function Fixedarrow() {


  const arrowClicked = () => {
    console.log('arrow clicked');
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log('scrolling')
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div className='fixedArrowWrapper'>
      <div className="fixedArrowContent">
        <div className="arrowButton" onClick={arrowClicked}>
        <span class="material-symbols-outlined">
        arrow_downward
        </span>
        </div>

      </div>
    </div>
  )
}
