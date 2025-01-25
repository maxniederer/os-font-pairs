import Font from "./Font";
import text from "../assets/text.json";
import { useState } from "react";
import {
  BookmarkSimple,
  Star,
  Heart,
  MagnifyingGlassPlus,
  PaperPlaneTilt,
  ShareFat,
} from "@phosphor-icons/react";

interface Props {
  headFont: Font;
  bodyFont: Font;
  colorBody: string;
  colorBg: string;
}

function Card({ headFont, bodyFont, colorBody, colorBg }: Props) {
  const [faved, setFaved] = useState(false);

  let headText: string = "";
  let ind: number = Math.floor(Math.random() * text["head"].length);
  headText = text["head"][ind];

  let bodyText: string = "";
  ind = Math.floor(Math.random() * text["body"].length);
  bodyText = text["body"][ind];

  let bodySize: string = "";
  bodyText.length > 250 ? (bodySize = "1em") : (bodySize = "1.2em");
  // let headSize: string = "";
  // headText.length > 22 ? (headSize = "2em") : (headSize = "3em");

  function heartPressed() {
    setFaved(!faved);
  }

  return (
    <>
      <div
        className={"card" + (faved ? " faved" : "")}
        style={{ color: colorBody, backgroundColor: colorBg }}
      >
        <div className="card-head">
          <h2 className={headFont.class} contentEditable="true">
            {headText}
          </h2>
          <button className="icon btn heart" onClick={heartPressed}>
            <Heart size={22} weight="fill" />
          </button>
        </div>
        <p
          className={bodyFont.class}
          contentEditable="true"
          style={{ fontSize: bodySize }}
        >
          {bodyText}
        </p>
        <div className="card-credit">
          <p className="sub ">
            <a href="#" className="inline">
              {headFont.name}
            </a>
            {" • "}
            <a href="#" className="inline">
              {bodyFont.name}
            </a>
          </p>

          <a className="icon btn" href="#">
            {/* <MagnifyingGlassPlus size={22} weight="fill" /> */}
            {/* <PaperPlaneTilt size={22} weight="fill" /> */}
            <ShareFat size={22} weight="fill" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
