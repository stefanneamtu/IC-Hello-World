import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './HomePage.css';

export function HomePage() {
    return(<div>
        <div>
            <h1>.keepintouch</h1>
            <h2>Lorem Ipsum</h2>
            <img src={"https://i.pinimg.com/originals/94/cc/d5/94ccd56f2a24d1eb9486d86fcee0b3b1.gif"} alt="loading..." />
        </div>
    )
}