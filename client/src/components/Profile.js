import React, { useState, useEffect } from 'react'

export const Profile = props => {
    const [user , setUser] = useState(null)
    const [characters , setCharacters] = useState(null)

    useEffect(() => {
      fetch("/me", {
        credentials: "include",
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user)
            setCharacters(user.characters);
          });
        }
      });
    }, []);
    
    


    return(
        <div className="profile">
            <h2>Profile</h2>
            <h2>Your Characters</h2>
        </div>
    )
}
export default Profile