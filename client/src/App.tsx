import React from "react";
import "./App.css";
// import CardBody from "./cards/components/card/CardBody";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// import Babel from "./sandbox/Introduction/Babel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
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
          {/* <Card /> */}
          {/* <Cards /> */}
          {/* <SetPost /> */}
          {/* <UseState /> */}
          {/* <ErrorPage /> */}
          {/* <CardsPage /> */}
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
