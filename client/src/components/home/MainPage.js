import React, { useState, useEffect } from "react";
import NavBar from './NavBar'
import SideBar from './SideBar'
import EmailBody from './EmailBody'
function MainPage() {
  const url = "http://127.0.0.1:5555"
  const [emails, setEmails] = useState([])

  useEffect(() => {
    fetch(url + "/emails")
      .then((res) => res.json())
      .then((emails) => {
        setEmails(emails);
        console.log("Emails:", emails)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => {
      setShowComponent(!showComponent);
    };
  return (
    <div>
      <div><NavBar /></div>
      <div><SideBar emails={emails} toggleComponent={toggleComponent} /></div>
      <div> {showComponent && <EmailBody/>}</div>
    </div>
  )
}
export default MainPage;