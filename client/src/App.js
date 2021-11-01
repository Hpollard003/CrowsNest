import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import NewCharacter from './components/NewCharacterForm';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App bg-dark bg-gradient">
      <Router>

      <header className="App-header">
        <p>
          Pirate Creator beta for Capstone.
        </p>
        <NewCharacter/>
        <SignUp/>
        <Login/>
        <Logout/>
      </header>

          <Switch>

            <Route/>

          </Switch>

      </Router>

    </div>
  );
}

export default App;
