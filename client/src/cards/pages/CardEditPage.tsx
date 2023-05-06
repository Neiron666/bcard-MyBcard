import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Pageheader from "../../components/PageHeader";
import CardInterface from "../interfaces/CardInterface";

const CardEditPage = () => {
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
  return (
    <Container>
      <Pageheader
        title="Card Rdit Page"
        subtitle="Here you can edit your card information"
      />
      <div>Edit Card Number:{cardId}</div>
    </Container>
  );
};

export default CardEditPage;
