import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AppHeader } from "./cmps/AppHeader.jsx";
import { HomePage } from "./pages/HomePage.jsx";

import "../src/assets/style/main.scss";
export function App() {
  return (
    <Router>
      <section>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
