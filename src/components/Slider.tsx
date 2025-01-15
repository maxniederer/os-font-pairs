import { useState } from "react";

interface Props {
  min: number;
  max: number;
  step: number;
  val: number;
  passValue: Function;
}

function Slider(this: any, { min, max, step, val, passValue }: Props) {
  const [inputValue, setInputValue] = useState("" + val);

  return (
    <>
      <article>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={val}
          onChange={(e) => {
            setInputValue(e.target.value);
            passValue(inputValue);
          }}
        ></input>
        <output>{inputValue}</output>
      </article>
    </>
  );
}

export default Slider;
