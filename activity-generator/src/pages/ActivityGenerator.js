import './ActivityGenerator.css';
import Button from 'react-bootstrap/Button';
import {createApi} from 'unsplash-js'
import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


export function ActivityGenerator(){
  
    var activities = ["Zoom call", "Walk in park", "Quiz", "Take photographs", "Yoga", "Jogging or running"];
    var randActivity = randomActivity();


    function showWheel(){
        <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
        randActivity = randomActivity();

        const element = (
            
            <div>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/"> <p2>Home</p2></Link>
                        </li>
                        <li>
                            <Link to="/activity"> <p2>Random activity generator</p2></Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
            <div class="wrapper">
            <h1>Random activity generator</h1>
            <button class="button" onClick={showWheel}>Pick me an activity</button>
            <p>{randActivity}</p>       
            
            </div>
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

    return(
        <div class="wrapper">
            <h1> Random activity generator</h1>
            <button class="button" onClick={showWheel}>Pick me an activity</button>
            <p>{randActivity}</p>    
        

        </div>
    );
}