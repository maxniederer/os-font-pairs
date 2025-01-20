import json from "../assets/fonts.json";

function Header() {
  return (
    <>
      <header>
        <nav className="padding">
          <ul className="flex">
            <li>
              <a className="strong" href="#">
                fontcupid
              </a>
            </li>
            <li>
              <a href="#">fonts</a>
            </li>
            <li>
              <a href="#">pairings</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li className="">
              <a href="#">menu</a>
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
