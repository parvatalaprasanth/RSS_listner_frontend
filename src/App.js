import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav-bar.component';
import Login from './Auth-components/login.component';
import Signup from './Auth-components/signup.component';
import Welcome from './Feed-components/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
