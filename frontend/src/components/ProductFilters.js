import React, { useContext } from "react";
import { ShopContext } from "../cart-context/Shop-Context";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const ProductFilters = ({ productsData }) => {
  const animeOptions = Array.from(
    new Set(productsData.map((product) => product.productAnime))
  );
  const categoryOptions = Array.from(
    new Set(productsData.map((product) => product.productCategory))
  );

  const {
    handleSearch,
    searchQuery,
    categoryFilter,
    setCategoryFilter,
    animeFilter,
    setAnimeFilter,
    minPriceFilter,
    setMinPriceFilter,
    maxPriceFilter,
    setMaxPriceFilter,
    handleFilters,
    handleResetFilters,
  } = useContext(ShopContext);

  return (
    <Form>
      <Row className="mb-3">
        <Col xs={12} md={4} lg={2}>
          {/* Search Input */}
          <Form.Label>Search by Name:</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products..."
            />
          </InputGroup>
        </Col>

        <Col xs={6} md={3} lg={2}>
          {/* Anime Filter */}
          <Form.Label>Filter by Anime:</Form.Label>
          <Form.Select
            name="anime"
            value={animeFilter}
            onChange={(e) => setAnimeFilter(e.target.value)}
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
        <Col xs={6} md={3} lg={2}>
          {/* Category Filter */}
          <Form.Label>Filter by Category:</Form.Label>
          <Form.Select
            name="anime"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="form-select"
          >
            <option value="">All Category</option>
            {categoryOptions.map((anime) => (
              <option key={anime} value={anime}>
                {anime}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={6} md={3} lg={2}>
          {/* Minimum Price Filter */}
          <Form.Label>Minimum Price:</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              name="minPrice"
              value={minPriceFilter}
              onChange={(e) => setMinPriceFilter(e.target.value)}
              placeholder="Min Price"
            />
          </InputGroup>
        </Col>

        <Col xs={6} md={3} lg={2}>
          {/* Maximum Price Filter */}
          <Form.Label>Maximum Price:</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              name="maxPrice"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(e.target.value)}
              placeholder="Max Price"
            />
          </InputGroup>
        </Col>

        <Col xs={6} md={2} lg={1} className="d-flex align-items-end p-2">
          {/* Apply Filters Button */}
          <Button variant="primary" onClick={handleFilters}>
            Apply Filters
          </Button>
        </Col>

        <Col xs={6} md={2} lg={1} className="d-flex align-items-end p-2">
          {/* Reset Filters Button */}
          <Button variant="secondary" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductFilters;
