import React, { useEffect, useState } from 'react'
import { showComponent, setShowComponent } from './EmailCard'
function EmailBody({ email }) {

  console.log(email)

  const [sent, setSent] = useState(email.number_sent)
  const [replies, setReplies] = useState(email.number_replied)
  const [unsubscribed, setUnsubscribed] = useState(email.number_unsubscribed)

  useEffect(() => {
    setSent(email.number_sent)
    setReplies(email.number_replied)
    setUnsubscribed(email.number_unsubscribed)
  }, [email])

  function handleSent() {
    setSent(prev => prev + 1)
  }

  function handleReplies() {
    setReplies(prev => prev + 1)
  }

  function handleUnsubscribed() {
    setUnsubscribed(prev => prev + 1)
  }


  return (
    <div id='emailbody'>
      <div id='title'><p>Title: {email.email_title}</p></div>
      <div id='subject'><p>Subject: {email.subject}</p></div>
      <div id='body'><p>{email.body}</p></div>
      <button id='sendButton' onClick={handleSent}>Sent: {sent}</button>
      <button id='replybutton' onClick={handleReplies}>Replies: {replies}</button>
      <button id='unsubscribedbutton' onClick={handleUnsubscribed}>Unsubscribed: {unsubscribed}</button>
    </div>
  )
}
export default EmailBody;