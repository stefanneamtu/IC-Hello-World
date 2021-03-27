export function ActivityGenerator() {

    var activities = ["Zoom call", "Walk in park", "Quiz"];
    var randActivity = activities[Math.floor(Math.random() * activities.length)];

    return(
        <div>
            <h1>Activity Generator</h1>
            <p>{randActivity}</p>
        </div>
    )
}