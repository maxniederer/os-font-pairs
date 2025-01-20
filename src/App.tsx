import { useState, useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { List, Shuffle, Info } from "@phosphor-icons/react";
import json from "./assets/fonts.json";
import Font from "./components/Font";

function App() {
  return (
    <>
      <Header />

      <main className="padding">
        {/* <h1>fontcupid</h1>
        <p>the perfect matches of open source web fonts</p>
        <button>
          <Shuffle size={32} />
        </button> */}

        <ul className="pairs">
          {json.map((font) => (
            <li>
              <Card headFont={font} bodyFont={font} colorBg="" colorBody="" />
            </li>
          ))}
        </ul>

        <Footer />
      </main>
    </>
  );
}

export default App;
