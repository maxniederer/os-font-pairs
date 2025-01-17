import { useState, useEffect } from "react";
import Card from "./components/Card";
import { List, Shuffle, Info } from "@phosphor-icons/react";
import json from "./assets/fonts.json";
import Font from "./components/Font";

function App() {
  // function printAllFonts() {
  //   json.forEach((element) => {
  //     console.log(element);
  //   });
  // }
  // printAllFonts();

  return (
    <>
      <nav className="padding">
        <ul className="flex">
          <li>
            <a className="strong">fontcupid</a>
          </li>
          <li>
            <a>fonts</a>
          </li>
          <li>
            <a>pairings</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li className="">
            <a>menu</a>
            <button>
              <List size={32} />
            </button>
            <button>
              <Info size={32} />
            </button>
          </li>
        </ul>
      </nav>
      <div className="alert padding">
        <p>click here for asdjkfhasjkdf</p>
      </div>
      <main className="padding">
        <h1>fontcupid</h1>
        <p>find the perfect matches of open source web fonts</p>
        <button>
          <Shuffle size={32} />
        </button>
        {json.map((font) => (
          <>
            <p>{font.name}</p>
            <Card headFont={font} bodyFont={font} />
          </>
        ))}
        {/* <Card headFont="basteleur" bodyFont="manrope" /> */}
        {/* <Card headFont="basalte" bodyFont="director" /> */}
        <footer>
          <div>
            <div>Fonts</div>
            <ul>
              {json.map((font) => (
                <li>
                  <a href="#">{font.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>Information</div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Fonts in use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div>fontmate</div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
