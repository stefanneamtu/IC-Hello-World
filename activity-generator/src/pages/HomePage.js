import GoogleLogin from 'react-google-login'
import { Component } from 'react';

export class HomePage extends Component {

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>Activity Generator</h1>
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