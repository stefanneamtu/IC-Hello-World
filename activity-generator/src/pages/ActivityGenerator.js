import {createApi} from 'unsplash-js'
import {useState} from 'react'

export function ActivityGenerator(){
  
    var activities = ["Zoom call", "Walk in park", "Quiz"];
    var randActivity = randomActivity();
    const [imgUrl, setUrl] = useState(null);

    function showWheel(){
        <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
        randomActivity();
    }

    function randomActivity(){
        randActivity = activities[Math.floor(Math.random() * activities.length)];
        var queryString = randActivity.concat(" Home")
        console.log(randActivity)
        
        getImage(queryString) 
        return randActivity
    }

    function getImage(queryString) {
        const unsplash = createApi({
            accessKey: 'TXmsxWk4HiObYTj_WKQ-2jnB3wRe28pqV2MWrMDrdeY'
        })
        var response = unsplash.search.getPhotos({
            query: queryString
        })
        console.log(response)
    }

    return(
        <div>
        <h1>activity generator</h1>
        <button onClick={showWheel}>Pick me an activity</button>
        <p>{randActivity}</p>
        <img src={"https://images.unsplash.com/photo-1467238307002-480ffdd260f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgzODN8MHwxfHNlYXJjaHwyfHxXYWxrJTIwaW4lMjBwYXJrJTIwSG9tZXxlbnwwfHx8fDE2MTY4NzI0MTE&ixlib=rb-1.2.1&q=80&w=1080"} alr = "loading..." />        
        
      </div>
    );
}