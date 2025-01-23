import { useState, useEffect } from "react";
import { List, Shuffle, Info } from "@phosphor-icons/react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import fonts from "./assets/fonts.json";
import Font from "./components/Font";

const bodyFonts: Font[] = [];
const headFonts: Font[] = [];

fonts.map((font) => {
  if (font.tags.includes("head")) {
    headFonts.push(font);
  }
  if (font.tags.includes("body")) {
    bodyFonts.push(font);
  }
});

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

let pairs: { head: Font; body: Font }[] = [];
for (let i = 0; i < headFonts.length; i++) {
  // let j = Math.floor(Math.random() * bodyFonts.length);
  // let k = Math.floor(Math.random() * bodyFonts.length);
  // if (k == j) k = mod(k, bodyFonts.length);
  for (let j = 0; j < bodyFonts.length; j++) {
    if (headFonts[i].name != bodyFonts[j].name) {
      pairs.push({ head: headFonts[i], body: bodyFonts[j] });
    }
  }
}
console.log(pairs);
// pairs = shuffle(pairs);

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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

        {/* <ul className="pairs">
          {fonts.map((font) => (
            <li>
              <Card headFont={font} bodyFont={font} colorBg="" colorBody="" />
            </li>
          ))}
        </ul> */}

        <ul className="pairs">
          {pairs.map((pair) => (
            <li>
              <Card
                headFont={pair.head}
                bodyFont={pair.body}
                colorBg=""
                colorBody=""
              />
            </li>
          ))}
        </ul>

        <Footer />
      </main>
    </>
  );
}

export default App;
