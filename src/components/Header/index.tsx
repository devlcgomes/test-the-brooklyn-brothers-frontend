import { ShoppingCart } from "phosphor-react";
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
        <ViewAllProductsButton>
          <ShoppingCart size={20} />
          Meu carrinho
        </ViewAllProductsButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
