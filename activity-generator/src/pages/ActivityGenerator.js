import './ActivityGenerator.css';
import Button from 'react-bootstrap/Button';
//import { google } from 'googleapis';
import {createApi} from 'unsplash-js'
import React, {useState} from 'react'
import ReactDOM from 'react-dom';


export function ActivityGenerator(){
  
    var activities = ["Zoom call", "Walk in park", "Quiz"];
    var randActivity = randomActivity();
    const [imgUrl, setUrl] = useState(null);


    function showWheel(){
        <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
        randActivity = randomActivity();

        const element = (
            <div class="wrapper">
            <h1>activity generator</h1>
            <button class="button" onClick={showWheel}>Pick me an activity</button>
            <p>{randActivity}</p>
            <button class="button" onClick={addEvent}>Add to my calendar</button>
            <img src={"imgUrl"} alt = "loading..." />
                    
            
            </div>
        )

        ReactDOM.render(element, document.getElementById('root'));
    }

    function randomActivity(){
        randActivity = activities[Math.floor(Math.random() * activities.length)];
        var queryString = randActivity.concat(" Home")
        console.log(randActivity)
        
        console.log(queryString)
        getImage(queryString) 
        return randActivity
    }

    function getImage(queryString) {
        const unsplash = createApi({
            accessKey: 'TXmsxWk4HiObYTj_WKQ-2jnB3wRe28pqV2MWrMDrdeY'
        })
        var response = unsplash.search.getPhotos({
            query: queryString
        }).then((response) => {
            console.log(response)
            // setUrl(response["results"][0]["urls"]["regular"])
        })
        
    }

    function addEvent() {
        //console.log(typeof google);
        //const fs = require('fs');
        //var credentials;

        //fs.readFile('credentials.json', (err, content) => {
            //if (err) return console.log('Error loading client secret file:', err);
             //Authorize a client with credentials, then call the Google Calendar API.
            
            //credentials = JSON.parse(content);
            
        //});
        //const {client_secret, client_id, redirect_uris} = credentials.installed;

        /*
        const auth = new google.auth.OAuth2(
            process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);

        

        //adds an event to my calendar

        //const calendar = google.calendar({version: 'v3', auth});
        

        // Refer to the Node.js quickstart on how to setup the environment:
        // https://developers.google.com/calendar/quickstart/node
        // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
        // stored credentials.

        var start = new Date();
        

        const MILLIS_PER_HOUR = 3600000;
        
        var end = new Date(start.getTime() + MILLIS_PER_HOUR);

        /*

        var event = {
            'summary': randActivity,
            'start': {
            'dateTime': start.toISOString(),
            },
            'end': {
            'dateTime': end.toISOString(),
            },
            'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
            ],
            },
        };

        /*
        
        calendar.events.insert({
            auth: auth,
            calendarId: 'primary',
            resource: event,
        }, function(err, event) {
            if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
            }
            console.log('Event created: %s', event.htmlLink);
        }); */
    }

    return(
        <div class="wrapper">
            <h1> Random activity generator</h1>
            <button class="button" onClick={showWheel}>Pick me an activity</button>
            <p>{randActivity}</p>
            <img src={"imgUrl"} alt = "loading..." />        
        

        </div>
    );
}