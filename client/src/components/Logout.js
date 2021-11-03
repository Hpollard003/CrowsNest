import React from "react";

function Logout() {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {});
  };

  return (
    <div><a href="/home" className="btn btn-outline-danger border-top-0 border-bottom-0 border-danger border-2 mx-2">
      <button className='text-dark btn btn-sm fw-bold ' onClick={handleLogout}>
        LOGOUT
      </button>
      </a>
    </div>
  );
}

export default Logout;
