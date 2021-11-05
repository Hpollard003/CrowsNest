import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./AuthenticatedApp";
import UnAuth from "./UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentUser(data);
        });
      }
    });
  }, []);

  return (
    <Router>
      {currentUser ? (
        <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
      ) : (
        <UnAuth setCurrentUser={setCurrentUser} />
      )}
    </Router>
  );
}

export default App;
