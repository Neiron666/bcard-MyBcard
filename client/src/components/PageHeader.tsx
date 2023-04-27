import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Props = { title: string; subtitle: string };

const Pageheader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default Pageheader;
