import React, { useState, useEffect } from "react";
import NavBar from './NavBar'
import SideBar from './SideBar'
import EmailBody from './EmailBody'
function MainPage(){
  const url = "http://localhost:3001"
  const [emails, setEmails] = useState([])
  
  useEffect(() => {
    console.log("Fetching emails...")
    fetch(url + "/emails")
      .then((res) => res.json())
      .then((emails) => {
        setEmails(emails);
        console.log("Emails:",emails)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
    
    return(
        <div>
        <div><NavBar/></div>
        <div><SideBar emails={emails} /></div>
        <div><EmailBody/></div>
        </div>
    )
}
export default MainPage;