import React from "react";

import MuiCard from "@mui/material/Card";

import CardHead from "./CardHead";
import CardInterface from "../../interfaces/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { log } from "console";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onCall: (id: string) => void;
  cardId: string;
};

const Card: React.FC<Props> = ({ card, onDelete, onLike, onCall, cardId }) => {
  const navigate = useNavigate();
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={cardId}
        onDelete={onDelete}
        onLike={onLike}
        onCall={onCall}
      />
    </MuiCard>
  );
};

export default Card;
