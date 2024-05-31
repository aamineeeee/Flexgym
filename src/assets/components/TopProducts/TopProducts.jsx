import React from "react";
import Img1 from "./images/shirt.png";
import Img2 from "./images/shirt2.png";
import Img3 from "./images/shirt3.png";
import Img4 from "./images/shirt4.png";
import Img5 from "./images/shirt5.png";
import Img6 from "./images/shirt6.png";
import Img7 from "./images/shirt7.png";
import Img8 from "./images/shirt8.png"; // Ajout de nouvelles images
import Img9 from "./images/shirt9.png"; // Ajout de nouvelles images
import Img10 from "./images/shirt10.png";
import Img11 from "./images/shirt11.png"; // Ajout de nouvelles images
import Img12 from "./images/shirt12.png"; // Ajout de nouvelles images
import Img13 from "./images/shirt13.png";
import Img14 from "./images/shirt14.png"; // Ajout de nouvelles images
import Img15 from "./images/shirt15.png"; // Ajout de nouvelles images
import { FaStar } from "react-icons/fa";
import AA from "./images/AA.jpeg";
import "./TopProducts.css";




const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Whey protein",
    description: "689 DH",
  },
  {
    id: 2,
    img: Img2,
    title: "BCAA",
    description: "398 DH",
  },
  {
    id: 3,
    img: Img3,
    title: "Creatine micronized",
    description: "270 DH",
  },
  {
    id: 4,
    img: Img4,
    title: "Gym short",
    description: "179 DH",
  },
  {
    id: 5,
    img: Img5,
    title: "Dumbell 1.5 KG",
    description: "134 DH",
  },
  {
    id: 6,
    img: Img6,
    title: "Dumbell 5 KG",
    description: "219 DH",
  },
  {
    id: 7,
    img: Img7,
    title: "Yoga equipment",
    description: "79 DH",
  },
  {
    id: 8,
    img: Img8,
    title: "Protein shaker",
    description: "49 DH",
  },
  {
    id: 9,
    img: Img9,
    title: "Protein shaker",
    description: "69 DH",
  },
  {
    id: 10,
    img: Img10,
    title: "Protein shaker",
    description: "79 DH ",
  },
  {
    id: 11,
    img: Img11,
    title: "Exercise wheel",
    description: "89 DH",
  },
  {
    id: 12,
    img: Img12,
    title: "Gymball",
    description: "319 DH",
  },
  {
    id: 13,
    img: Img13,
    title: "Blue gym shirt",
    description: "129 DH",
  },
  {
    id: 14,
    img: Img14,
    title: "Black gym shirt",
    description: "129 DH",
  },
  {
    id: 15,
    img: Img15,
    title: "Adidas Gym short",
    description: "279 DH",
  },
];

const TopProducts = ({ handleOrder }) => {
  const handleOrderClick = (productId) => {
    // Appeler la fonction handleOrder avec l'ID du produit
    handleOrder(productId);
  };

  return (
       <div className="about-wrapper">
      <section className="about-banner banner">
        <div className="container center flex-col">
          <div className="banner-heading">
            <h1>Products</h1>
          </div>
        </div>
      </section>
      <div className="about-col" id="img-col">
        <div className="col-img">
        </div>
      </div>


      <div className="container">
        {/* Section en-tête */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          </h1>
        </div>
        {/* Section corps */}
        <div>
          {Array(5)
            .fill()
            .map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-center">
                {ProductsData.slice(rowIndex * 3, rowIndex * 3 + 3).map(
                  (data) => (
                    <div
                      key={data.id}
                      data-aos="zoom-in"
                      className="rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] m-2"
                      style={{ margin: "70px" }}
                    >
                      {/* Section image */}
                      <div className="h-[100px]">
                        <img
                          src={data.img}
                          alt=""
                          className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                        />
                      </div>
                      {/* Section détails */}
                      <div className="p-4 text-center">
                        {/* Évaluation par étoiles */}
                        <div className="w-full flex items-center justify-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold">{data.title}</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                          {data.description}
                        </p>
                        <button
                          style={{ backgroundColor: "#ff4500" }}
                          className="hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                          onClick={() => handleOrderClick(data.id)}
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;