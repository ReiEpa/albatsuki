# albatsuki

This is a README FILE about the project me and my brother want to make.

We want to create an online shopping anime page with anime products.
We will use MERN stack and try to make it responsive.

Here are the things we are yet to do:

1.Add a Search Filter (try to do it as a single component and then add it to the Header component)
2.Create a Login/Register Components and style them with bootstrap 5.
3.Edit the Home page.
4.Adding an Admin User to add/edit/update/delete products.
5.Adding new features like for example: (
1.A non-stop playing song while shopping.
2.Ranged Price Filters.
3.Checkout to buy.
4.etc
)

------------Products before filter prize------
// import React, { useContext, useEffect, useState } from "react";
// import Product from "../components/Product";
// import { Container, Row, Col } from "react-bootstrap";
// import { URL } from "../apis/URL";
// import { ShopContext } from "../cart-context/Shop-Context";

// // import AddProduct from "../admin/AddProduct";

// const Products = ({ category }) => {
// const [productsData, setProductsData] = useState([]);
// const [animeFilter, setAnimeFilter] = useState("");

// const { searchQuery } = useContext(ShopContext);

// useEffect(() => {
// const fetchData = async () => {
// try {
// const url = category
// ? `${URL}/products?category=${category}`
// : `${URL}/products`;
// const res = await fetch(url);
// const newProducts = await res.json();
// // Add a unique identifier to each product
// const productsWithIds = newProducts.map((product, index) => ({
// ...product,
// id: index + 1, // Start the IDs from 1 instead of 0
// }));
// setProductsData(productsWithIds);
// } catch (error) {
// console.log(error);
// }
// };
// fetchData();
// }, [category]);

// const animeOptions = Array.from(
// new Set(productsData.map((product) => product.productAnime))
// );

// const filteredProducts = productsData.filter(
// (product) =>
// (animeFilter === "" || product.productAnime.includes(animeFilter)) &&
// (searchQuery === "" ||
// product.productName.toLowerCase().includes(searchQuery.toLowerCase()))
// );

// return (
// <Container>
// {/_ <AddProduct
// productsData={productsData}
// setProductsData={setProductsData}
// /> _/}
// <div>
// <select
// value={animeFilter}
// onChange={(e) => setAnimeFilter(e.target.value)}
// >
// <option value="">All Anime</option>
// {animeOptions.map((anime) => (
// <option key={anime} value={anime}>
// {anime}
// </option>
// ))}
// </select>
// </div>
// <Row className="grid g-3">
// {filteredProducts.map((product) => (
// <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
// <Product product={product} id={product.id} />
// </Col>
// ))}
// </Row>
// </Container>
// );
// };

// export default Products;
