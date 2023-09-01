import styled from "styled-components";

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
