import React from 'react'
import './questions.css';
import { questionData } from '../../questionData';

export default function Question1({q1ref}) {

console.log(questionData[0].answers)


  return (
    <div className='question1Wrapper' id="question1Wrapper" ref={q1ref}>
      <div className="q1ContentWindow">
        <div className="qHeading">
          <h2>{questionData[0].question}</h2>
        </div>
        <div className="qAnswerWrapper">
          <ul>

            {questionData[0].answers.map(e => {
              return (
              <li>
              <input type='radio' name={questionData[0].radioName} id={e.id}/>
              <label for={e.id}>{e.answer}</label>
              </li>
              )
            })}

          </ul>
        </div>
      </div>
    </div>
  )
}
