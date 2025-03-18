import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = ""; 

const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card
        style={{ width: "18rem" }}
        className="shadow-lg p-3 mb-4 bg-white rounded"
      >
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Message conditionnel */}
      <h3 className="mt-3">Bonjour, {firstName || "!"}</h3>

      {/* Affichage conditionnel de l'image */}
      {firstName && (
        <img
          src="../assets/product-1.jpg"
          alt="User"
          className="mt-3 rounded-circle"
        />
      )}
    </Container>
  );
};

export default App;
