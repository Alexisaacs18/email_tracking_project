import React from 'react'
import { useNavigate} from "react-router-dom";

function ReplyNav(){
  const navigate = useNavigate();
  
    const navigateToHome = () => {
      navigate('/')
    };
    const navigateToReplies = () => {
      navigate('ReplyPage')
    };
    const navigateToStatistics = () => {
      navigate('ReplyPage')
    };
    const navigateToCompanies = () => {
      navigate('ReplyPage')
    };

    return(
      <nav className ='navbar'> 
      <ul>
        <li><p>Email Tracker</p></li>
        <li><button onClick={navigateToHome}>Home</button></li>
        <li><button onClick={navigateToReplies}>Replies</button></li>
        <li><button onClick={navigateToStatistics}>Statistics</button></li>
        <li><button onClick={navigateToCompanies}>Companies</button></li>
      
      </ul>
      </nav>
  )}
export default ReplyNav;