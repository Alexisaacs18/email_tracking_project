import React from 'react'

function EmailCard({ email, toggleComponent }) {

  const handleClick = () => {
    toggleComponent(email)
  }
  return (
    <div onClick={handleClick}>
      <li className='email'>
        <p>{email.email_title}</p>
      </li>
    </div>
  )
}
export default EmailCard;
