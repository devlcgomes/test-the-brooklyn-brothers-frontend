import { MagnifyingGlass } from "phosphor-react";
import { SearchFformContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFformContainer>
      <input type="text" placeholder="Busque aqui" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFformContainer>
  );
}
