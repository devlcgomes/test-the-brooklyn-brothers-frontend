import { useState, useEffect } from "react";
import axios from "axios";
import {
  FilterProductcontainer,
  ProductItem,
  ProductItemImg,
  ProductItemName,
  ProductItemsBox,
  ProductListContainer,
  ProductListContent,
  SearchFormContainer,
} from "./styles";

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

  useEffect(() => {
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
      })
      .catch((error) => {
        console.log("Erro ao carregar os produtos:", error);
      });
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
          Buscar
        </button>
      </SearchFormContainer>

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
              {category}
            </label>
          ))}
        </FilterProductcontainer>

        <ProductListContent>
          <h3>{`Total de produtos: ${filteredProducts.length}`}</h3>
          {filteredProducts.length === 0 ? (
            <p>Nenhum produto encontrado</p>
          ) : (
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
          )}
        </ProductListContent>
      </ProductListContainer>
    </>
  );
}
