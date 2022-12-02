import { Fragment } from "react";
import styled from "styled-components";
import { HiTrash } from "react-icons/hi";
import { HiPencil, HiArrowLeft, HiOutlineDocumentAdd } from "react-icons/hi";

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

    const updatedQuestion = { name: newName, text: newThoughts, id: editId };

    console.log("updated question: ", updatedQuestion);
    onSaveEdited(editId, updatedQuestion);

    setEditing(false);
  }

  return (
    <>
      {array.map((item) => (
        <Fragment key={item.id}>
          <StyledCard>
            <StyledForm onSubmit={handleSubmitEdit}>
              <h4>
                {" "}
                {editing && item.id === editId ? (
                  <input
                    id="newName"
                    name="newName"
                    type="text"
                    defaultValue={item.name}
                  />
                ) : (
                  <StyledName>{item.name}</StyledName>
                )}{" "}
                is thinking about...
              </h4>
              <StyledText>
                {editing && item.id === editId ? (
                  <input
                    id="newThoughts"
                    name="newThoughts"
                    type="text"
                    defaultValue={item.text}
                  />
                ) : (
                  <span>{item.text}</span>
                )}
              </StyledText>{" "}
              {editing && item.id === editId && (
                <>
                  <StyledAddButton type="submit">
                    {" "}
                    <HiOutlineDocumentAdd size="35px" />{" "}
                  </StyledAddButton>
                  <StyledBackButton
                    type="button"
                    onClick={() => setEditing(false)}
                  >
                    {" "}
                    <HiArrowLeft size="35px" />{" "}
                  </StyledBackButton>
                </>
              )}
            </StyledForm>
            {editing && item.id === editId ? (
              <>
                <StyledRemoveButton disabled>
                  <HiTrash size="35px" />
                </StyledRemoveButton>
                <StyledEditButton disabled>
                  <HiPencil size="35px" />
                </StyledEditButton>
              </>
            ) : (
              <>
                <StyledRemoveButton onClick={() => onRemoveCard(item.id)}>
                  <HiTrash size="35px" />
                </StyledRemoveButton>
                <StyledEditButton onClick={() => onEditCard(item.id)}>
                  <HiPencil size="35px" />
                </StyledEditButton>
              </>
            )}
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

const StyledAddButton = styled.button`
  position: absolute;
  top: 5px;
  right: 65px;
  color: white;
  background-color: black;
`;

const StyledBackButton = styled.button`
  position: absolute;
  top: 55px;
  right: 65px;
  color: white;
  background-color: black;
`;

const StyledForm = styled.form`
  width: 90%;
`;

const StyledName = styled.span`
  font-weight: bold;
  color: purple;
`;

const StyledText = styled.p`
  text-align: justify;
`;
