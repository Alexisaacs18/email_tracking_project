import React, { useState } from "react";
import EmailCard from './EmailCard'
function SideBar({ emails,toggleComponent }) {
  const [search, setSearch] = useState('')

  const filtered = emails.filter(email => email.email_title.toUpperCase().includes(search.toUpperCase()))

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav id='sidebar'>
      <ul>
        <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
        {filtered && filtered.map((email) => {
          return (
            <EmailCard
              title={email.email_title}
              key={email.id}
              body={email.body}
              replied={email.number_replied}
              sent={email.number_sent}
              unsubscribed={email.number_unsubscribed}
              subject={email.subject}
              toggleComponent = {toggleComponent}
            />
          );
        })}
      </ul>
    </nav>
  )
}
export default SideBar;