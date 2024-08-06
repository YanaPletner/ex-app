import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Navbar } from "./Navbar.jsx";
import { LoginSignUp } from "./LoginSignUp.jsx";
import { UserModal } from "./UserModal.jsx";

export function AppHeader({ isUserLoggedIn, setIsUserLoggedIn }) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState(null); // null, 'login', or 'signup'
  const [showUserModal, setShowUserModal] = useState(false);

  function handleLogin() {
    setFormType("login");
    setOpenForm(true);
    if (openNavbar) setOpenNavbar(false);
  }

  function handleSignup() {
    setFormType("signup");
    setOpenForm(true);
    if (openNavbar) setOpenNavbar(false);
  }

  function handleNavbar() {
    setOpenNavbar(!openNavbar);
  }

  function handleOverlayClick() {
    setOpenNavbar(false);
  }

  return (
    <div className="header-container">
      {openForm && (
        <LoginSignUp setOpenForm={setOpenForm} formType={formType} />
      )}

      {openNavbar && (
        <Navbar
          handleOverlayClick={handleOverlayClick}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          setOpenNavbar={setOpenNavbar}
          isUserLoggedIn={isUserLoggedIn}
        />
      )}

      <header className="app-header">
        <section>
          <button
            className="navbar-btn"
            title="show menu"
            onClick={handleNavbar}
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

          <nav className="header-navbar">
            <NavLink to={"/"}>
              <button>
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06"
                  ></path>
                </svg>
              </button>
            </NavLink>

            <button>
              <span>Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06"
                ></path>
              </svg>
            </button>

            <button>
              <span>Templates</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06"
                ></path>
              </svg>
            </button>
            <NavLink to={"/posts"}>
              <button>
                <span>Posts</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06"
                  ></path>
                </svg>
              </button>
            </NavLink>
          </nav>
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
              <button className="create-design-btn">
                <span>Create a design</span>
              </button>

              <div
                className="profile"
                onClick={() => setShowUserModal(!showUserModal)}
              >
                <img
                  src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                  alt=""
                />
              </div>

              {showUserModal && (
                <UserModal setIsUserLoggedIn={setIsUserLoggedIn} />
              )}
            </>
          )}
        </section>
      </header>
    </div>
  );
}
