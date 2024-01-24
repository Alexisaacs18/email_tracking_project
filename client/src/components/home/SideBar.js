import React, { useState } from "react";
import EmailCard from './EmailCard'
function SideBar({ emails,toggleComponent, handleNewPostClick }) {
  const [search, setSearch] = useState('')

  const filtered = emails.filter(email => email.email_title.toUpperCase().includes(search.toUpperCase()))

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav id='sidebar'>
      <ul>
        <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
        <button onClick={handleNewPostClick} id="composedbutton">NewPost</button>
        {filtered.map((email) => (
          <EmailCard
            key={email.id}
            email={email}
            toggleComponent={toggleComponent}
          />
        ))}
      </ul>
    </nav>
  );
}
export default SideBar;