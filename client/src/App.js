import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const url = "http://localhost:3001"
  const [emails, setEmails] = useState([])
  const[search,setSearch] = useState('')
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
  
  const filtered = emails.filter(email => email.name.toUpperCase().includes(search.toUpperCase()))
  
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

    return (
    <div id="app-container">
      <div><NavBar/></div>
      <div><SideBar emails={filtered} search={search} updateSearch={updateSearch}/></div>
      <div><EmailBody/></div>
    </div>
  );
}

// Configure our Router
const router = createBrowserRouter([
  {
    path: "/",
    // Props to Home gets passed here
    element: <Home />
  },
  {
    path: "/Replies",
    // Props to Replies gets passed here
    element: <Replies />
  },
  {
    path: "/Statistics",
    // Props to Statistics gets passed here
    element: <Statistics />
  },
  {
    path: "/Companies",
    // Props to Companies gets passed here
    element: <Companies />
  },
]);

function NavBar(){
    return(
      <nav id = 'navbar'> 
      <ul>
        <li><p>Email Tracker</p></li>
        <li><button>Home</button></li>
        <li><button>Emails</button></li>
        <li><button>Statistics</button></li>
        <li><button>Companies</button></li>
      </ul>
      </nav>
  )}

function SideBar({emails,search,updateSearch}){
   return(
    <nav id = 'sidebar'>
      <ul>
      <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
      {emails && emails.map((email) => {
        return (
          <EmailCard
            name ={email.name}
            key={email.id}
            email={email}
           />
        );
      })}
      </ul>
    </nav>
  )}
  
function EmailCard({email}){
    return(
      <li className = 'email'>
        <p>{email.name}</p>
      </li>
    )
}

function EmailBody(){
  return(
    <div id= 'emailbody'>
      <p>This is the email body</p>
      <p>Cash App:$Snackpack818</p>
    </div>
  )
}
  export default App;
