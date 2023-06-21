import React, { useContext } from "react";
import { ShopContext } from "../cart-context/Shop-Context";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const ProductFilters = ({ productsData, setFilteredProducts }) => {
  const animeOptions = Array.from(
    new Set(productsData.map((product) => product.productAnime))
  );

  const handleFilters = (event) => {
    const { name, value } = event.target;
    const filteredProducts = productsData.filter((product) => {
      switch (name) {
        case "anime":
          return value === "" || product.productAnime === value;
        case "minPrice":
          return value === "" || product.productPrice >= parseInt(value);
        case "maxPrice":
          return value === "" || product.productPrice <= parseInt(value);
        default:
          return true;
      }
    });

    setFilteredProducts(filteredProducts);
  };

  const { handleSearch } = useContext(ShopContext);

  return (
    <Row className="align-items-center">
      <Col xs={12} md={6} lg={3} className="mb-3">
        {/* Search Input */}
        <Form.Label>Search by Name:</Form.Label>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search products..."
          className="form-control"
        />
      </Col>
      <Col xs={6} md={3} lg={2} className="mb-3">
        {/* Anime Filter */}
        <Form.Label>Filter by Anime:</Form.Label>
        <Form.Select
          name="anime"
          onChange={handleFilters}
          className="form-select"
        >
          <option value="">All Anime</option>
          {animeOptions.map((anime) => (
            <option key={anime} value={anime}>
              {anime}
            </option>
          ))}
        </Form.Select>
      </Col>

      <Col xs={6} md={3} lg={2} className="mb-3">
        {/* Minimum Price Filter */}
        <Form.Label>Minimum Price:</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            name="minPrice"
            onChange={handleFilters}
            placeholder="Min Price"
            className="form-control"
          />
        </InputGroup>
      </Col>

      <Col xs={6} md={3} lg={2} className="mb-3">
        {/* Maximum Price Filter */}
        <Form.Label>Maximum Price:</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            name="maxPrice"
            onChange={handleFilters}
            placeholder="Max Price"
            className="form-control"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default ProductFilters;
