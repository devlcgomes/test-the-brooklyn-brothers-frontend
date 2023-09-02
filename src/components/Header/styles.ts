import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-500"]};
  padding: 2.5rem 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  color: ${(props) => props.theme["white-text"]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.75rem;
  }

  @media (min-width: 450px) and (max-width: 760px) {
    padding: 0 2rem;
  }

  @media (min-width: 760px) and (max-width: 1120px) {
    padding: 0 2rem;
  }
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
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.5rem;

  @media (max-width: 450px) {
    height: 40px;
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-200"]};
    transition: background-color 0.2s;
  }
`;
