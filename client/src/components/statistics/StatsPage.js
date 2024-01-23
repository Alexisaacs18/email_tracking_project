import React, { useState, useEffect } from "react";
import StatsNav from './StatsNav'
import StatsCard from './StatsCard'
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

    const[search,setSearch] = useState('')

    const filtered = emails.filter(email => email.name.toUpperCase().includes(search.toUpperCase()))
    
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div>
            <StatsNav/>
            <ul id="statslist">
                <input placeholder="search" className="searchbar" value={search} onChange={updateSearch}></input>
            {filtered && filtered.map((email) => {return(
                <StatsCard email={filtered} key={email.id} name={email.name}/>
            )})}
            </ul>
            </div>
    )
}
export default StatsPage;