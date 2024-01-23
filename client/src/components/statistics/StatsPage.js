import React, { useState, useEffect } from "react";
import StatsNav from './StatsNav'
function StatsPage(){
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
            <StatsNav/>
            <p>Bullshit</p>
            </div>
    )
}
export default StatsPage;