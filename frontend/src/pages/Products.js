import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { URL } from "../apis/URL";
import AddProduct from "../admin/AddProduct";

const Products = ({ category }) => {
  const [productsData, setProductsData] = useState([]);
  const [animeFilter, setAnimeFilter] = useState("");

  const fetchData = async () => {
    try {
      const url = category
        ? `${URL}/products?category=${category}`
        : `${URL}/products`;
      const res = await fetch(url);
      const newProducts = await res.json();
      // Add a unique identifier to each product
      const productsWithIds = newProducts.map((product, index) => ({
        ...product,
        id: index + 1, // Start the IDs from 1 instead of 0
      }));
      setProductsData(productsWithIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const animeOptions = Array.from(
    new Set(productsData.map((product) => product.productAnime))
  );

  const filteredProducts = productsData.filter(
    (product) =>
      animeFilter === "" || product.productAnime.includes(animeFilter)
  );

  return (
    <Container>
      {/* <AddProduct
        productsData={productsData}
        setProductsData={setProductsData}
      /> */}
      <div>
        <select
          value={animeFilter}
          onChange={(e) => setAnimeFilter(e.target.value)}
        >
          <option value="">All Anime</option>
          {animeOptions.map((anime) => (
            <option key={anime} value={anime}>
              {anime}
            </option>
          ))}
        </select>
      </div>
      <Row className="grid g-3 ">
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
            <Product product={product} id={product.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
