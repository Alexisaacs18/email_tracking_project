import React, { useState, useEffect } from "react";
import StatsNav from './StatsNav'
import StatsCard from './StatsCard'
function StatsPage() {
    const url = "http://127.0.0.1:5555"
    const [emails, setEmails] = useState([])
    const [replies, setReplies] = useState([])

    useEffect(() => {
        fetch(url + "/emails")
            .then((res) => res.json())
            .then((emails) => {
                setEmails(emails);
                console.log(emails)
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`${url}/replies`)
            .then((res) => res.json())
            .then((data) => {
                setReplies(data)
                console.log(data)
            })
    }, [])

    const [search, setSearch] = useState('')

    const filtered = emails.filter(email => email.email_title.toUpperCase().includes(search.toUpperCase()))

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <StatsNav />
            <ul id="statslist">
                <input placeholder="search" id="statssearchbar" value={search} onChange={updateSearch}></input>
                {filtered && filtered.map((email) => {
                    return (
                        <StatsCard email={filtered}
                            key={email.id}
                            title={email.email_title}
                            sent={email.number_sent}
                            replied={email.number_replied}
                            unsubscribed={email.number_unsubscribed}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default StatsPage;