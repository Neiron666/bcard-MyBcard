import React from "react";
import "./App.css";
import Tamplate from "./sandbox/components/Template";
import Test from "./sandbox/components/Test";
import Logic from "./sandbox/components/Logic";
import StringInterpulation from "./sandbox/components/StringInterpulation";
import StringIntDemo from "./sandbox/components/StringIntDemo";
import Styles from "./sandbox/components/styles/Styles";
import StyleModule from "./sandbox/components/styles/StyleModule";
import StyleTest from "./sandbox/components/styles/StyleTest";
import MuiTypography from "./sandbox/mui-sandbox/data-display/MuiTypography";
// import CardBody from "./cards/components/card/CardBody";
import Card from "./cards/components/card/Card";
import Cards from "./cards/components/card/Cards";
import CardsPage from "./cards/pages/CardsPage";
import ErrorPage from "./pages/ErrorPage";
import SetPost from "./sandbox/use-state/SetPosts";
import UseState from "./sandbox/use-state/UseState";
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
