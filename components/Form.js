import styled from "styled-components";

export default function Form({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      thoughts: event.target.elements.thoughts.value,
      name: event.target.elements.name.value,
    };

    onAddCard(newCard);
    event.target.reset();
    event.target.elements.thoughts.focus();
  }

  return (
    <>
      <StyledFooter>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="thoughts">your thoughts: </label>
          <input
            id="thoughts"
            name="thoughts"
            type="text"
            placeholder="type your thoughts..."
            required
          />
          <label htmlFor="name"> your name: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name"
            required
          />
          <StyledButton type="submit"> + </StyledButton>
        </StyledForm>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background-color: grey;
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100%;
`;

const StyledForm = styled.form`
  margin-top: 15px;
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  color: white;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
`;
