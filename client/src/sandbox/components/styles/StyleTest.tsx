import React, { CSSProperties } from "react";
import "./styleModule.css";

const StyleTest = () => {
  let isGreen = true;
  isGreen = false;
  const textColor: CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };
  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>title</h1>
      <h2 style={textColor}>subtitle</h2>
      <hr />
      <p className="green fontSize3Rem">paragraph</p>
      <span style={{ backgroundColor: isGreen ? "yellow" : "red" }}>span</span>
    </>
  );
};

export default StyleTest;
