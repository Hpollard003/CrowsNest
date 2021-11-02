import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './containers/Home'
import { SignupPage } from './containers/SignupPage';
import { LoginPage } from './containers/LoginPage';
import Login from './components/Login';

const UnAuth = props => {
    return (
        <div className="App bg-primary bg-gradient">
        <header className="App-header">
        <Router>
          <Navbar/>
            <Switch>
  
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Login/>
  
            </Switch>
  
    
  
  
  
        </Router>
        </header>
  
      </div>
    )
}
export default UnAuth