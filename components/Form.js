import styled from "styled-components";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export default function Form({ onCreateNew }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      text: event.target.elements.thoughts.value,
      name: event.target.elements.name.value,
    };

    onCreateNew(newCard);

    event.target.reset();
    event.target.elements.thoughts.focus();
  }

  return (
    <>
      <StyledFooter>
        <StyledForm onSubmit={handleSubmit}>
          <StyledName>
            <label htmlFor="thoughts">your thoughts: </label>
            <StyledInput
              id="thoughts"
              name="thoughts"
              type="text"
              placeholder="What are you thinking about?"
              required
            />
          </StyledName>
          <StyledText>
            <label htmlFor="name"> your name: </label>
            <StyledInput
              id="name"
              name="name"
              type="text"
              placeholder="your name"
              required
            />
          </StyledText>
          <StyledButton type="submit">
            {" "}
            <HiOutlineDocumentAdd size="35px" />{" "}
          </StyledButton>
        </StyledForm>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  background-color: grey;
  position: fixed;
  bottom: 0;
  height: 15vh;
  width: 100%;
`;

const StyledForm = styled.form`
  padding: 2px;
  display: grid;
  grid-template-areas:
    "name button"
    "text button";
  align-items: center;
  font-size: 20px;
`;

const StyledButton = styled.button`
  color: white;
  background-color: black;
  grid-area: button;
  margin-right: 10px;
`;

const StyledName = styled.div`
  grid-area: name;
  padding-left: 10px;
  padding-top: 5px;
`;

const StyledText = styled.div`
  grid-area: text;
  padding-left: 10px;
  padding-top: 5px;
`;

const StyledInput = styled.input`
  width: 80vw;
`;
