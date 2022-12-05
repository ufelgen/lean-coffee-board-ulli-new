import Header from "../components/Header";
import CardSection from "../components/CardSection";
import Form from "../components/Form";
import { nanoid } from "nanoid";
import styled from "styled-components";

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

  async function pushNewCard(newCard) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );
    getQuestions();
  }

  async function handleRemoveCard(id) {
    await fetch(
      `https://lean-coffee-board-api-nextjs.vercel.app/api/questions/${id}`,
      {
        method: "DELETE",
      }
    );
    getQuestions();
  }

  async function handleEditedCard(editId, updatedQuestion) {
    await fetch(
      `https://lean-coffee-board-api-nextjs.vercel.app/api/questions/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuestion),
      }
    );
    getQuestions();
  }

  function handleEditCard(id) {
    setEditing(true);
    setEditId(id);
  }

  return (
    <>
      <Header />
      <StyledMain>
        <CardSection
          array={cards}
          onRemoveCard={handleRemoveCard}
          onEditCard={handleEditCard}
          editing={editing}
          setEditing={setEditing}
          setCards={setCards}
          editId={editId}
          onSaveEdited={handleEditedCard}
        />
      </StyledMain>
      <Form onCreateNew={pushNewCard} />
    </>
  );
}

const StyledMain = styled.main`
  margin-bottom: 17vh;
`;
