import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import CardInterface from "../interfaces/CardInterface";
import Card from "../components/card/Card";

//מסתכל על שורת כתובת + על ראוטר ואז מחבר את זה כ מפתח:ערך useParams
const CardDetailsPage = () => {
  const { cardId } = useParams();

  const cards: CardInterface[] | undefined = [
    {
      _id: "abcd1",
      title: "Card Title1",
      subtitle: "Card Subtitle1",
      description: "the card description",
      phone: "050-0000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_640.jpg",
        alt: "",
      },
      web: "",
      address: {
        state: "israel",
        country: "israel",
        city: "tel-aviv",
        street: "nahshon",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 123456,
      email: "test@gmail.com",
      likes: [""],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "abcd2",
      title: "Card Title2",
      subtitle: "Card Subtitle2",
      description: "the card description",
      phone: "050-0000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_640.jpg",
        alt: "",
      },
      web: "",
      address: {
        state: "israel",
        country: "israel",
        city: "tel-aviv",
        street: "nahshon",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 123456,
      email: "test@gmail.com",
      likes: [""],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "abcd3",
      title: "Card Title3",
      subtitle: "Card Subtitle3",
      description: "the card description",
      phone: "050-0000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_640.jpg",
        alt: "",
      },
      web: "",
      address: {
        state: "israel",
        country: "israel",
        city: "tel-aviv",
        street: "nahshon",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 123456,
      email: "test@gmail.com",
      likes: [""],
      user_id: "123456789",
      createdAt: new Date(),
    },
  ];

  const card = cards.filter((card: CardInterface) => card._id === cardId);

  if (!card.length) return <p>no card to display...</p>;
  return (
    <Container>
      <PageHeader
        title="Business Details"
        subtitle="Here you can see details of the business"
      />
      <div>Details of card:{cardId}</div>
      <Card
        card={card[0]}
        onDelete={console.log}
        cardId={card[0]._id}
        onCall={console.log}
        onEdit={console.log}
        onLike={console.log}
      />
    </Container>
  );
};

export default CardDetailsPage;
