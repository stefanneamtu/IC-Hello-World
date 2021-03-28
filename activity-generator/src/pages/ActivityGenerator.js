import './ActivityGenerator.css';
import Button from 'react-bootstrap/Button';
import { createApi } from 'unsplash-js'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {contacts} from './HomePage';


export function ActivityGenerator() {

  var activities = ["Zoom call", "Walk in park", "Quiz"];
  var randActivity = randomActivity();
  var randContact = randomContact();
  const [imgUrl, setUrl] = useState(null);


  function showWheel() {
    <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
    randActivity = randomActivity();
    randContact = randomContact();  

    const element = (
      <div class="wrapper">
        <h1>activity generator</h1>
        <button class="button" onClick={showWheel}>Pick me an activity</button>
        <p>{randActivity} with {randContact}!</p>
        <img src={"imgUrl"} lt="loading..." />

      </div>
    )

    ReactDOM.render(element, document.getElementById('root'));
  }

  function randomActivity() {
    randActivity = activities[Math.floor(Math.random() * activities.length)];
    var queryString = randActivity.concat(" Home")
    // console.log(randActivity)

    // console.log(queryString)
    getImage(queryString)
    return randActivity
  }

  function randomContact() {
    randContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(contacts);
    console.log(contacts[0]);
    return randContact;
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

  return (
    <div class="wrapper">
      <h1> Random activity generator</h1>
      <button class="button" onClick={showWheel}>Pick me an activity</button>
      <p>{randActivity}</p>
      <img src={"imgUrl"} alt="loading..." />


    </div>
  );
}