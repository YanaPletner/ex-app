export function LoginSignUp({ setOpenLoginSignUp }) {
  return (
    <>
      <div className="login-signup-overlay fade-in"></div>
      <div className="login-signup-form">
        <span className="close-btn" onClick={() => setOpenLoginSignUp(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4 4 8 8m-8 0 8-8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </span>
        <form>
          <h2>Log in or sign up in seconds</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <a></a>
        </form>
      </div>
    </>
  );
}
