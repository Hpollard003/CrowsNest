import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthHome } from "./containers/AuthHome";
import { CreatorPage } from "./containers/CreatorPage";
import Profile from "./components/Profile";
import Home from "./containers/Home";
import Editor from "./components/Editor";

const Auth = ({setCurrentUser, currentUser}) => {
  return (
    <div>
      <Router>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <Switch>
          <Route exact path="/" component={AuthHome} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/creator" component={CreatorPage} />
          <Route exact path="/edit" component={Editor} />
          <Route exact path='*' component={AuthHome} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Auth;
