import GoogleLogin from 'react-google-login'
import { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './HomePage.css';

var accessToken;
export var contacts = [];

function importContacts() {
  fetch('https://www.google.com/m8/feeds/contacts/default/full', {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    contacts = [];
    for (const contact of data.getElementsByTagName("entry")) {
      const contactTitle = contact.getElementsByTagName("title")[0].childNodes;
      if (contactTitle.length > 0) {
        contacts.push(contactTitle[0].textContent);
      }
    }
  });
}

export class HomePage extends Component {

  responseGoogle = (response) => {
    console.log(response);
    accessToken = response.accessToken;
  }

  render() {
    return (
      <div>
        <h1>.keepintouch</h1>

        <h2>Afraid of moving away from your friends?</h2>
        <p>Try our new app that allows you to live random experiences and activities with your friends. Just sign in using your Google account and we will take care of the rest</p>
        <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="wheel" class="center"/>
        
        <GoogleLogin
          clientId = { process.env.REACT_APP_GOOGLE_SIGNIN_KEY }
          scope = "profile email https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/calendar"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <Button onClick={importContacts}>Import Contacts</Button>
      </div>
    )
  }
}