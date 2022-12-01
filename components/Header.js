import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>☕️ Lean Coffee Board ☕️</h1>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  height: 10vh;
  justify-content: center;
  align-content: center;
  display: flex;
`;
