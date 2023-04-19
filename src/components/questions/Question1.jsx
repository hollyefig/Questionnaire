import React from 'react'
import './questions.css';

export default function Question1({q1ref}) {


  return (
    <div className='question1Wrapper' id="question1Wrapper" ref={q1ref}>
      <div className="q1ContentWindow">content Window</div>
    </div>
  )
}
