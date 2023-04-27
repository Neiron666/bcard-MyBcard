import React from "react";
import CardInterface from "../../interfaces/CardInterface";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "./Card";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { log } from "console";

type Props = { cards: CardInterface[] };

const Cards: React.FC<Props> = ({ cards }) => {
  const handleCardDelete = (id: string) =>
    console.log(`you deleted card no.${id}`);
  const handleCardLike = (id: string) => console.log(`you liked card no.${id}`);
  const handleCardEdit = (id: string) =>
    console.log(`you edited card no.${id}`);
  const handleCardCall = (id: string) =>
    console.log(`you called about card no.${id}`);

  // cards = [];
  if (!cards.length) return <p>There is no Cards to display</p>;
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card
            card={card}
            onDelete={handleCardDelete}
            onLike={handleCardLike}
            onEdit={handleCardEdit}
            onCall={handleCardCall}
            cardId={card._id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
