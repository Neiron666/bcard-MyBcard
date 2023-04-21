import React, { CSSProperties } from "react";

// const Styles = () => {
//   return <div style={{ backgroundColor: "blueviolet" }}>Styles</div>;
// };
const Styles = () => {
  const test: CSSProperties = {
    backgroundColor: "#989898",
    color: "white",
    fontWeight: "bolder",
  };
  return <div className="red">Styles</div>;
};

export default Styles;
