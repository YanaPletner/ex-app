import { NavLink } from "react-router-dom";

export function Navbar({
  handleOverlayClick,
  handleLogin,
  handleSignup,
  isUserLoggedIn,
}) {
  return (
    <>
      <div
        className="sidebar-navbar-overlay fade-in"
        onClick={handleOverlayClick}
      ></div>

      <div className="sidebar-navbar fade-in">
        {isUserLoggedIn && (
          <section className="user-details">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
              alt=""
            />

            <section>
              <span>user name</span>
              <span>user email</span>
            </section>
          </section>
        )}
        <nav>
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
        </nav>

        {!isUserLoggedIn && (
          <section className="login-signup-section">
            <button className="btn-login" onClick={handleLogin}>
              <span>Log in</span>
            </button>

            <button className="btn-signup" onClick={handleSignup}>
              <span>Sign up</span>
            </button>
          </section>
        )}
      </div>
    </>
  );
}
