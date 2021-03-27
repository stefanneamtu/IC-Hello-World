import './ActivityGenerator.css';
import Button from 'react-bootstrap/Button';


export function ActivityGenerator(){
  
    var activities = ["Zoom call", "Walk in park", "Quiz"];
    var randActivity;

    function showWheel(){
        randActivity = activities[Math.floor(Math.random() * activities.length)];
    }

    return(
        <div class="wrapper">
            <h1> Random activity generator</h1>
        
            <button class="button" onClick={showWheel}>Pick me an activity</button>
            <p>{randActivity}</p>
        </div>
    );
}