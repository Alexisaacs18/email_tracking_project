import React from 'react'
import {showComponent,setShowComponent} from './EmailCard'
function EmailBody({ email }){
  if (!email) return null;


    return(
      <div id= 'emailbody'>
        <div id ='title'><p>{email.email_title}</p></div>
        <div id ='subject'><p>{email.subject}</p></div>
        <div id ='body'><p>{email.body}</p></div>
      </div>
    )
  }
  export default EmailBody;