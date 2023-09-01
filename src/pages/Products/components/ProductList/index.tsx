import { useEffect, useState } from "react";
import {
  FilterProductcontainer,
  ProductItem,
  ProductItemImage,
  ProductItemInfo,
  ProductListContainer,
  ProductListContent,
  ProductListHeader,
} from "./styles";
import axios from "axios";

export function ProductList() {
  const [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get("/productsCategory.json")
      .then((response) => {
        if (response.data.data.nodes) {
          setProducts(response.data.data.nodes);
        } else {
          console.error("O campo 'nodes' não existe no JSON de resposta.");
        }
      })
      .catch((error) => {
        console.log("Erro ao carregar os produtos:", error);
      });
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <ProductListContainer>
      <FilterProductcontainer>Filtra ai desgraça</FilterProductcontainer>
      <div>
        <ProductListHeader>
          <h3>Quantidade de Produtos: {products.length}</h3>
        </ProductListHeader>
        <ProductListContent>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductItemImage
                src={product.images[0].asset.url}
                alt={product.name}
              />
              <ProductItemInfo>{product.name}</ProductItemInfo>
            </ProductItem>
          ))}
        </ProductListContent>
      </div>
    </ProductListContainer>
  );
}
