import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme["gray-300"]};
    color: ${({ theme }) => theme["gray-500"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme["gray-500"]};
    color: ${({ theme }) => theme["gray-500"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${({ theme }) => theme["blue-500"]};
      border: 1px solid ${({ theme }) => theme["blue-500"]};
      color: ${({ theme }) => theme["white-text"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;

export const ProductListContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const FilterProductcontainer = styled.div`
  flex: 500px;
`;

export const ProductListHeader = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  padding-left: 1.75rem;
`;

export const ProductListContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  border: 1px solid ${({ theme }) => theme["gray-200"]};
  width: 15rem;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductItemImage = styled.img`
  width: 100%;
`;

export const ProductItemInfo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
`;
