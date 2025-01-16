import { useState, useEffect } from "react";
import Card from "./components/Card";
import { List, Shuffle, Info } from "@phosphor-icons/react";
import json from "./assets/fonts.json";

interface Font {
  name: string;
  class: string;
  src: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    var?: string;
  };
  credit: {
    author: string;
    foundry: string;
    link: string;
    license: string;
    licenseLink: string;
  };
  tags: string[];
}

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
        <Card headFont="basteleur" bodyFont="manrope" />
        <Card headFont="basalte" bodyFont="sligoil" />
        {json.map((font) => (
          <>
            <h1 className={font.class}>{font.name}</h1>
          </>
        ))}
      </main>
    </>
  );
}

export default App;
