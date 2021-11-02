import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './containers/Home'
import { SignupPage } from './containers/SignupPage';
import { LoginPage } from './containers/LoginPage';
import { CreatorPage } from './containers/CreatorPage';
import Profile  from './components/Profile';



const Auth = props => {


  return (
    <div className="App bg-primary bg-gradient">
      <header className="App-header">
      <Router>
        <Navbar/>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/creator" component={CreatorPage} />
            

          </Switch>

  



      </Router>
      </header>

    </div>
  );
}

export default Auth;