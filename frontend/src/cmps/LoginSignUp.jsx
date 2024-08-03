import { useState } from "react";

export function LoginSignUp({ setOpenForm, formType }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  function handleInput({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(ev) {
    // ev.preventDefault();
    console.log(user);
  }

  return (
    <>
      <div className="login-signup-overlay fade-in"></div>
      <div className="login-signup-form">
        <span className="close-btn" onClick={() => setOpenForm(false)}>
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

        <form onSubmit={handleSubmit}>
          <h2>Log in or sign up in seconds</h2>
          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(ev) => handleInput(ev)}
              value={user.email}
            />
          </div>

          <div className="form-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(ev) => handleInput(ev)}
              value={user.password}
            />
          </div>

          {formType === "signup" && (
            <div className="form-input">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                onChange={(ev) => handleInput(ev)}
                value={user.confirmPassword}
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            <span>Submit</span>
          </button>
        </form>

        <div className="divide">
          <hr></hr>
          <span>or</span>
          <hr></hr>
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
          >
            <path
              fill="#4285f4"
              d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
            ></path>
            <path
              fill="#34a853"
              d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
            ></path>
            <path
              fill="#fbbc02"
              d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
            ></path>
            <path
              fill="#ea4335"
              d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
            ></path>
          </svg>
          <span>Continue with gmail</span>
        </button>

        <button>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 12.058c0-5.28-4.253-9.558-9.5-9.558s-9.5 4.279-9.5 9.558c0 4.771 3.473 8.725 8.016 9.442v-6.68H8.104v-2.762h2.412V9.952c0-2.395 1.417-3.718 3.588-3.718 1.04 0 2.126.186 2.126.186v2.352h-1.198c-1.18 0-1.548.738-1.548 1.494v1.792h2.635l-.421 2.763h-2.214V21.5c4.543-.717 8.016-4.67 8.016-9.442z"
              fill="#1877F2"
            ></path>
          </svg>
          <span>Continue with facebook</span>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
          >
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
          </svg>

          <span>Continue with GitHub</span>
        </button>
      </div>
    </>
  );
}
