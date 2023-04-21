import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
const CardBody = () => {
  return (
    <>
      <Typography
        variant="body2"
        component="span"
        sx={{ fontWeight: "bold" }}
        color="brown"
      >
        One:
        <Typography color="green" component="span" variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad
          ea quasi cupiditate commodi ab delectus, dolor sint eveniet libero
          rerum nostrum consectetur deserunt ratione. Excepturi optio similique
          blanditiis culpa voluptatum nostrum distinctio dignissimos commodi
          molestiae aliquam, dolore omnis iure iusto. Deserunt officia minima
          doloribus itaque autem rerum id debitis aliquam corporis? Repellendus
          officiis magni nostrum nisi quod in cum atque, sed nihil dolorem amet
          aperiam itaque enim asperiores commodi possimus quas perspiciatis
          repudiandae nam adipisci expedita nesciunt labore minima mollitia!
          Explicabo, ipsa facilis quae alias incidunt quos veniam at.
          Accusantium sequi delectus porro, culpa illo expedita quam
          perspiciatis eius.
          <Divider color="yellow" />
        </Typography>
        <Button variant="contained" color="info">
          asdds
        </Button>
      </Typography>
    </>
  );
};

export default CardBody;
