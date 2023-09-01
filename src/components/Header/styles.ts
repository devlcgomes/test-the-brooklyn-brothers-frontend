import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-500"]};
  padding: 2.5rem 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  color: ${(props) => props.theme["white-text"]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewAllProductsButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme["white-bg"]};
  color: ${(props) => props.theme["blue-500"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["blue-700"]};
    transition: background-color 0.2s;
  }
`;
