import styled from "styled-components";

export default function EditForm({ array, setCards, editId, setEditing }) {
  function handleSubmitEdit(event) {
    event.preventDefault();
    const newName = event.target.elements.newName.value;
    const newThoughts = event.target.elements.newThoughts.value;

    setCards(
      array.map((item) => {
        if (item.id === editId) {
          return { id: item.id, name: newName, thoughts: newThoughts };
        }
        return item;
      })
    );

    setEditing(false);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmitEdit}>
        <label htmlFor="newThoughts">your thoughts: </label>
        <input
          id="newThoughts"
          name="newThoughts"
          type="text"
          placeholder="edit your thoughts..."
          required
        />
        <label htmlFor="newName"> your name: </label>
        <input
          id="newName"
          name="newName"
          type="text"
          placeholder="edit your name"
          required
        />
        <StyledButton type="submit"> + </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  position: relative;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  color: white;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
`;
