import React from "react";
import { Carousel } from "react-bootstrap";

const Image = ({ images }) => {
  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Produit ${index + 1}`}
            style={{ height: "200px", objectFit: "cover" }} // ✅ Ajustement de la taille
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Image;
