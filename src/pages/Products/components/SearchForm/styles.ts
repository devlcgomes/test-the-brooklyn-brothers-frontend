import styled from "styled-components";

export const SearchFformContainer = styled.form`
  display: flex;
  gap: 1rem;

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
