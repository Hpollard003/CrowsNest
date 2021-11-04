import React from "react";

function Logout() {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {});
  };

  return (
    <div>
      <a
        href="/home"
      >
      
        <button className="btn btn-outline-danger border-top-0 border-bottom-0 border-danger border-2 mx-2 fw-bold" onClick={handleLogout}>
          Logout
        </button>
      </a>
    </div>
  );
}

export default Logout;
