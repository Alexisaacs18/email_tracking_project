import React from 'react'

function EmailCard({ email, toggleComponent, deleteTemplate }) {

  const url = "http://127.0.0.1:5555"

  const handleClick = () => {
    toggleComponent(email)
  }

  function handleDelete() {
    deleteTemplate(email.id)
    fetch(`${url}/emails/${email.id}`, {
      method: "DELETE",
    })
  }

  return (
    <div>
      <div onClick={handleClick}>
        <li className='email'>
          <p>{email.email_title}</p>
        </li>
      </div>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}
export default EmailCard;
