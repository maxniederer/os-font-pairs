import { useState } from "react";
import Slider from "./Slider";
import Font from "./Font";

interface Props {
  headFont: Font;
  bodyFont: Font;
  colorBody: string;
  colorBg: string;
}

function Specimen({ headFont, bodyFont, colorBody, colorBg }: Props) {
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
      <div
        className="card"
        style={{ color: colorBody, backgroundColor: colorBg }}
      >
        <h1 className={headFont.class} contentEditable="true">
          Paralinear Aesthetics
        </h1>
        <p
          className={bodyFont.class}
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
          <a href="#" className="inline">
            {headFont.name}
          </a>{" "}
          •{" "}
          <a href="#" className="inline">
            {bodyFont.name}
          </a>
        </p>
      </div>
    </>
  );
}

export default Specimen;
