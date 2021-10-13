import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import CreateProject from './CreateProject';
import Login from './Login';
import Project from './Project';

function App() {
  /*
    const getCookie = () => {
      const cookieName = 'uid';

      const cookieArr = document.cookie.split(';')

      for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=')

        if (cookieName === cookiePair[0].trim()) {
          return cookiePair[1];
        } else {
          return '';
        }
      }
    }
    
    // const cookie = new Cookies();

    const id = getCookie();
  */
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/projects/submit" component={CreateProject} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
