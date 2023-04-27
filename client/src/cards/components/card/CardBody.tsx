import CardContent from "@mui/material/CardContent";
import React from "react";
import CardInterface from "../../interfaces/CardInterface";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardBodyRow from "./CardBodyRow";
import Box from "@mui/material/Box";

type Props = { card: CardInterface };

const CardBody: React.FC<Props> = ({ card }) => {
  const { title, subtitle, address, phone, bizNumber } = card;
  const { city, houseNumber, street, country } = address;
  return (
    <CardContent>
      <Box mt={1}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {subtitle}
        </Typography>
        <Divider />
        <CardBodyRow title="Phone" content={phone} />
        <CardBodyRow
          title="Address"
          content={`${street} ${houseNumber} ${city} ${country}`}
        />
        <CardBodyRow title="Card Number" content={String(bizNumber)} />
      </Box>
    </CardContent>
  );
};

export default CardBody;
