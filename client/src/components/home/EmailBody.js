import React from 'react'
import { showComponent, setShowComponent } from './EmailCard'
function EmailBody({ title }) {
  return (
    <div id='emailbody'>
      <div id='title'><p>{title}</p></div>
      <div id='subject'></div>
      <div id='body'></div>
    </div>
  )
}
export default EmailBody;