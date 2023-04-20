import React from 'react';
import './fixedTop.css'

export default function Fixedtop({combo, endQuestion}) {
  return (
    <>
    <div className={`fixedTopWrapper ${endQuestion && 'fullHeight'}`}>
      <div className="fixedTopCopy">
        <ul>
          {Object.values(combo).map(e => <li>{e}</li>)}
        </ul>
      </div>
    </div>
    </>
  )
}
