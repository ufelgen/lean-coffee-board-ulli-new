import styled from "styled-components";

export default function Card({ name, thoughts }) {
  return (
    <StyledCard>
      <h4>{name} is thinking about...</h4>
      <p>{thoughts}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
