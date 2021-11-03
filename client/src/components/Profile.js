import React, { useState, useEffect } from "react";

export const Profile = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  const renderProfile = () => {
    return (
      <div>
        <img
          src={`${user.img_url}`}
          class="rounded-circle w-50 border border-primary border-5"
          alt={`${user.username} pic`}
        />
        <h2 class="fs-1 text-info fw-bold fst-italic d-inline-flex p-2">{user.username}</h2>
      </div>
    );
  };

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle mw-100">
      <h2 className="fst-italic fs-1">Profile</h2>
      {renderProfile()}
    </div>
  );
};
export default Profile;
