import React from 'react'

export default function Answermsg({blurOverlay, removeBlurOverlay, answerMsg}) {
  return (
    <div className={`answerMsgWrapper ${blurOverlay && `visible`}`} onClick={removeBlurOverlay}>
    <div className={`answerMsg ${blurOverlay && `answerMsgSlideDown`}`}>
      {answerMsg}
    </div>
    </div>
  )
}
