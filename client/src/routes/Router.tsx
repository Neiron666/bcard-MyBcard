import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../cards/pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailPage";
import SandboxManu from "../sandbox/SandboxMenu";
import Tamplate from "../sandbox/components/Template";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import Logic from "../sandbox/components/Logic";
import Styles from "../sandbox/components/styles/Styles";
import CardEditPage from "../cards/pages/CardEditPage";
import SandboxMenu from "../sandbox/SandboxMenu";
import StringInterpolation from "../sandbox/components/StringInterpolation";
import ConditionalRendering from "../sandbox/conditional-rendering/ConditionalRendering";
import Events from "../sandbox/events/Events";
import OnClick from "../sandbox/events/OnClick";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import Babel from "../sandbox/introduction/Babel";
import Loops from "../sandbox/iterations/Loops";
import MuiSandbox from "../sandbox/mui-sandbox/MuiSandbox";
import MuiButton from "../sandbox/mui-sandbox/data-display/MuiButton";
import DataDisplay from "../sandbox/mui-sandbox/data-display/DataDisplay";
import MuiDivider from "../sandbox/mui-sandbox/data-display/MuiDivider";
import MuiTypography from "../sandbox/mui-sandbox/data-display/MuiTypography";
//URL מסתכל על כתובת בשורת ה ROUTS
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<CardEditPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />

      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SINGUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
        <Route path={SANDBOX_ROUTES.ITERATIONS} element={<Loops />} />
        <Route path={SANDBOX_ROUTES.INTRODUCTION} element={<Babel />}></Route>
        <Route path={SANDBOX_ROUTES.MUI_SANDBOX} element={<MuiSandbox />}>
          <Route path={SANDBOX_ROUTES.DATA_DISPLAY} element={<DataDisplay />}>
            <Route path={SANDBOX_ROUTES.MUI_BUTTON} element={<MuiButton />} />
            <Route path={SANDBOX_ROUTES.MUI_DIVIDER} element={<MuiDivider />} />
            <Route
              path={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
              element={<MuiTypography />}
            />
          </Route>
        </Route>
        <Route
          path={SANDBOX_ROUTES.CONDITIONALRENDERING}
          element={<ConditionalRendering />}
        />
        <Route path={SANDBOX_ROUTES.EVENTS} element={<Events />}>
          <Route path={SANDBOX_ROUTES.ONCLICK} element={<OnClick />} />
          <Route
            path={SANDBOX_ROUTES.RAISINGEVENTS}
            element={<RaisingEvents />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
          <Route path={SANDBOX_ROUTES.TEMPLATE} element={<Tamplate />} />
          <Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES.STYLES} element={<Styles />} />
          <Route
            path={SANDBOX_ROUTES.STRINGINTERPOLATION}
            element={<StringInterpolation />}
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
