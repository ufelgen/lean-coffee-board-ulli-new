import styled from "styled-components";
import { HiTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";

export default function Card({ name, thoughts, id, onRemoveCard, onEditCard }) {
  return (
    <StyledCard>
      <h4>{name} is thinking about...</h4>
      <p>{thoughts}</p>
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
