import React from "react";

import MuiCard from "@mui/material/Card";

import CardHead from "./CardHead";
import CardInterface from "../../interfaces/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onEdit: (id: string) => void;
  onCall: (id: string) => void;
  cardId: string;
};

const Card: React.FC<Props> = ({
  card,
  onDelete,
  onLike,
  onEdit,
  onCall,
  cardId,
}) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar
        cardId={cardId}
        onDelete={onDelete}
        onLike={onLike}
        onEdit={onEdit}
        onCall={onCall}
      />
    </MuiCard>
  );
};

export default Card;
