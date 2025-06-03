import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.blue ? "blue" : "gray"};
  padding: 8px;
  border-radius: 8px;
  margin: 8px;
  color: white;
`;

const Button = ({ children, blue }) => {
  return <StyledButton blue={blue}>{children}</StyledButton>
}

export default Button;