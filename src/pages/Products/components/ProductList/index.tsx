import { useState, useEffect } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

import axios from "axios";
import {
  FilterProductcontainer,
  LoadingContainer,
  ProductItem,
  ProductItemImg,
  ProductItemName,
  ProductItemsBox,
  ProductListContainer,
  ProductListContent,
  SearchFormContainer,
  SearchTitleText,
  SearchTitleTextContainer,
} from "./styles";
import { CircleNotch, MagnifyingGlass } from "phosphor-react";

interface Product {
  id: string;
  name: string;
  category: {
    _id: string;
    name: string;
  };
  images: {
    alt: string;
    asset: {
      url: string;
    };
  }[];
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductItemsBoxVisible, setIsProductItemsBoxVisible] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      axios
        .get("/productsCategory.json")
        .then((response) => {
          const productNodes: Product[] = response.data.data.nodes;
          setProducts(productNodes);

          // Extrair categorias únicas dos produtos
          const uniqueCategories = [
            ...new Set(productNodes.map((product) => product.category.name)),
          ];
          setCategories(uniqueCategories);
          setIsLoading(false);
          setIsProductItemsBoxVisible(true); // Define como true após o atraso
        })
        .catch((error) => {
          console.log("Erro ao carregar os produtos:", error);
          setIsLoading(false);
        });
    }, 1000); // Atraso de 2 segundos antes de definir isLoading como false
  }, []);

  const handleCategoryFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    }
    updateFilteredProducts();
  };

  const isCategorySelected = (category: string) => {
    return selectedCategories.includes(category);
  };

  const countProductsByCategory = (categoryName: string) => {
    return products.filter((product) => product.category.name === categoryName)
      .length;
  };

  const handleSearch = () => {
    // Faz a busca apenas quando o botão "Buscar" é clicado
    updateFilteredProducts();
  };

  const updateFilteredProducts = () => {
    const filtered = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category.name)) &&
        (searchTerm === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    // Faz a primeira filtragem quando a página é carregada
    updateFilteredProducts();
  }, [selectedCategories, products]);

  return (
    <>
      <SearchFormContainer onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Busque pelo nome do produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="button" onClick={handleSearch}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
      <SearchTitleTextContainer>
        <SearchTitleText>
          O que você <span>está procurando?</span>
        </SearchTitleText>
      </SearchTitleTextContainer>

      <ProductListContainer>
        <FilterProductcontainer>
          <p>Filtrar por categoria:</p>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={handleCategoryFilter}
                checked={isCategorySelected(category)}
              />
              {category} ({countProductsByCategory(category)})
            </label>
          ))}
        </FilterProductcontainer>

        <ProductListContent>
          {isLoading ? (
            // Mostrar o componente de carregamento enquanto isLoading é true
            <LoadingContainer>
              <CircleNotch size={50} color={"#166290"} />
              <p>Carregando produtos...</p>
            </LoadingContainer>
          ) : (
            // Renderizar a lista de produtos quando isLoading é false
            <>
              <h3>{`Total de produtos: ${filteredProducts.length}`}</h3>
              {filteredProducts.length === 0 ? (
                <p>Nenhum produto encontrado</p>
              ) : (
                // Use o TransitionGroup e CSSTransition para aplicar a animação
                <TransitionGroup>
                  <CSSTransition
                    in={!isLoading}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                  >
                    <ProductItemsBox>
                      {filteredProducts.map((product) => (
                        <ProductItem key={product.id}>
                          <ProductItemImg
                            src={product.images[0].asset.url}
                            alt={product.images[0].alt}
                          />
                          <ProductItemName>{product.name}</ProductItemName>
                        </ProductItem>
                      ))}
                    </ProductItemsBox>
                  </CSSTransition>
                </TransitionGroup>
              )}
            </>
          )}
        </ProductListContent>
      </ProductListContainer>
    </>
  );
}
