// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import { SignupPage } from "./containers/SignupPage";
import { LoginPage } from "./containers/LoginPage";
import Login from "./components/Login";

const UnAuth = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </div>
  );
};
export default UnAuth;
