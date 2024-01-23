import React, {useState} from 'react'
import EmailBody from './EmailBody'
function EmailCard({ title ,toggleComponent}) {
  




  return (
    <div onClick={toggleComponent}>
    <li className='email'  >
      <p>{title}</p>
      <p></p>
    </li>
   
    
    </div>

  )
}
export default EmailCard;
