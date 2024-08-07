import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AppHeader } from "./cmps/AppHeader.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Posts } from "./cmps/Posts.jsx";
import { CreateDesign } from "./cmps/CreateDesign.jsx";
import { useState } from "react";

import "../src/assets/style/main.scss";

export function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <Router>
      <section>
        <AppHeader
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
        <main>
          <Routes>
            <Route
              element={<HomePage isUserLoggedIn={isUserLoggedIn} />}
              path="/"
            />
            <Route element={<Posts />} path="/posts" />
            <Route element={<CreateDesign />} path="/design/create" />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
