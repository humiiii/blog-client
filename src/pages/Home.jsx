import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Newsletter />
    </Container>
  );
};

export default Home;
