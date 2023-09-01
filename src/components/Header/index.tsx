import {
  HeaderContainer,
  HeaderContent,
  ViewAllProductsButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>TBB Store - Luciano Gomes</h1>
        <ViewAllProductsButton>Todos os Produtos</ViewAllProductsButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
