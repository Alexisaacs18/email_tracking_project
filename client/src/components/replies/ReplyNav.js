import React from 'react'
import { useNavigate} from "react-router-dom";

function ReplyNav(){
  const navigate = useNavigate();
  
    const navigateToHome = () => {
      navigate('/')
    };
    const navigateToReplies = () => {
      navigate('/ReplyPage')
    };
    const navigateToStatistics = () => {
      navigate('/Statistics')
    };
    const navigateToCompanies = () => {
      navigate('/Companies')
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