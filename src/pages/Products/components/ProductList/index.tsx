import { useEffect, useState } from "react";
import {
  FilterProductcontainer,
  ProductItem,
  ProductItemImage,
  ProductItemInfo,
  ProductListContainer,
  ProductListContent,
  ProductListHeader,
  SearchFormContainer,
} from "./styles";
import axios from "axios";
import { MagnifyingGlass } from "phosphor-react";

export function ProductList() {
  const [products, setProducts] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Array<any>>([]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts); // Atualize filteredProducts com os produtos filtrados
  };

  useEffect(() => {
    axios
      .get("/productsCategory.json")
      .then((response) => {
        setProducts(response.data.data.nodes);
        setFilteredProducts(response.data.data.nodes); // Inicialize filteredProducts com todos os produtos
      })
      .catch((error) => {
        console.log("Erro ao carregar os produtos:", error);
      });
  }, []);

  useEffect(() => {
    console.log(filteredProducts);
    console.log(searchTerm);
  }, []);

  return (
    <>
      <SearchFormContainer onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Busque pelo nome do produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
      <ProductListContainer>
        <FilterProductcontainer>Filtra ai desgraça</FilterProductcontainer>
        <div>
          <ProductListHeader>
            <h3>{`Total de produtos: ${filteredProducts.length}`}</h3>
          </ProductListHeader>
          <ProductListContent>
            {filteredProducts.length === 0 ? (
              <p>Nenhum produto encontrado</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductItem key={product.id}>
                  <ProductItemImage
                    src={product.images[0].asset.url}
                    alt={product.name}
                  />
                  <ProductItemInfo>{product.name}</ProductItemInfo>
                </ProductItem>
              ))
            )}
          </ProductListContent>
        </div>
      </ProductListContainer>
    </>
  );
}
