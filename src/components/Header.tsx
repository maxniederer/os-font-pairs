import json from "../assets/fonts.json";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <nav className="padding">
          <ul className="flex">
            <li>
              <Link className="strong" to="/">
                fontcupid
              </Link>
            </li>
            <li>
              <Link to="/">fonts</Link>
            </li>
            <li>
              <Link to="/">pairings</Link>
            </li>
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="/">menu</Link>
            </li>
          </ul>
        </nav>
        <div className="alert">
          <ul className="marquee">
            <li>
              <a href="#">marquee placeholder</a>
            </li>
            {/* <li>
              <a href="#">sans-serif</a>
            </li>
            <li>
              <a href="#">serif</a>
            </li>
            <li>
              <a href="#">monospace</a>
            </li>
            <li>
              <a href="#">display</a>
            </li>
            <li>
              <a href="#">body fonts</a>
            </li>
            <li>
              <a href="#">sci-fi</a>
            </li>
            <li>
              <a href="#">brutalist</a>
            </li>
            <li>
              <a href="#">abstract</a>
            </li> */}
          </ul>
        </div>
        {}
      </header>
    </>
  );
}

export default Header;
