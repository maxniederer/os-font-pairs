import Card from "../components/Card";
import Font from "../components/Font";
import fonts from "../assets/fonts.json";

import Footer from "../components/Footer";
import Header from "../components/Header";

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
// console.log(pairs);

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

function PairPage() {
  return (
    <>
      <Header />
      <main className="padding">
        <h1>PairPage</h1>

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
      </main>
      <Footer />
    </>
  );
}

export default PairPage;
