import { Fragment } from "react";
import styled from "styled-components";
import { HiTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";

export default function CardSection({
  array,
  onRemoveCard,
  onEditCard,
  editing,
  setEditing,
  onSaveEdited,
  editId,
}) {
  function handleSubmitEdit(event) {
    event.preventDefault();
    const newName = event.target.elements.newName.value;
    const newThoughts = event.target.elements.newThoughts.value;

    const updatedQuestion = array.filter((item) => {
      if (item.id === editId) {
        return { id: item.id, name: newName, text: newThoughts };
      }
    });
    onSaveEdited(editId, updatedQuestion);

    setEditing(false);
  }

  return (
    <>
      {array.map((item) => (
        <Fragment key={item.id}>
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
                  <span>{item.name}</span>
                )}{" "}
                is thinking about...
              </h4>
              <p>
                {editing && item.id === editId ? (
                  <input
                    id="newThoughts"
                    name="newThoughts"
                    type="text"
                    placeholder="edit your thoughts..."
                  />
                ) : (
                  <span>{item.text}</span>
                )}
              </p>{" "}
              {editing && item.id === editId && (
                <StyledButton type="submit"> + </StyledButton>
              )}
            </form>
            <StyledRemoveButton onClick={() => onRemoveCard(item.id)}>
              <HiTrash size="35px" />
            </StyledRemoveButton>
            <StyledEditButton onClick={() => onEditCard(item.id)}>
              <HiPencil size="35px" />
            </StyledEditButton>
          </StyledCard>
        </Fragment>
      ))}
    </>
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
