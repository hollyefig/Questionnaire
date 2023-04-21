import React from 'react';
import './fixedTop.css'

export default function Fixedtop({combo, endQuestion}) {
  return (
    <>
    <div className={`fixedTopWrapper ${endQuestion && 'fullHeight'}`}>
      <div className="fixedTopContent">
        <ul>
          {Object.values(combo).map(e => <li>{e}</li>)}
        </ul>
        <div className={`fixedTopCopy ${endQuestion && 'fixedTopCopyShow'}`}>
          <h2>(✿◠‿◠)</h2>
          <p>
            Yey! Here is the secret code!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
