import styled from "styled-components";
import { HiTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import CardSection from "./CardSection";

export default function Card({
  name,
  text,
  id,
  onRemoveCard,
  onEditCard,
  editing,
  setEditing,
  setCards,
  editId,
  array,
  onSaveEdited,
}) {
  function handleSubmitEdit(event) {
    event.preventDefault();
    const newName = event.target.elements.newName.value;
    const newThoughts = event.target.elements.newThoughts.value;
    const editedQuestion = array.map((item) => {
      if (item.id === editId) {
        return { id: item.id, name: newName, text: newThoughts };
      }
    });
    onSaveEdited(editId, editedQuestion);
    // setCards(
    //   array.map((item) => {
    //     if (item.id === editId) {
    //       return { id: item.id, name: newName, text: newThoughts };
    //     }
    //     return item;
    //   })
    // );

    setEditing(false);
  }

  return (
    <StyledCard>
      <form onSubmit={handleSubmitEdit}>
        <h4>
          {" "}
          {editing && item.id === editId ? (
            <input
              id="newName"
              name="newName"
              type="text"
              placeholder="edit your name"
            />
          ) : (
            <span>{name}</span>
          )}{" "}
          is thinking about...
        </h4>
        <p>
          {editing ? (
            <input
              id="newThoughts"
              name="newThoughts"
              type="text"
              placeholder="edit your thoughts..."
            />
          ) : (
            <span>{text}</span>
          )}
        </p>{" "}
        {editing && <StyledButton type="submit"> + </StyledButton>}
      </form>
      <StyledRemoveButton onClick={() => onRemoveCard(id)}>
        <HiTrash size="35px" />
      </StyledRemoveButton>
      <StyledEditButton onClick={() => onEditCard(id)}>
        <HiPencil size="35px" />
      </StyledEditButton>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  position: relative;
`;

const StyledRemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledEditButton = styled.button`
  position: absolute;
  top: 55px;
  right: 5px;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  color: white;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
`;
