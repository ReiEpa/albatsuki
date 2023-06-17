import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Albatsuki</h1>
        <p>Your one-stop shop for anime clothes and accessories in Albania</p>
      </header>
      <main>
        <section>
          <h2>Featured Products</h2>
          {/* Display your featured products here */}
        </section>
        <section>
          <h2>About Albatsuki</h2>
          <p>
            Albatsuki is a leading online retailer of anime clothes and
            accessories in Albania. We offer a wide range of products inspired
            by your favorite anime series, including t-shirts, hoodies,
            figurines, keychains, and more.
          </p>
          <p>
            Explore our collection and find the perfect merchandise to show off
            your love for anime.
          </p>
        </section>
        <section>
          <h2>Why Choose Albatsuki?</h2>
          <ul>
            <li>High-quality products with authentic anime designs</li>
            <li>Fast and reliable shipping</li>
            <li>Secure payment options</li>
            <li>Responsive customer support</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, feel free to contact us:
          </p>
          <ul>
            <li>Email: info@albatsuki.com</li>
            <li>Phone: +355 123 456 789</li>
            <li>Address: 123 Anime Street, Tirana, Albania</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Albatsuki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
