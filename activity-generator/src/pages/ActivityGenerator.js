export function ActivityGenerator(){
  
    var activities = ["Zoom call", "Walk in park", "Quiz"];
    var randActivity = activities[Math.floor(Math.random() * activities.length)];

    function showWheel(){
        <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
    }

    function randomActivity(){
    }

    return(
        <div>
        <h1>activity generator</h1>
        <button onClick={showWheel}>Pick me an activity</button>
        <p>{randActivity}</p>
      </div>
    );
}