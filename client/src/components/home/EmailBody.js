import React, { useEffect, useState } from 'react'
import { showComponent, setShowComponent } from './EmailCard'
function EmailBody({ email }) {
  const url = "http://127.0.0.1:5555"
  const [sent, setSent] = useState(email.number_sent)
  const [replies, setReplies] = useState(email.number_replied)
  const [unsubscribed, setUnsubscribed] = useState(email.number_unsubscribed)

  useEffect(() => {
    setSent(email.number_sent)
    setReplies(email.number_replied)
    setUnsubscribed(email.number_unsubscribed)
  }, [email])

  function handleSent() {
    updateSent(sent)
    setSent(prev => prev + 1)
  }

  function handleReplies() {
    updateReply(replies)
    setReplies(prev => prev + 1)
  }

  function handleUnsubscribed() {
    updateUnsubscribe(unsubscribed)
    setUnsubscribed(prev => prev + 1)
  }

  function updateSent(sent) {
    fetch(`${url}/emails/${email.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number_sent: sent + 1
      })
    })
  }

  function updateReply(reply) {
    fetch(`${url}/emails/${email.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number_replied: reply + 1
      })
    })
  }

  function updateUnsubscribe(unsubscribed) {
    fetch(`${url}/emails/${email.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number_unsubscribed: unsubscribed + 1
      })
    })
  }


  return (
    <div id='emailbody'>
      <div id='title'><p>Title: {email.email_title}</p></div>
      <div id='subject'><p>Subject: {email.subject}</p></div>
      <div id='body'><p>{email.body}</p></div>
      <button onClick={handleSent}>Sent: {sent}</button>
      <button onClick={handleReplies}>Replies: {replies}</button>
      <button onClick={handleUnsubscribed}>Unsubscribed: {unsubscribed}</button>
    </div>
  )
}
export default EmailBody;