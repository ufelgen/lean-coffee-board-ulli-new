import Header from "../components/Header";
import CardSection from "../components/CardSection";
import Form from "../components/Form";
import { nanoid } from "nanoid";

import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();

  console.log("cards array: ", cards);

  async function getQuestions() {
    try {
      const response = await fetch(
        "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
      );
      const questionList = await response.json();
      setCards(questionList);
    } catch (error) {
      console.error("du kannst gar nichts");
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  function handleAddCard(newCard) {
    setCards([{ id: nanoid(), ...newCard }, ...cards]);
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
        editing={editing}
        setEditing={setEditing}
        setCards={setCards}
        editId={editId}
      />
      <Form onAddCard={handleAddCard} />
    </>
  );
}
