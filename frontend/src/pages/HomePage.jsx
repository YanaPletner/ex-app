import { useState } from "react";

import { AppHeader } from "../cmps/AppHeader.jsx";
import { Posts } from "../cmps/Posts.jsx";
import { AppCarousel } from "../cmps/AppCarousel.jsx";

export function HomePage({ isUserLoggedIn }) {
  return (
    <>
      <section className="home-page">
        <section className="enter-page">
          <h2>
            What will you <span className="design">design</span> today?
          </h2>

          <h3>Canva makes it easy to create and share professional designs.</h3>
          {!isUserLoggedIn && (
            <button className="btn-signup">
              <span>Sign up for free</span>
            </button>
          )}
        </section>

        {isUserLoggedIn && <AppCarousel />}
      </section>
    </>
  );
}
