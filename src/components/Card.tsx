import { useState } from "react";
import Slider from "./Slider";

interface Props {
  headFont: string;
  bodyFont: string;
}

function Card({ headFont, bodyFont }: Props) {
  const [weight, setWeight] = useState(400);
  const [height, setHeight] = useState(1.5);
  const [size, setSize] = useState(1.0);

  function passWeight(childData: number) {
    setWeight(childData);
  }

  function passHeight(childData: number) {
    setHeight(childData);
  }

  function passSize(childData: number) {
    setSize(childData);
  }

  function toEm(num: number): string {
    return num + "em";
  }

  return (
    <>
      <div className="card">
        <h1 className={"ff-" + headFont} contentEditable="true">
          Paralinear Aesthetics
        </h1>
        <p
          className={"ff-" + bodyFont}
          contentEditable="true"
          style={{
            fontWeight: weight,
            lineHeight: height,
            fontSize: toEm(size),
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          sequi neque laboriosam porro expedita soluta rem amet, enim vero illo
          voluptatibus commodi earum nesciunt fuga ipsa eos hic dolorum. Ex.
        </p>
        <Slider
          min={0.5}
          max={2.0}
          step={0.0625}
          val={1.0}
          passValue={passSize}
        />
        <Slider
          min={100}
          max={900}
          step={100}
          val={400}
          passValue={passWeight}
        />
        <Slider
          min={0.5}
          max={2.0}
          step={0.1}
          val={1.5}
          passValue={passHeight}
        />
        <p className="sub">
          featuring:{" "}
          <a href="#" className="inline">
            {headFont}
          </a>{" "}
          &{" "}
          <a href="#" className="inline">
            {bodyFont}
          </a>
        </p>
      </div>
    </>
  );
}

export default Card;
