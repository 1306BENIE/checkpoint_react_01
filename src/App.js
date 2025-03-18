import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Navigation from "./components/Navbar"; // ✅ Import de la nav
import product from "./product";

const firstName = "BENIE"; 

const App = () => {
  return (
    <>
      {/* Ajout de la Navbar avec l’image et le message */}
      <Navigation firstName={firstName} />

      <Container className="d-flex flex-column align-items-center mt-5">
        <Card style={{ width: "18rem" }} className="shadow-lg p-3 mb-4 bg-white rounded">
          <Card.Body className="text-center">
            <Image images={product.images} />
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default App;
