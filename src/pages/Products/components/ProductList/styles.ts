import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 450px) {
    padding: 0 1rem;
    font-size: 0.75rem;
  }

  @media (min-width: 450px) and (max-width: 760px) {
    padding: 0 2rem;
  }

  @media (min-width: 760px) and (max-width: 1120px) {
    padding: 0 2rem;
  }

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

    @media (max-width: 390px) {
      width: 20rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0.5rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme["gray-500"]};
    color: ${({ theme }) => theme["gray-500"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme["blue-500"]};
      color: ${({ theme }) => theme["white-text"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    @media (max-width: 390px) {
      width: 8rem;
    }
  }
`;
export const SearchTitleTextContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 1.75rem;

  span {
    color: ${({ theme }) => theme["blue-500"]};
  }

  @media (max-width: 450px) {
    text-align: center;
  }

  @media (min-width: 450px) and (max-width: 760px) {
    padding-left: 2rem;
  }

  @media (min-width: 760px) and (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const SearchTitleText = styled.h3`
  color: ${({ theme }) => theme["gray-500"]};
  font-size: 1.6rem;

  @media (max-width: 450px) {
    font-size: 1.4 rem;
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

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 450px) and (max-width: 760px) {
  }
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

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ProductListContent = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    gap: 0.4rem;
  }

  @media (min-width: 450px) and (max-width: 760px) {
  }
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
  padding-bottom: 2rem;

  &.fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  @media (max-width: 450px) {
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;

export const ProductItem = styled.div`
  border: 2px solid ${({ theme }) => theme["gray-200"]};
  border-radius: 10px;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: box-shadow 0.3s;
  }

  @media (max-width: 440px) {
    margin: 0 auto;
    width: 40%;
  }

  @media (min-width: 450px) and (max-width: 760px) {
    width: 40%;
  }
`;

export const ProductItemName = styled.div`
  color: ${({ theme }) => theme["gray-500"]};
  text-align: center;
  padding: 1rem 0.75rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    animation: spin 1s linear infinite; /* Adiciona a animação de rotação */
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    font-size: 1.35rem;
  }
`;
