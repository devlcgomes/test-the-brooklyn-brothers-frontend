import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme["blue-500"]};
  color: ${({ theme }) => theme["white-text"]};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
