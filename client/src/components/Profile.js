import React, { useState, useEffect } from 'react'

export const Profile = props => {
    const [user , setUser] = useState([])
    const [userCharacters , setUserCharacters] = useState([])
    
    function renderProfiles() {
      return (<h2>{user.username}</h2>)
  }
    useEffect(() => {
      fetch("/me", {
        credentials: "include",
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user)
            // console.log(user.characters)
          });
        }
      });
    }, []);

    useEffect(() => {
      fetch("/characters").then((res) => {
        if (res.ok) {
          res.json().then((characters) => {
            setUserCharacters(characters)
            // console.log(user.characters)
          });
        }
      });
    }, []);


  const renderCharacters = () => {
    return userCharacters.map( (char, ind) => (
      <div key={ind}>
        <li >
        {char.name}
        {char.ship}
        </li>
      </div>
    ))
  }


    return(
        <div className="profile">
            <h2>Profile</h2>
            {renderProfiles()}
            <h2>Your Characters</h2>
            {/* <Characters/> */}
            {renderCharacters()}
        </div>
    )
}
export default Profile