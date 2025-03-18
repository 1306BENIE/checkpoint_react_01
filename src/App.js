import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./components/Name";  // Importation du composant 'Name'
import Price from "./components/Price";  // Importation du composant 'Price'
import Description from "./components/Description";  // Importation du composant 'Description'
import Image from "./components/Image";  // Importation du composant 'Image'
import Navigation from "./components/Navbar"; // Import de la Navbar pour la navigation
import product from "./product";  // Importation de l'objet 'product' qui contient les données produit

const firstName = "BENIE";  // Déclaration du prénom à afficher dans le message de bienvenue

const App = () => {
  return (
    <>
      {/* Ajout de la Navbar avec l'image et le message d'accueil */}
      <Navigation firstName={firstName} />

      {/* Conteneur principal pour le produit */}
      <Container className="d-flex flex-column align-items-center mt-5">
        
        {/* Carte pour afficher les détails du produit */}
        <Card style={{ width: "18rem" }} className="shadow-lg p-3 mb-4 bg-white rounded">
          
          {/* Corps de la carte contenant les informations du produit */}
          <Card.Body className="text-center">
            
            {/* Affichage de l'image du produit */}
            <Image images={product.images} />

            {/* Affichage du nom du produit */}
            <Name name={product.name} />

            {/* Affichage du prix du produit */}
            <Price price={product.price} />

            {/* Affichage de la description du produit */}
            <Description description={product.description} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default App;
