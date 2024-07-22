import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Sidebar } from "./Sidebar.jsx";
import { LoginSignUp } from "./LoginSignUp.jsx";

export function AppHeader() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLoginSignUp, setOpenLoginSignUp] = useState(false);

  function handleSidebar() {
    setOpenSidebar(!openSidebar);
  }
  function handleLoginSignUp() {
    setOpenLoginSignUp(!openLoginSignUp);
  }

  function handleOverlayClick() {
    setOpenSidebar(false);
  }

  return (
    <div className="header-container">
      {openLoginSignUp && (
        <LoginSignUp setOpenLoginSignUp={setOpenLoginSignUp} />
      )}

      {openSidebar && (
        <Sidebar
          handleOverlayClick={handleOverlayClick}
          handleLoginSignUp={handleLoginSignUp}
        />
      )}

      <header className="app-header">
        <button
          className="sidebar-btn"
          title="show main menu"
          onClick={handleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
            ></path>
          </svg>
        </button>
        <NavLink to={"/"}>
          <img
            src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
            alt=""
          />
        </NavLink>

        <nav>
          <button className="btn-login" onClick={handleLoginSignUp}>
            <span>Log in</span>
          </button>

          <button className="btn-signup" onClick={handleLoginSignUp}>
            <span>Sign up</span>
          </button>
        </nav>
      </header>
    </div>
  );
}
