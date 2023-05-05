import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Container from "@mui/material/Container";
import Pageheader from "../../components/PageHeader";
const LoginPage = () => {
  const user = false;
  //   const user = true;
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <Pageheader
        title="Login Page"
        subtitle="In order to login, fill out the form and click the submit button"
      />
    </Container>
  );
};

export default LoginPage;
