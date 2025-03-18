// Importation des images du produit à partir du dossier 'assets'
import product1 from "./assets/product-1.jpg";  
import product2 from "./assets/product-2.jpg"; 
import product3 from "./assets/product-3.jpg";

// Définition de l'objet 'product' qui contient les informations du produit
const product = {
  name: "Montre Connectée",
  price: "199€",
  description: "Une montre intelligente avec suivi de la santé et notifications.",  // Description du produit
  images: [product1, product2, product3]
};

// Exportation de l'objet 'product' afin qu'il puisse être utilisé dans d'autres fichiers
export default product;
