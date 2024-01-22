import React from 'react'
function EmailCard({email}){
    return(
      <li className = 'email'>
        <p>{email.name}</p>
      </li>
    )
}
export default EmailCard;