import React, { useState, useEffect } from "react";
import NavBar from './NavBar'
import SideBar from './SideBar'
import EmailBody from './EmailBody'
import NewForm from './NewForm'
import { Formik, Form, Field, ErrorMessage } from 'formik'
function MainPage() {
  const url = "http://127.0.0.1:5555"
  const [emails, setEmails] = useState([])
  const [selectedEmail, setSelectedEmail] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const [newForm, setNewForm] = useState(false)


  useEffect(() => {
    fetch(url + "/emails")
      .then((res) => res.json())
      .then((emails) => {
        setEmails(emails);
        console.log("Emails:", emails)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const toggleComponent = (email) => {
    // Update the selectedEmail state, always show EmailBody
    setSelectedEmail(email);
    setShowComponent(true)
  }

  const handleNewPostClick = () => {
    setNewForm(!newForm)
    console.log("This function ran")
  }

  function deleteTemplate(id) {
    const email = emails.filter((email) => (email.id !== id))
    setEmails(email)
  }
  function addEmail(email) {
    setEmails((prevEmails) => [...prevEmails, email]);
  }

  return (
    <div>
      <div><NavBar /></div>
      <div><SideBar emails={emails} toggleComponent={toggleComponent} handleNewPostClick={handleNewPostClick} deleteTemplate={deleteTemplate} /></div>
      <div >{showComponent && <EmailBody email={selectedEmail} />}</div>
      <div>{newForm && <NewForm newForm={newForm} setNewForm={setNewForm} addEmail={addEmail} />}</div>
    </div>
  )
}
export default MainPage;