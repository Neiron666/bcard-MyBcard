import React from "react";
import "./App.css";
import Tamplate from "./sandbox/components/Tamplate";
import Test from "./sandbox/components/Test";
import Logic from "./sandbox/components/Logic";
import StringInterpulation from "./sandbox/components/StringInterpulation";
import StringIntDemo from "./sandbox/components/StringIntDemo";
import Styles from "./sandbox/components/styles/Styles";
import StyleModule from "./sandbox/components/styles/StyleModule";
import StyleTest from "./sandbox/components/styles/StyleTest";
import MuiTypography from "./sandbox/mui-sandbox/data-display/MuiTypography";
import CardBody from "./cards/components/card/CardBody";
import Card from "./cards/components/card/Card";

// import Babel from "./sandbox/Introduction/Babel";

function App() {
  return (
    <div className="App">
      {/* <Tamplate></Tamplate>
      <Test></Test>
      <Logic></Logic> */}
      {/* <StringInterpulation></StringInterpulation> */}
      {/* <Babel /> */}
      {/* <StringIntDemo /> */}
      {/* <Styles />
      <StyleModule /> */}
      {/* <StyleTest />
      <MuiTypography />
      <CardBody /> */}
      <Card />
    </div>
  );
}

export default App;
