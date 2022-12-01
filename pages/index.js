import Header from "../components/Header";
import CardSection from "../components/CardSection";
import Form from "../components/Form";
import { nanoid } from "nanoid";

import { useState } from "react";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleAddCard(newCard) {
    setCards([{ id: nanoid(), ...newCard }, ...cards]);
    console.log(cards);
    console.log(newCard);
    console.log(cards);
  }

  return (
    <>
      <Header />
      <CardSection array={cards} />
      <Form onAddCard={handleAddCard} />
    </>
  );
}

const defaultCards = [
  { id: 1, name: "Hilde", thoughts: "cat food" },
  { id: 2, name: "Ulli", thoughts: "coffee" },
];
