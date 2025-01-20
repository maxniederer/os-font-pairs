import json from "../assets/fonts.json";

function Footer() {
  return (
    <>
      <footer>
        <div className="bottom-nav">
          <div>
            <strong>Fonts</strong>
            <ul className="font-nav">
              {json.map((font) => (
                <li>
                  <a href="#" className="inline">
                    {font.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Information</strong>
            <ul>
              <li>
                <a href="#" className="inline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="inline">
                  Fonts in use
                </a>
              </li>
              <li>
                <a href="#" className="inline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="inline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          fontcupid {new Date().getFullYear()} ♡{" "}
          <a href="https://copyheart.org/manifesto/" className="inline">
            Copying is an act of love. Please copy and share.
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
