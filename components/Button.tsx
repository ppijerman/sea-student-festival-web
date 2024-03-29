import styled from "styled-components";

const Button = styled.a`
  background: var(--red);
  font-weight: 900;
  font-size: 24px;
  color: var(--sand);
  padding: 10px 20px;
  border-radius: 40px;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: #fa353f;
  }
`;

export default Button;