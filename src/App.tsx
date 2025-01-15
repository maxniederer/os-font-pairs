import { useState, useEffect } from "react";
import Card from "./components/Card";
import { List, Shuffle, Info } from "@phosphor-icons/react";

function App() {
  const [count, setCount] = useState(0);

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
      <div className="padding">
        <h1>fontcupid</h1>
        <p>find the perfect matches of open source web fonts</p>
        <button>
          <Shuffle size={32} />
        </button>
        <Card headFont="basteleur" bodyFont="manrope" />
        <Card headFont="basalte" bodyFont="sligoil" />
        <h6 className="ff-manrope fw-200">manrope</h6>
        <h6 className="ff-manrope fw-400">manrope</h6>
        <h6 className="ff-manrope fw-600">manrope</h6>
        <h6 className="ff-manrope fw-800">manrope</h6>
        <h1 className="ff-basteleur fw-400">basteleur</h1>
        <h1 className="ff-basteleur">basteleur-bold</h1>
        <h1 className="ff-young-serif">young-serif</h1>
        <h1 className="ff-abordage">abordage</h1>
        <h1 className="ff-equateur">equateur</h1>
        <h1 className="ff-latitude">latitude</h1>
        <h1 className="ff-karrik">karrik</h1>
        <h1 className="ff-karrik italic">karrik-italic</h1>
        <h1 className="ff-director">director</h1>
        <h1 className="ff-sligoil">sligoil</h1>
        <h1 className="ff-louise">louise</h1>
        <h1 className="ff-basalte">basalte</h1>
      </div>
    </>
  );
}

export default App;
