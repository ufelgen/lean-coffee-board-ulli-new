import Header from "../components/Header";
import CardSection from "../components/CardSection";
import Form from "../components/Form";
import EditForm from "../components/EditForm";
import { nanoid } from "nanoid";

import { useState } from "react";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();

  console.log("cards array: ", cards);

  function handleAddCard(newCard) {
    setCards([{ id: nanoid(), ...newCard }, ...cards]);
    console.log(cards);
    console.log(newCard);
    console.log(cards);
  }

  function handleRemoveCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function handleEditCard(id) {
    setEditing(true);
    setEditId(id);
  }

  return (
    <>
      <Header />
      <CardSection
        array={cards}
        onRemoveCard={handleRemoveCard}
        onEditCard={handleEditCard}
      />
      {editing && (
        <EditForm
          array={cards}
          setCards={setCards}
          setEditing={setEditing}
          editId={editId}
        />
      )}
      <Form onAddCard={handleAddCard} />
    </>
  );
}

const defaultCards = [
  { id: 1, name: "Hilde", thoughts: "cat food" },
  { id: 2, name: "Ulli", thoughts: "coffee" },
];
