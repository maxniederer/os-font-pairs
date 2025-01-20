import Font from "./Font";
import text from "../assets/text.json";
import { useState } from "react";

interface Props {
  headFont: Font;
  bodyFont: Font;
  colorBody: string;
  colorBg: string;
}

function Card({ headFont, bodyFont, colorBody, colorBg }: Props) {
  let headText: string = "";
  let ind: number = Math.floor(Math.random() * text["head"].length);
  headText = text["head"][ind];

  let bodyText: string = "";
  ind = Math.floor(Math.random() * text["body"].length);
  bodyText = text["body"][ind];

  let bodySize: string = "";
  bodyText.length > 250 ? (bodySize = "1em") : (bodySize = "1.4em");
  // let headSize: string = "";
  // headText.length > 22 ? (headSize = "2em") : (headSize = "3em");

  return (
    <>
      <div
        className="card"
        style={{ color: colorBody, backgroundColor: colorBg }}
      >
        <h1 className={headFont.class} contentEditable="true">
          {headText}
        </h1>
        <p
          className={bodyFont.class}
          contentEditable="true"
          style={{ fontSize: bodySize }}
        >
          {bodyText}
        </p>
        <p className="sub card-credit">
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

export default Card;
