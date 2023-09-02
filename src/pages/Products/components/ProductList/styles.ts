import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;

  input {
    border-radius: 6px;
    border: 0;
    flex: 1;
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
  padding-top: 1rem;
  display: flex;
`;

export const FilterProductcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 200px;

  input {
    margin-right: 0.5rem;
  }

  input:checked {
    background: ${({ theme }) => theme["blue-500"]};
  }
`;

export const ProductListContent = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ProductItemImg = styled.img`
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ProductItemsBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProductItem = styled.div`
  border: 2px solid ${({ theme }) => theme["gray-200"]};
  border-radius: 10px;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductItemName = styled.div`
  color: ${({ theme }) => theme["gray-500"]};
  text-align: center;
`;
