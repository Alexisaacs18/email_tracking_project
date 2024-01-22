import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainPage from './components/home/MainPage'


function App() {
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
  

    return (
    <div id="app-container">
      <div><MainPage emails={emails}/></div>
      
      
    </div>
  );
}

// // Configure our Router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     // Props to Home gets passed here
//     element: <Home />
//   },
//   {
//     path: "/Replies",
//     // Props to Replies gets passed here
//     element: <Replies />
//   },
//   {
//     path: "/Statistics",
//     // Props to Statistics gets passed here
//     element: <Statistics />
//   },
//   {
//     path: "/Companies",
//     // Props to Companies gets passed here
//     element: <Companies />
//   },
// ]);

export default App;
