import React from "react";
import Container from "@mui/material/Container";
import Pageheader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

// С помощью компонента Navigate создадим условие, при user===false будет переносить на страницу заполнения формы

const SignupPage = () => {
  const user = false;
  // const user = true;
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <Pageheader
        title="Signup Page"
        subtitle="In order to register, fill out the form and click the submit button"
      />
    </Container>
  );
};

export default SignupPage;
