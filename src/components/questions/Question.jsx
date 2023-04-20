import React from 'react'
import './questions.css';

export default function Question({answerClicked, data}) {


  return (
    <div className={data.wrapper} id={data.compId}>
      <div className={data.content}>
        <div className="qHeading">
          <h2>{data.question}</h2>
        </div>
        <div className="qAnswerWrapper">
          <ul>

            {data.answers.map(e => {
              return (
              <li onClick={() => answerClicked(e, data)}>
              <input type='radio' name={data.radioName} id={e.id} />
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
