import { useState } from "react";

import { AppHeader } from "../cmps/AppHeader.jsx";
// import { Layout } from "./Layout.jsx";

export function HomePage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <>
      <AppHeader
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />

      <main className="home-page">
        {!isUserLoggedIn && (
          <section className="enter-page">
            <h2>
              What will you <span className="design">design</span> today?
            </h2>
            <h3>
              Canva makes it easy to create and share professional designs.
            </h3>
            <button className="btn-signup">
              <span>Sign up for free</span>
            </button>
          </section>
        )}

        {/* {isUserLoggedIn && <Layout />} */}
      </main>
    </>
  );
}
