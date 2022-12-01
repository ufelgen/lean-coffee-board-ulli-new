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
        <form onSubmit={handleSubmit}>
          <label htmlFor="thoughts">your question</label>
          <input
            id="thoughts"
            name="thoughts"
            type="text"
            placeholder="type your thoughts..."
            required
          />
          <label htmlFor="name">your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name"
            required
          />
          <StyledButton type="submit"> + </StyledButton>
        </form>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background-color: grey;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 5vh;
  width: 100%;
  font-size: 20px;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  color: white;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
`;
