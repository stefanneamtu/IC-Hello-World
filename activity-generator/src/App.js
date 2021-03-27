import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import './App.css';
import {HomePage} from './pages/HomePage'
import {ActivityGenerator} from './pages/ActivityGenerator'


function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> <p>Home</p></Link>
        </li>
        <li>
          <Link to="/activity"> <p>Random activity generator</p></Link>
        </li>
      </ul>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/activity">
          <ActivityGenerator />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
