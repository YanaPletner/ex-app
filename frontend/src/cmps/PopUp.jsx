import { Link } from "react-router-dom";

export function PopUp({ setIsUserLoggedIn }) {
  return (
    <div className="pop-up-modal">
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

      <section className="links">
        <ul>
          <li>
            <Link>
              <span>Setting</span>
            </Link>
          </li>
          <li onClick={() => setIsUserLoggedIn(false)}>
            <Link>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
