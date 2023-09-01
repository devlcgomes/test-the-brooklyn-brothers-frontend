import { Header } from "../../components/Header";
import { ProductList } from "./components/ProductList";
import { SearchForm } from "./components/SearchForm";
import { SearchFormContainer } from "./styles";

export function Products() {
  return (
    <div>
      <Header />
      <SearchFormContainer>
        <SearchForm />
      </SearchFormContainer>
      <ProductList />
    </div>
  );
}
