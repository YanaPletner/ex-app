import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Sidebar } from "./Sidebar.jsx";
import { LoginSignUp } from "./LoginSignUp.jsx";

export function AppHeader({ isUserLoggedIn, setIsUserLoggedIn }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState(null); // null, 'login', or 'signup'

  function handleLogin() {
    setFormType("login");
    setOpenForm(true);
    if (openSidebar) setOpenSidebar(false);
  }

  function handleSignup() {
    setFormType("signup");
    setOpenForm(true);
    if (openSidebar) setOpenSidebar(false);
  }

  function handleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  function handleOverlayClick() {
    setOpenSidebar(false);
  }

  return (
    <div className="header-container">
      {openForm && (
        <LoginSignUp setOpenForm={setOpenForm} formType={formType} />
      )}

      {openSidebar && (
        <Sidebar
          handleOverlayClick={handleOverlayClick}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          setOpenSidebar={setOpenSidebar}
        />
      )}

      <header className="app-header">
        <section>
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
        </section>

        <section>
          {!isUserLoggedIn && (
            <>
              <button className="btn-login" onClick={handleLogin}>
                <span>Log in</span>
              </button>

              <button className="btn-signup" onClick={handleSignup}>
                <span>Sign up</span>
              </button>
            </>
          )}

          {isUserLoggedIn && (
            <>
              <button
                className="btn-logout"
                onClick={() => setIsUserLoggedIn(false)}
              >
                <span>Log Out</span>
              </button>
              <div className="profile">
                <img
                  src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                  alt=""
                />
              </div>
            </>
          )}
        </section>
      </header>
    </div>
  );
}
