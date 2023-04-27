import React from "react";
import Typography from "@mui/material/Typography";
type Props = { title: string; content: string };

const CardBodyRow: React.FC<Props> = ({ title, content }) => {
  //   const { title, content } = prop;
  return (
    <Typography component="div">
      <Typography variant="body2" fontWeight={500} component="span">
        {title}:{" "}
        <Typography variant="body2" component="span" color="#616161">
          {content}
        </Typography>
      </Typography>
    </Typography>
  );
};

export default CardBodyRow;
