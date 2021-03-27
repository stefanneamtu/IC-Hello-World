
import GoogleLogin from 'react-google-login'
import { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './HomePage.css';

export class HomePage extends Component {

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>.keepintouch</h1>
            <h2>Lorem Ipsum</h2>
            <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
        <GoogleLogin
          clientId = { process.env.REACT_APP_GOOGLE_SIGNIN_KEY }
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}